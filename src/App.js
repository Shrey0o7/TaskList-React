import React, { useState } from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import TodoList from "./components/TodoList";

import "./styles.css";

const App = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const[completedTask,setCompletedTask] = useState([]);

  const [editTodo, setEditTodo] = useState(null);
  return (
    <div className="container">
      <div className="app-wrapper">
        <div>
          <Header />
        </div>
        <div>
          <Form
            input={input}
            setInput={setInput}
            todos={todos}
            setTodos={setTodos}
            editTodo={editTodo}
            setEditTodo={setEditTodo}
          />
        </div>
        <div>
          <TodoList
            todos={todos}
            completedTask={completedTask}
            setCompletedTask={setCompletedTask}
            setTodos={setTodos}
            setEditTodo={setEditTodo}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
