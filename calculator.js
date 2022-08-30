const operation = {
    add(a, b) { return a+b; },
    substract(a, b) { return a-b; },
    divide(a, b) { return b!=0? a/b: 'Error: "b" cant be zero'; },
    multiply(a, b) { return a*b; }
}
  
export { operation };