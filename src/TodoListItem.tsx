import React from "react";
import "./TodoListItem.css";
export{};

type  Todo = {
    text: string;
    complete: boolean;
  };

interface TodoListItemProps {
    todo: {
        text: string;
        complete: boolean;
    };
    toggleTodo: (selectedTodo: Todo) => void;
}

export const TodoListItem: React.FunctionComponent<TodoListItemProps> = ({todo, toggleTodo}) => {
    return (
        <li>
            <label className={todo.complete ? "complete" : undefined}>
                <input type="checkbox" checked={todo.complete} onChange={() =>toggleTodo(todo)}/>
                {todo.text}
            </label>
        </li>);
};