import React from "react";
import TodoItem from "./TodoItem";

const styles = {
  ul: {
    listStyle: "none",
    margin: 0,
    padding: 0
  }
};

export default function TodoList(props) {
  return (
    <ul style={styles.ul}>
      {props.tasks.map((elem, i) => {
        return <TodoItem task={elem} key={elem.id} index={i} />;
      })}
    </ul>
  );
}
