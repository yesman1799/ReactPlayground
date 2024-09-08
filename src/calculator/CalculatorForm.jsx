import { NumberInput } from "./NumberInput";
import Select from "react-select";
import { Result } from "./Result";
import { operations, calculate } from "../utils/calculate";
import { useState } from "react"


export function CalculatorForm({ title }){
    
    const [number1, setNumber1] = useState(0);
    const [number2, setNumber2] = useState(0);
    const [selectedOperation, setSelectedOperation] = useState(operations[0]);
    const [result, setResult] = useState(null);

    function handleNumber1(e){
        setNumber1(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        const numA = parseFloat(number1);
        const numB = parseFloat(number2);
        const res = calculate(numA, numB, selectedOperation.value)
        setResult(res)
        console.log(res)        
    }

    console.log(number1)
    console.log(number2)
    console.log(selectedOperation.value)
    console.log(result)

    
    // console.log(number1)
    

    return (
        <div>
            <h1>{ title }</h1>
            <form onSubmit={handleSubmit}>
                <NumberInput
                    label={"First num: "}
                    name={"a"}
                    onChange={handleNumber1}
                />
                <NumberInput
                    label={"Second num: "}
                    name={"b"}
                    onChange={(e) => setNumber2(e.target.value)}
                />

                <Select options={operations} value={selectedOperation} onChange={setSelectedOperation}/>
                
                <input 
                type="submit" 
                value={"calculate"} 
                className="btn btn-info"/>    
            </form>
            
            <Result value={result} />
        </div>
    )
}