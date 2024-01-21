import { TextField, InputAdornment, IconButton, ListItem } from "@mui/material";
import { useState } from "react";
import CreateIcon from "@mui/icons-material/Create";

export default function TodoForm({addTodo}) {
    const [text, setText] = useState('');

    const handleChange = (evt) => {
        setText(evt.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(text);
        setText('');
    }
    return (
        <ListItem>
            <form action="" onSubmit={handleSubmit}>
            <TextField
            id="outlined-basic" 
            label="Add todo"
            variant="outlined" 
            onChange={handleChange}
            value={text}
            InputProps={{
                endAdornment: (
                    <InputAdornment position="end">
                    <IconButton type="submit"
                    aria-label="create todo"
                    edge="end">
                        <CreateIcon/>
                    </IconButton>
                </InputAdornment>
                )
            }}
            />
            </form>
        </ListItem>

    )
}