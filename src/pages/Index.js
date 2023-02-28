import { useLoaderData } from "react-router-dom"
import Todo from '../components/Todo'
import { Form } from "react-router-dom"
// import { useRef } from "react"

const Index = (props) => {
    const todos = useLoaderData()

    // function that returns todos in specified category (to DRY code)
    const returnTodosInCategory = (category) => {
        const filteredTodos = todos.filter((todo) => todo.category === category)
        return (filteredTodos.map((todo) => <Todo todo={todo} key={todo.id}/>))
    }

    // const textInput = useRef()
    // // const radioInput = useRef()
    // const handleSubmit = () => {
    //     textInput.current.value = ""
    //     // radioInput.current.defaultChecked = ""
    // }

    return (<>
        <div style={{textAlign: "center"}}>
            <h2>Create a To-do</h2>
            <Form 
                action="/create"
                method="post"
                // onSubmit={handleSubmit}
                >
                <input type="text" 
                // ref={textInput}
                name="description" placeholder="start writing..."/>

                <div>
                    <input type="radio" name="category" value="task" required/>
                        <label style={{display: "inline"}} htmlFor="task">Task</label>
                        <br/>
                    <input type="radio" name="category" value="event"/>
                        <label style={{display: "inline"}} htmlFor="event">Event</label>
                        <br/>
                    <input type="radio" name="category" value="reminder"/>
                        <label style={{display: "inline"}} htmlFor="reminder">Reminder</label>
                </div>

                <button>Create New To-do</button>
            </Form>
        </div>

        <div className="d-flex flex-row justify-content-center">
            <div className="todo-list">
                <h1 className="todo-list-title text-center">To-Do List</h1>
                    
                <div className="events">
                    <h3 className="subtitle events-subtitle">Events</h3>
                    {returnTodosInCategory('event')}
                </div>

                <div className="tasks">
                    <h3 className="subtitle tasks-subtitle">Tasks</h3>
                    {returnTodosInCategory('task')}
                </div>

                <div className="reminders">
                    <h3 className="subtitle reminders-subtitle">Reminders</h3>
                    {returnTodosInCategory('reminder')}
                </div>
            </div>
        </div>
    </>)
}

export default Index