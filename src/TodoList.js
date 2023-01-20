import { Checkbox, IconButton, List, ListItem, ListItemSecondaryAction, ListItemText } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

import React from "react";

const TodoList = ({ todos, deleteTodo}) => (
  <List>
    {todos.map((todo, index) => (<ListItem key={index.toString()}>
   <Checkbox tabIndex={-1} disableRipple />
   <ListItemText primary={todo}/>
        <ListItemSecondaryAction><IconButton
             aria-label="Delete"
             onClick={() => {
               deleteTodo(index);
             }}
           >
             <DeleteIcon />
           </IconButton></ListItemSecondaryAction>
       </ListItem>
     ))}
   </List>
 );

export default TodoList;