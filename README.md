# jsx-brackets-to-js
+ converts `{}` to `${}`
+ only on the outer `{}`
+ leaves inner `{}` alone
## Examples
```js
let test1 = `<p onclick={() => {}}> Click me! </p>`
test1 = jsx_to_js(test1)

console.log(test1) // <p onclick=${() => {}}> Click me! </p>
```
```js
let test2 = `<p prop:all={{color: "blue", count: 4}}> Click me! </p>`
test1 = jsx_to_js(test2)

console.log(test2) // <p prop:all=${{color: "blue", count: 4}}> Click me! </p>
```
```jsx
<div>
    <h1>
        {my_name}
        <small>
            You are box is {size} long.
        </small>
    </h1>
    
    <style>{css`
        .lol {

        }
    `}</style>
</div>
```
