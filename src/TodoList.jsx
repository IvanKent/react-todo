import List from '@mui/material/List';
import { useState, useEffect } from "react";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";
import { Box } from '@mui/material';
import {Typography} from '@mui/material';
const initialTodos = () => {
    const data = JSON.parse(localStorage.getItem('todos'));
    if(!data) return [];
    return data;
}

export default function TodoList() {
    const [todos, setTodos] = useState(initialTodos);

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
            return [...prevTodos, {text: text, completed: false, id: crypto.randomUUID()}]
        })
    }
    
    useEffect(() => {
        localStorage.setItem(
            'todos',
            JSON.stringify(todos)
        );
    }, [todos])
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            m: 3
        }}>
            <Typography 
                variant='h2'
            >
                Todos
            </Typography>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                {todos.map((todo) => {
                    return <TodoItem todo={todo} key={todo.id} removeTodo={() => (removeTodo(todo.id))}
                    toggleTodo={() => {
                        return toggleTodo(todo.id)
                    }}/>
                })}
                <TodoForm addTodo={addTodo}/>
            </List>
        </Box>

    )
}
