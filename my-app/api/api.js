

export async function MealFetch(URL) {
    const response = await fetch(URL);
    // Verificar si la respuesta fuea exitosa
    if(!response.ok) {
        throw new Error ('Error getting data')
    }
    //Convierte la respuesta en JSON
    const data = await response.json();
    return data;
}