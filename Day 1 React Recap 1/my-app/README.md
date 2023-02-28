Impure function - here sum() is affected by outer c so it is impure function.

let c = 10;

function sum(a,b){
    return a+b+c
}

sum(1,2) //13

Cleanup function


1. State change
2. Props change
3. Mounting phase
4. Unmounting

A. useEffect works without second argument
- On component mounting
- On component re-rendering

B. useEffect with []
- On component mounting

C. useEffect with [state/variable]
- On component mounting
- If the state/variable inside array changes

D. useEffect with cleanup function
- Why cleanup
- During unmounting
- when the value inside array changes