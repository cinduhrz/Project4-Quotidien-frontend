import { redirect } from "react-router-dom"

const URL = "https://quotidian-backend.onrender.com"

// createAction => create a todo from form submissions to "/create"
export const createAction = async ({request}) => {
    // get form data
    const formData = await request.formData()

    console.log(request)

    // // if category is task, status = unfinished
    // // otherwise, status is null
    // if (formData.get('category') === "task") {
    //     formData.get
    // } else {
        
    // }

    // construct request body
    const newTodo = {
        // don't need date bc it should default to current day
        description: formData.get('description'),
        category: formData.get('category'),
        status: (formData.get('category') === "task" && "unfinished"),
        status: (formData.get('category') !== "task" && null)
    }

    console.log(newTodo)

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