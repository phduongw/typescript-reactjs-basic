import React from "react";
import Todo from "../models/todo";
import classes from './TodoItem.module.css'

const TodoItem: React.FC<{
    item: Todo;
    deleteTodoHandler: () => void
}> = ({ item, deleteTodoHandler })=>  {
    return (
        <li
            className={classes.item}
            onClick={deleteTodoHandler}
        >
            {item.text}
        </li>
    )
}

export default TodoItem;