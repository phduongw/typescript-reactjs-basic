import React, {useRef} from 'react';
import Todo from "../models/todo";

const NewTodo: React.FC<{
    addTodo: (todo: Todo) => void
}> = ({ addTodo }) => {
    const inputRef = useRef<HTMLInputElement>(null);

    function submitHandler(event: React.FormEvent) {
        event.preventDefault();
        const todoText = inputRef.current?.value;
        if (todoText && todoText.trim()) {
            addTodo(new Todo(todoText));
            return;
        }

        throw new Error('Todo Text is mandatory!');
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <label htmlFor="text-todo">Todo Text</label>
                <input type="text" id="text-todo" ref={ inputRef }/>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default NewTodo;
