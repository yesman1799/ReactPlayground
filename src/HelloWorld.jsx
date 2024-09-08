import { useState } from "react"


export function HelloWolrd({text, name}){

    const [names, setJmeno] = useState(null)
        
    function handleChangeJmeno(e){
        setJmeno(e.target.value);
    }


    return (
        <div>
            <h1 className="text-danger">{text} {name}!</h1>
            <h2>jmeno: { names }</h2>
            <input type="text" placeholder="enter your name" onChange={handleChangeJmeno}/>
        </div>
    )
}


