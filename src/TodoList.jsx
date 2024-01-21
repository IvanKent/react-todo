import { Box } from "@mui/material";
import List from '@mui/material/List';

import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import CommentIcon from '@mui/icons-material/Comment';

import { useState } from "react";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";
const initialTodos = [
    {id:1, text: 'somethingfs', completed: false},
    {id:2, text: 'somethingfdfsf', completed: true},
    {id:3, text: 'somethingfsdfs', completed: false}
];

export default function TodoList() {
    const [todos, setTodos] = useState(initialTodos);
    const [text, setText] = useState('');

    const removeTodo = (id) => {
        setTodos(prevTodos => {
              return prevTodos.filter(todo => todo.id !== id); 
        })
    }

    const toggleTodo = (id) => {
        setTodos(prevTodos => {
            return prevTodos.map(todo => {
                if(todo.id === id){
                    return { ...todo, completed: !todo.completed}
                }else{
                    return todo;
                }
            })
        })
    }

    const addTodo = (text) => {
        setTodos(prevTodos => {
            return [...prevTodos, {text: text, completed: false, id: 100}]
        })
    }
    
    return (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        {todos.map((todo) => {
            return <TodoItem todo={todo} key={todo.id} removeTodo={() => (removeTodo(todo.id))}
             toggleTodo={() => {
                return toggleTodo(todo.id)
             }}/>
        })}
        <TodoForm addTodo={addTodo}/>
      </List>
    )
}
