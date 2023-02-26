import { useLoaderData } from "react-router-dom"
import Todo from '../components/Todo'
import { Form } from "react-router-dom"

const Index = (props) => {
    const todos = useLoaderData()

    return <>
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

        <div class="d-flex flex-row justify-content-center">
            <div class="todo-list">
                <h1 class="todo-list-title text-center">To-Do List</h1>
                {todos.map((todo) => <Todo todo={todo} key={todo.id}/>)}
            </div>
        </div>
    </>
}

export default Index