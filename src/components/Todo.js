import { Link } from "react-router-dom"
import { URL } from "../actions"

const Todo = ({todo}) => {
    // get todo id
    const id = todo.id

    const markAsFinished = async () => {
        // change task status
        console.log(todo.status)
        todo.status = (todo.category === 'task' ? "finished" : null)
        console.log(todo.status)

        // send request to backend
        await fetch(URL + `/todos/${id}/`, {
            method: "put",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(todo)
        })
    }

    // // if task is unfinished, return unchecked checkbox and reg text
    // if (todo.status === 'unfinished') {

    // // if task is finished, return checked checkbox and crossed out text
    // } else if (todo.status === 'finished') {
    
    // // if todo.status is null (if its a event or reminder), just return it as a bullet point
    // } else {

    // }
    // //

    return (
    <div className="todo d-flex align-items-center">
        <div className="checkbox" onClick={markAsFinished}>
        </div>

        <Link to={`/todo/${id}`}>
            <h3>{todo.description}</h3>
        </Link>
    </div>)
}

export default Todo