import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { apiGet } from "../utils/api"



export function Person(){


    const [person, setPerson] = useState(null)
    const { id } = useParams()
    const navigate = useNavigate()


    useEffect(()=>{
        async function fetchPerson(){
            try{
                const data = await apiGet("people/" + id)
                setPerson(data)
                console.log()
            }catch(err){
                console.error(err)
            }
        }
        fetchPerson()

    },[id])

    if(!person)
        return <h1>Loading ...</h1>

    return (
        <div className="text-center">
            <h2>name: {person.name}</h2>
            <h2>height: {person.height}</h2>
            <h2>mass: {person.mass}</h2>
            <br/>
            <button onClick={()=> navigate(-1)}>Back</button>
            <br/>
            <button onClick={()=> navigate("/people/" + (Number(id) - 1))}>Back</button>
            <button onClick={()=> navigate("/people/" + (Number(id) + 1))}>Next</button>
        </div>
    )
}