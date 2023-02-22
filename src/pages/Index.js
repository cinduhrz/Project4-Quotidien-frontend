import { useLoaderData } from "react-router-dom"
import Todo from '../components/Todo'

const Index = (props) => {
    const todos = useLoaderData()

    return <>
        <h1>To-Do List</h1>
        {todos.map((todo) => <Todo todo={todo} key={todo.id}/>)}

    </>
}

export default Index