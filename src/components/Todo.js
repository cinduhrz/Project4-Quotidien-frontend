import { Link } from "react-router-dom"
import { URL } from "../actions"
import { useState } from "react"

const Todo = ({todo}) => {
    // get todo id and status
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
    
    const markAsUnfinished = async () => {
        // change task status
        console.log(todo.status)
        todo.status = (todo.category === 'task' ? "unfinished" : null)
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


    // set up state for checkbox
    const [cbState, setCbState] = useState(false)

    // toggle state
    function handleClick(){
        // check or uncheck depending on current state
        (cbState === false) ? markAsFinished() : markAsUnfinished()
        // then flip the state
        setCbState(cbState => !cbState)
    }

    let toggleClassCheck = cbState ? ' active' : null

    // diff styles for checkbox
    const checkedStyle = {
        backgroundColor: "green"
    }

    // const bulletPointStyle = {

    // }

    return (<>

    <div className="todo d-flex align-items-center">
        <div 
            className={`checkbox checked-checkbox${toggleClassCheck}`}
            onClick={handleClick}>
        </div>

        <Link to={`/todo/${id}`}>
            <h3>{todo.description}</h3>
        </Link>
    </div>
    
    </>)
}

export default Todo