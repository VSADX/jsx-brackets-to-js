# jsx-brackets-to-js
  
<table>
<tr>
<td>
  <img src=./img-pre-conversion.png alt="JSX file showing a simple component" />
</td>
<td>
  <img src=./img-auto-conversion.png alt="JS file created when the client loads the JSX file" />
</td>
</tr>
</table>
  
# How to convert JSX to a JS string
1. Supports custom elements in template literals.
```jsx
<CustomElement />
```
```js
<${CustomElement} />
```
2. Activates/Disactivates
```jsx
<>
  <p> Hello world </p>
</>
```
```js
html`
  <p> Hello world </p>
`
```
3. JSX brackets to JS template subsitution
```jsx
<>
  <p> Hello, {title} {lname} </p>
</>
```
```js
html`
  <p> Hello, ${title} ${lname} </p>
`
```
4. Nested JSX
```jsx
<>
  {items.map(item => 
    (
      <p> {item} </p>
    )
  )}
</>
```
```js
html`
    ${items.map(item => 
        html`<p> ${item} </p>`
    )}
`
```
5. Multiline inline callbacks
```jsx
<button onclick={() => {
    console.log("Line one")
    console.log("Line two")
}}> Click me </button>
```
```js
<button onclick=${() => {
    console.log("Line one")
    console.log("Line two")
}}> Click me </button>
```
6. Object literal inline callbacks
```jsx
<button onclick={() => ({prop: "value"})}>
  Click me
</button>
```
```js
<button onclick=${() => ({prop: "value"})}>
  Click me
</button>
```
  
# Note
1.
```jsx
<Display person={list[i + 1]} />
```
```jsx
<${Display} person=${__(() => list[i + 1])} />
```
2.
```jsx
<Display person={list[i + 1], useMemo} />
```
```jsx
<${Display} person=${__(() => list[i + 1], useMemo)} />
```
3.
```jsx
<Select onInput={value => flavor = value, useCallback} />
```
```jsx
<${Display} person=${__(() => value => flavor = value, useCallback)} />
```
4.
```jsx
function Comp({name}) {
    ___(() => name ? directive.docontinue : directive.doreturn)

    return (
      <>
          <p> Else </p>
          <hr />
      </>
    )
}
```
5.
```jsx
function doEarlyReturn(bool) {
    return ___(() => bool ? directive.docontinue : directive.doreturn)
}
function Comp2({name}) {
    doEarlyReturn(name)

    return (
      <>
          <p> Else </p>
          <hr />
      </>
    )
}
```
