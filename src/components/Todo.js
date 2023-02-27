import { Link } from "react-router-dom"
import { URL } from "../actions"
import { useState } from "react"

const Todo = ({todo}) => {
    // get todo id and status
    const id = todo.id

    // bool to check todo category
    const isTaskCheck = todo.category === 'task' ? ' active' : null
    const isEventOrReminderCheck = todo.category !== 'task' ? ' active' : null

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
    const [cbState, setCbState] = useState(todo.status === 'finished' ? true : false)

    // toggle state
    function handleClick(){
        // check or uncheck depending on current state
        (cbState === false) ? markAsFinished() : markAsUnfinished()
        // then flip the state
        setCbState(cbState => !cbState)
    }

    let toggleClassCheck = cbState ? ' active' : null

    return (<>

    <div className="todo d-flex align-items-center">
        <div className="cb-or-bullet-container d-flex align-items-center justify-content-center">
            <div 
                className={`
                    checkbox${isTaskCheck}
                    checked-checkbox${toggleClassCheck}`}
                onClick={handleClick}>
            </div>

            <div className={`event-or-reminder-bullet${isEventOrReminderCheck}`}>
            </div>
        </div>

        <Link to={`/todo/${id}`}>
            <h3 className={`crossed-out${toggleClassCheck}`}>{todo.description}</h3>
        </Link>
    </div>
    
    </>)
}

export default Todo