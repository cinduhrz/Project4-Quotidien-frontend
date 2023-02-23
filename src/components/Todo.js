import { Link } from "react-router-dom"

const Todo = ({todo}) => {
    return (<div>
        <Link to={`/todo/${todo.id}`}>
            <h3>{todo.description}</h3>
        </Link>
    </div>)
}

export default Todo