import { useLoaderData } from "react-router-dom"
import Todo from '../components/Todo'
import { Form } from "react-router-dom"

const Index = (props) => {
    const todos = useLoaderData()

    // function that returns todos in specified category (to DRY code)
    const returnTodosInCategory = (category) => {
        const filteredTodos = todos.filter((todo) => todo.category === category)
        return (filteredTodos.map((todo) => <Todo todo={todo} key={todo.id}/>))
    }

    return (<>
        <div style={{textAlign: "center"}}>
            <h2>Create a To-do</h2>
            <Form action="/create" method="post">
                <input type="text" name="description" placeholder="start writing..."/>

                <div style={{textAlign: "left"}}>
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
                    
                <div class="events">
                    <h3 class="todo-list-subtitle">Events</h3>
                    {returnTodosInCategory('event')}
                </div>

                <div class="tasks">
                    <h3 class="todo-list-subtitle">Tasks</h3>
                    {returnTodosInCategory('task')}
                </div>

                <div class="reminders">
                    <h3 class="todo-list-subtitle">Reminders</h3>
                    {returnTodosInCategory('reminder')}
                </div>
            </div>
        </div>
    </>)
}

export default Index