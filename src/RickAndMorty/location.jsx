import { useEffect, useState } from "react"


export function Location(){

    const[location, setLocation] = useState(null);

    useEffect(()=>{
        async function fetchLocation(){
            try{
                const response = await fetch("https://rickandmortyapi.com/api/location");
                if(response.ok){
                    const data = await response.json();
                    setLocation(data.results)
                    console.log(data)
                }
                

            }catch(err){
                console.log(err)
            }
        }

        fetchLocation()
    }, [])

    if(!location) {
        return(
            <h3>Loading</h3>
        )
    }
    


    return(
        <div className="text-center">
            {location.map((data) => (
                <div key={data.id}>
                <h3>{data.name}</h3>
                <p>{data.type}</p>
                <p>Dimension: {data.dimension}</p>
                </div>
            ))}
        </div>
    )
}