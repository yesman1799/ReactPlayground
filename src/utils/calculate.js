

export const operations = [
    { value: "+", label: "addition"},
    { value: "-", label: "substracion"},
    { value: "*", label: "multiplication"},
    { value: "/", label: "division"},
    { value: "%", label: "modulo"}
]

export function calculate(a, b, operation) {
    switch(operation) {
        case "+":
            return a+b;
        case "-":
            return a-b;
        case "*":
            return a*b;
        case "/":
            return (b === 0)? "impossible division with 0": a/b;
        case "%":
            return a%b;
        default: return null;
    }
}