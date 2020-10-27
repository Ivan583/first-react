import React from "react";
import PropTypes from "prop-types";
import TodoItem from "./TodoItem";

const styles = {
  ul: {
    listStyle: "none",
    margin: 0,
    padding: 0
  }
};

function TodoList(props) {
  return (
    <ul style={styles.ul}>
      {props.tasks.map((elem, i) => {
        return <TodoItem task={elem} key={elem.id} index={i} onChange={props.onToggle} />;
      })}
    </ul>
  );
}

TodoList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.object).isRequired,
  onToggle: PropTypes.func.isRequired
};

export default TodoList;
