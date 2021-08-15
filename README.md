# jsx-brackets-to-js
## option 1
+ converts `{}` to `${}`
+ only on the outer `{}`
+ leaves inner `{}` alone
## option 2
+ converts `{}` to `${}`
+ all `{}` not as `${}` to `${}`
+ converts `[!` to `{`, `!]` to `}`
## option 3
+ shows `!${}` as value
+ converts `{}` to `${}`
## raw jsx
```jsx
<div>
    <h1>
        {fname} {lname}
    </h1>
    
    <p> {bio} </p>
    
    <button onClick={() => alert(`Followed ${fname} ${lname}`)}> Follow {fname} </button>
    
    <style>!${css`
        h1 {
            color: blue;
        }
        p {
            background: red;
        }
    `}</style>
</div>
```
## function jsx
```js
function make_name(first = "", last = "") {
    let fname = first
    let lname = last

    return /*!:*/<div>

        <p>{fname} {lname}</p>

        <button onClick={()=>alert(`clicked ${lname}, ${fname}`)}></button>

        <style>
            !${css`
                p {
                    background: red;
                }
            `}
        </style>
    </div>/*:!*/
}
```

## Non-JSX vsc ext
```
Name: es6-string-html
Id: tobermory.es6-string-html
Description: Syntax highlighting in es6 multiline strings
Version: 2.10.0
Publisher: Tobermory
VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=Tobermory.es6-string-html
```
```
Name: lit-html
Id: bierner.lit-html
Description: Syntax highlighting and IntelliSense for html inside of JavaScript and TypeScript tagged template strings
Version: 1.11.1
Publisher: Matt Bierner
VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=bierner.lit-html
```
```
Name: Html Embedded Javascript
Id: shuaihu.html-embedded-javascript
Description: Provides rich language support for HTML and Handlebar files
Version: 1.54.5
Publisher: shuaihu
VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=shuaihu.html-embedded-javascript
```
