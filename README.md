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
+ shows `${}` as value
+ converts `{}` to `${}`
## Examples
```jsx
<div>
    <h1>
        {fname} {lname}
    </h1>
    
    <p> {bio} </p>
    
    <button onClick={() => alert(`Followed ${fname} ${lname}`)}> Follow {fname} </button>
    
    <style>${css`
        h1 {
            color: blue;
        }
        p {
            background: red;
        }
    `}</style>
</div>
```
