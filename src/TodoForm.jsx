import ListItem from "@mui/material/ListItem";
import { TextField } from "@mui/material";
import { InputAdornment } from "@mui/material";
import { IconButton } from "@mui/material";
import Create from "@mui/icons-material/create";
import { useState } from "react";

export default function TodoForm({ addTodo }) {
  const [text, setText] = useState("");

  const changeHandler = (e) => {
    setText(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    addTodo(text);
    setText("");
  };
  return (
    <ListItem>
      <form onSubmit={submitHandler}>
        <TextField
          id="outlined-basic"
          label="Add new todo"
          variant="outlined"
          value={text}
          onChange={changeHandler}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="create todo"
                  edge="end"
                  onClick={submitHandler}
                >
                  <Create />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </form>
    </ListItem>
  );
}
