export async function apiGet(endpoint) {
    const response = await fetch(`https://swapi.dev/api/${endpoint}`)
    if (response.ok){
        const data = await response.json()
        return data;

    }else {
        throw new Error("MORE TOHLE NEFUNGUJE")
    }
}