const URL = "https://quotidian-backend.onrender.com"

export const indexLoader = async () => {
    const response = await fetch(URL + "/todos/")
    // convert json back to js objects
    const todos = await response.json()
    return todos
}

export const showLoader = async ({params}) => {
    const response = await fetch(URL + `/todos/${params.id}/`)
    const todo = await response.json()
    return todo
}

