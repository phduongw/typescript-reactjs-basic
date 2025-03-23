import React, {ReactNode, useState} from "react";
import Todo from "../models/todo";

type TodosContextObj = {
    items: Todo[];
    addTodo: (todoText: string) => void;
    removeTodo: (id: string) => void;
}

export const TodosContext = React.createContext<TodosContextObj>({
    items: [],
    addTodo: (todoText: string) => {},
    removeTodo: (id: string) => {}
});

const TodosContextProvider: React.FC< {children: ReactNode} > = (props) => {
    const [todos, setTodos] = useState<Todo[]>([]);

    function addTodoHandler(todoText: string) {
        const todo = new Todo(todoText);
        setTodos(prev => [...prev, todo]);
    }

    function deleteTodoHandler(id: string) {
        setTodos((prev) => prev.filter(todo => todo.id !== id))
    }

    const contextValue: TodosContextObj = {
        items: todos,
        addTodo: addTodoHandler,
        removeTodo: deleteTodoHandler
    }

    return <TodosContext.Provider value={contextValue}>
        { props.children }
    </TodosContext.Provider>
}

export default TodosContextProvider;