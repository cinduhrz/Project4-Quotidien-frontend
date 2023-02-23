import { Link, useLoaderData } from "react-router-dom"

const Show = (props) => {
    const todo = useLoaderData()

    return (<div>
        <h1>{todo.description}</h1>
        <h4>{todo.date}</h4>
        <h4>category: {todo.category}</h4>
        <h4>status: {todo.status}</h4>
    
        <Link to="/">
            <button>back</button>
        </Link>
    </div>)
}

export default Show