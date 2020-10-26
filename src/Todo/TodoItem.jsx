import React from "react";
import PropTypes from "prop-types";

function TodoItem({ task, index }) {
  return (
    <li>
      <strong>{index + 1}</strong>
      {task.title}
    </li>
  );
}

TodoItem.propTypes = {
  task: PropTypes.object.isRequired,
  index: PropTypes.number
};

export default TodoItem;
