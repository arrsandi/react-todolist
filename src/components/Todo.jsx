import React from "react";
import PropTypes from "prop-types";

const Todo = props => {
  return (
    <div className="todo">
      <span className="todo-text">{props.text}</span>
    </div>
  );
};

Todo.PropTypes = {
  text: PropTypes.string.isRequired
};

export default Todo;

// Props adalah sebuah objek di mana ia akan menerima apapun yg ada di komponen todo
