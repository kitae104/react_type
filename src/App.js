import { useState } from "react";
import "./App.css";
import TodoTable from "./components/TodoTable";
import NewTodoForm from "./components/NewTodoForm";

function App() {

  const [showAddTodoForm, setShowAddTodoForm] = useState(false); // showAddTodoForm을 false로 초기화

  const [todos, setTodos] = useState([
    { rowNumber: 1, rowDescription: "Feed dog", rowAssigned: "User One" },
    { rowNumber: 2, rowDescription: "Water plants", rowAssigned: "User Two" },
    { rowNumber: 3, rowDescription: "Make dinner", rowAssigned: "User One" },
    {
      rowNumber: 4,
      rowDescription: "Change phone battery",
      rowAssigned: "User One",
    },
  ]);

  const addTodo = (description, assigned) => {
    let rowNumber = 0;
    if (todos.length > 0) {
      rowNumber = todos[todos.length - 1].rowNumber + 1;
    } else {
      rowNumber = 1;
    }
    const newTodo = {
      rowNumber: rowNumber,
      rowDescription: description,
      rowAssigned: assigned,
    };
    setTodos((todos) => [...todos, newTodo]);
  };

  // 삭제 하기 
  const deleteTodo = (rowNumber) => {
    let filtered = todos.filter((value) => {  // filter 함수를 사용하여 삭제할 rowNumber를 제외한 나머지를 filtered에 저장
      return value.rowNumber !== rowNumber;
    });
    setTodos(filtered); // setTodos를 사용하여 todos로 filtered를 저장
  }

  return (
    <div className="mt-5 container">
      <div className="card">
        <div className="card-header">Your Todo's</div>
        <div className="card-body">
          <TodoTable todos={todos} deleteTodo={deleteTodo} />
          <button onClick={() => setShowAddTodoForm(!showAddTodoForm)} className="btn btn-primary">
            {showAddTodoForm ? "Close New Todo" : "New Todo"}
          </button>
          {showAddTodoForm && 
            <NewTodoForm addTodo={addTodo} />
          }
        </div>
      </div>
    </div>
  );
}

export default App;
