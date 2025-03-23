import React, {useContext, useRef} from 'react';
import classes from './NewTodo.module.css'
import {TodosContext} from "../store/todos-context";

const NewTodo: React.FC = () => {
    const todoCtx = useContext(TodosContext);
    const inputRef = useRef<HTMLInputElement>(null);

    function submitHandler(event: React.FormEvent) {
        event.preventDefault();
        const todoText = inputRef.current?.value;
        if (todoText && todoText.trim()) {
            todoCtx.addTodo(todoText);
            return;
        }

        throw new Error('Todo Text is mandatory!');
    }

    return (
        <div>
            <form onSubmit={submitHandler} className={classes.form}>
                <label htmlFor="text-todo">Todo Text</label>
                <input type="text" id="text-todo" ref={ inputRef }/>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default NewTodo;
