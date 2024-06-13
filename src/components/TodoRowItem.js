import React from "react";

const TodoRowItem = ({rowNumber, rowDescription, rowAssigned, deleteTodo}) => { 

  return (
    <tr onClick={() => deleteTodo(rowNumber)}>
      <th scope="row">{rowNumber}</th>
      <td>{rowDescription}</td>
      <td>{rowAssigned}</td>
    </tr>
  );
};

export default TodoRowItem;
