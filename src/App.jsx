import React from "react";
import TodoList from "./Todo/TodoList";
import Context from './context';

function App() {
  const [todos, setTodos] = React.useState([
    { id: 1, completed: false, title: "Купить хлеб" },
    { id: 2, completed: false, title: "Накормить кота" },
    { id: 3, completed: false, title: "Закончить проект" }
  ]);

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

  return (
    <Context.Provider value={{ removeTask }}>
      <div className="wrapper">
        <h1>React Learn project </h1>
        <TodoList tasks={todos} onToggle={toggleTask} />
      </div>
    </Context.Provider>
  );
}

export default App;
