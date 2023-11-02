// import * as React from "react";
import List from "@mui/material/List";

import { useState } from "react";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";

const initialTodos = [
  { id: 1, text: "Walked the dog", completed: false },
  { id: 2, text: "Walked the cat", completed: false },
  { id: 3, text: "Walked the fish", completed: true },
  { id: 4, text: "Walked the chicken", completed: false },
];

export default function TodoList() {
  const [todos, setTodos] = useState(initialTodos);

  const toggleTodo = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.map((t) => {
        if (t.id === id) return { ...t, completed: !t.completed };
        return t;
      });
    });
  };

  const removeTodo = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((t) => t.id !== id);
    });
  };

  const addTodo = (text) => {
    setTodos((prevTodos) => {
      return [...prevTodos, { id: 8, text: text, completed: false }];
    });
  };

  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      {todos.map((todo) => (
        <TodoItem
          todo={todo}
          key={todo.id}
          remove={removeTodo}
          toggle={toggleTodo}
        />
      ))}
      <TodoForm addTodo={addTodo} />
    </List>
  );
}
