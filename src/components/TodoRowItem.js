import React from "react";

const TodoRowItem = ({rowNumber, rowDescription, rowAssigned}) => { 

  return (
    <tr>
      <th scope="row">{rowNumber}</th>
      <td>{rowDescription}</td>
      <td>{rowAssigned}</td>
    </tr>
  );
};

export default TodoRowItem;
