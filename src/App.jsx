import React, { useEffect } from "react";
import TodoList from "./Todo/TodoList";
import Context from './context';
import AddTodo from "./Todo/AddTodo";

function App() {
  const [todos, setTodos] = React.useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
      .then(response => response.json())
      .then(todos => {
        setTodos(todos)
      })
  }, [])

  function toggleTask(id) {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    )
  }

  function removeTask(id) {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  function addTodo(title) {
    setTodos(todos.concat([{
      title,
      id: Date.now(),
      completed: false
    }]))
  }

  return (
    <Context.Provider value={{ removeTask }}>
      <div className="wrapper">
        <h1>React Learn project </h1>
        <AddTodo onCreate={addTodo} />
        {todos.length ? <TodoList tasks={todos} onToggle={toggleTask} /> : <p>No tasks.</p>}
      </div>
    </Context.Provider>
  );
}

export default App;
