import React from "react";
import PropTypes from "prop-types";

const styles = {
  li: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0.5rem 1rem',
    border: '1px solid green',
    borderRadius: '4px',
    marginBottom: '0.5rem'
  },
  input: {
    marginRight: '1rem'
  }
}

function TodoItem({ task, index }) {
  return (
    <li style={styles.li}>
      <span>
        <input type="checkbox" style={styles.input} />
        <strong>{index + 1}</strong>
        &nbsp;
        {task.title}
      </span>
      <button className="rm">&times;</button>
    </li>
  );
}

TodoItem.propTypes = {
  task: PropTypes.object.isRequired,
  index: PropTypes.number
};

export default TodoItem;
