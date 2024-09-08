import { useEffect, useState } from "react"
import { apiGet } from "../utils/api";
import { Link } from "react-router-dom";




export function People(){


    const[people, setPeople] = useState(null);

    useEffect( () => {
        async function fetchPeople(params) {
            try {
                const data = await apiGet('people');
                setPeople(data.results);
                console.log(data)
            }catch(err){
                console.log(err)
            }
        }
        setTimeout(()=>{
            fetchPeople()
        },2000)
    }, []);

    if(!people) {
        return(
            <h3 className="spinner-border" role="status">Loading</h3>
        )
    }

    return(
        <div className="container">
            {people.map((person,i) => (
                <div>
                    <h3 key={i + 1}></h3>
                    <Link to={"/people/" + (i + 1)}>
                        <h3>Name: {person.name}</h3>
                    </Link>
                    <p>Birth Year: {person.birth_year}</p>
                    <p>Gender: {person.gender}</p>
                    <p>Height: {person.height}</p>
                    <p>Mass: {person.mass}</p>
                    <p>Eye Color: {person.eye_color}</p>
                    <p> Hair Color: {person.hair_color}</p>
                    <p> Skin Color: {person.skin_color}</p>
                </div>
            ))}
        </div>
    )
}