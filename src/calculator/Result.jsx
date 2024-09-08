
export function Result({ value }){


    if(value !== null){
        return (
            <h2 className="text-success"> Result: {value} </h2>
        )
    }else {
        return null
    }
}