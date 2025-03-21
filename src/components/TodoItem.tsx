import React from "react";
import Todo from "../models/todo";

const TodoItem: React.FC<{
    item: Todo
}> = ({ item })=>  {
    return (
        <li>{item.text}</li>
    )
}

export default TodoItem;