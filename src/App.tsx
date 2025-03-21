import React, {useState} from 'react';
import './App.css';
import Todos from "./components/Todos";
import Todo from "./models/todo";
import NewTodo from "./components/NewTodo";

const DUMMY_TODO: Todo[] = [
    new Todo('React'),
    new Todo('Typescript'),
    new Todo('NodeJS'),
    new Todo('Python'),
]

function App() {
    const [todos, setTodos] = useState<Todo[]>([])
    return (
        <div>
            <NewTodo addTodo={(todo: Todo) => setTodos((prev) => [...prev, todo])}/>
            <Todos items={todos}/>
        </div>
    );
}

export default App;
