import { redirect } from "react-router-dom"

const URL = "https://quotidian-backend.onrender.com"

// createAction => create a todo from form submissions to "/create"
export const createAction = async ({request}) => {
    // get form data
    const formData = await request.formData()

    // construct request body
    const newTodo = {
        // don't need date bc it should default to current day
        description: formData.get('description'),
        category: formData.get('category')
    }

    // add status depending on category
    newTodo.status = (newTodo.category === "task" ? "unfinished" : null)

    // send request to backend
    await fetch(URL + "/todos/", {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newTodo)
    })

    // redirect back to index page
    return redirect("/")
}

// updateAction => update a todo from form submissions to "/update/:id"
export const updateAction = async ({request, params}) => {
    // get form data
    const formData = await request.formData()

    // get todo id
    const id = params.id

    // constructed updated req body
    const updatedTodo = {
        description: formData.get('description'),
        category: formData.get('category'),
    }

    // hmmm but what if user updates a task todo that is already finished? this will reset it to unfinished
    // we could prevent users from updating tasks marked as finished
    updatedTodo.status = (updatedTodo.category === "task" ? "unfinished" : null)

    // send request to backend
    await fetch(URL + `/todos/${id}/`, {
        method: "put",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedTodo)
    })

    // redirect back to show page
    return redirect(`/todo/${id}`)
}

export const deleteAction = async ({params}) => {
    // get todo id
    const id = params.id

    // send request to backend
    await fetch(URL + `/todos/${id}/`, {
        method: "delete"
    })

    // redirect back to index
    return redirect("/")
}