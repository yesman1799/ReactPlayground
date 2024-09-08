import { useState } from "react";

export function Counter({start = 0}){

    const [count, setCount] = useState(start)

    function handleIncrement(e){
        setCount(count + 1)
    }
    
    function handleDecrement(e){
        setCount(count -1)
    }

    return (
        <div>
            <h1>Count: {count}</h1>
            <button className="btn btn-primary" onClick={handleIncrement}>+1</button>
            <button className="btn btn-primary" onClick={handleDecrement}>-1</button>
        </div>
    )
}