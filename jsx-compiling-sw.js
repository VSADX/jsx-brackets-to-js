/// <reference lib="webworker" />
/// use id F251CA.

const waiter = Promise.all[
    new Promise(r => oninstall = r),
    new Promise(r => onactivate = r)
]

onmessage = async e => {
    await waiter
    skipWaiting()
    clients.claim()
    e.source.postMessage(e.data)

    if(e.data) return

    // handle uninstall
    await registration.unregister()
    const all = await clients.matchAll()
    all.forEach(c => c.navigate(c.url))
}

onfetch = e =>
    e.request.url.endsWith("jsx") && e.respondWith(respondable(e.request))


async function respondable(request = new Request) {
    const script = await fetch(request).then(r => r.text())
    const response = new Response(new Blob([jsx(script, false)]))
    const { headers: h, body, status, statusText } = response
    const headers = new Headers(h)
    headers.set('Content-Type', 'application/javascript; charset=UTF-8')
    return new Response(body, { headers, status, statusText })  
}

const matcher = {
    "=>({": false,
    "=>{": false,
    "({": false,
    "})": false,
    "${": false,
    "var{": false,
    "let{": false,
    "const{": false,
    "(<": "( /* from jsx */ html`<",
    ">)": ">` /* from jsx */ )",
    "{{": "${{",
    "{": "${",
    "}": false,
    // // uncomment to enable JSX-extended-syntax
    // "{": "${useHtml(() => ",
    // "}": ")}",
}
const order = [
    /\({/, //               ({
    /}\)/, //               })
    /{/, //                 {
    /}/, //                 }
    /\((\s*?)</, //         (<
    />(\s*?)\)/, //         >)
    /{{/, //                {{
    /var(\s*?){/, //        var {
    /let(\s*?){/, //        let {
    /const(\s*?){/, //      const {
    /${/, //                ${
    /=>(\s*?){/, //         => {
    /=>(\s*?)\((\s*?){/, // => ({
]
const rex = new RegExp(order.map(r => r.source).join("|"),"gm")

function jsx(string_component = "", should_compile = true, compiler = eval) {

    const compiled = string_component.split("<>")

    for (let i = 0; i < compiled.length; i++) {
        const opening = compiled[i]
        if(i === 0) continue
        
        const ending = opening.split("</>")
        const html = ending[0]
        
        ending[0] = html
            .replace(rex, 
                match => matcher[match.replace(/\s/gm, "")] || match)
            .replace(/\<([A-Z][a-zA-Z.]+)/g,"<${$1}")
            .replace(/\<\/([A-Z][a-zA-Z.]+)/g,"</${$1}")
        
        compiled[i] = `/* from jsx */ html\`${ending[0]}\`${ending[1]}`
    }

    if(!should_compile) return compiled.join("")
    else return compiler.call(null, compiler.call(null, compiled.join("")))
}
