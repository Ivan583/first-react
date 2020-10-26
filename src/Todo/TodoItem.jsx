import React from "react";

export default function TodoItem({ task, index }) {
  return (
    <li>
      <strong>{index + 1}</strong>
      {task.title}
    </li>
  );
}
