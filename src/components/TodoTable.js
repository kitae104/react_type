import React from "react";
import TodoRowItem from "./TodoRowItem";

const TodoTable = ({todos, deleteTodo}) => { 
  

  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Description</th>
          <th scope="col">Assigned</th>
        </tr>
      </thead>
      <tbody>
        {todos.map((todo) => {
          return (
            <TodoRowItem
              key={todo.rowNumber}
              rowNumber={todo.rowNumber}
              rowDescription={todo.rowDescription}
              rowAssigned={todo.rowAssigned}
              deleteTodo={deleteTodo}
            />
          );
        })}
      </tbody>
    </table>
  );
};

export default TodoTable;
