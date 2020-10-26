import React from "react";
import TodoList from "./Todo/TodoList";

function App() {
  let todos = [
    { id: 1, completed: false, title: "Купить хлеб" },
    { id: 2, completed: false, title: "Накормить кота" },
    { id: 3, completed: false, title: "Закончить проект" }
  ];

  return (
    <div className="wrapper">
      <h1>React Learn project </h1>
      <TodoList tasks={todos} />
    </div>
  );
}

export default App;
