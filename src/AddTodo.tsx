import React, {useState, ChangeEvent, FormEvent} from "react";
import './index.css';


export const AddTodoForm: React.FC = () => {
   const [newTodo, setNewTodo] = useState("");

    return (
        <form>
            <input type="text" />
            <button className="btn" type="submit">ADD HERE</button>
        </form>
    );
};