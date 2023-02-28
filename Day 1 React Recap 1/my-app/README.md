Impure function - here sum() is affected by outer c so it is impure function.

let c=10;

function sum(a,b){
    return a+b+c
}

sum(1,2) //13

1. State change
2. Props change
3. Mounting phase
4. Unmounting

A. useEffect works without second argument
- On component mounting
- On component re-rendering