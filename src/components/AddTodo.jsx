import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";
import "./AddTodo.css";

function AddTodo() {
    const [input, setInput] = useState("");
    const dispatch = useDispatch();

    const AddTodoHandler = (e) => {
        e.preventDefault();
        dispatch(addTodo(input))
        setInput("");
    };

    return (
        <form className="m-auto lg:w-1/3 flex gap-4 mt-20" onSubmit={AddTodoHandler}>
            <input 
            className="p-2 outline-none rounded-md w-full" 
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            autoFocus
            />


            <button 
            type="submit"
            className="add font-semibold rounded-lg"
            >
                Add
            </button>
        </form>
    );
}

export default AddTodo;
