import { Link, useLoaderData, Form } from "react-router-dom"

const Show = (props) => {
    const todo = useLoaderData()

    const inlineStyle = {
        display: "inline"
    }

    return (<div>
        <h1>{todo.description}</h1>
        <h4>{todo.date}</h4>
        <h4>category: {todo.category}</h4>
        <h4>status: {todo.status}</h4>
    
        <div style={{textAlign: "center"}}>
            <h2>Update Todo</h2>
            <Form action={`/update/${todo.id}`} method="post">
                <input
                    type="text"
                    name="description"
                    placeholder="start writing here..."
                    defaultValue={todo.description}
                />
                <div style={{textAlign: "left"}}>
                    <input
                        type="radio"
                        name="category"
                        value="task"
                        defaultChecked={todo.category === "task" ? "checked" : ""}
                    />
                    <label
                        style={inlineStyle}
                        htmlFor="task">
                        Task
                    </label>
                    <br/>

                    <input
                        type="radio"
                        name="category"
                        value="event"
                        defaultChecked={todo.category === "event" ? "checked" : ""}
                    />
                    <label
                        style={inlineStyle}
                        htmlFor="event">
                        Event
                    </label>
                    <br/>

                    <input
                        type="radio"
                        name="category"
                        value="reminder"
                        defaultChecked={todo.category === "reminder" ? "checked" : ""}
                    />
                    <label
                        style={inlineStyle}
                        htmlFor="reminder">
                        Reminder
                    </label>
                </div>
                <button>Update To-Do</button>
            </Form>
        </div>

        <Link to="/">
            <button>back</button>
        </Link>
    </div>)
}

export default Show