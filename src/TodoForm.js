import { TextField } from "@mui/material";
import React from "react";
import useInputState from "./useInputState";

const TodoForm = ({saveTodo}) => {
    const {value, reset, onChange} = useInputState('');

    return (
        <form
        onSubmit={e => {
            e.preventDefault();
            saveTodo(value); 
            reset();
            
        }}>
            <TextField
            variant="outlined"
            placeholder="Add todo"
            margin="normal" 
            onChange={onChange}
            value = {value}
            />
        </form>
    );
}

export default TodoForm;