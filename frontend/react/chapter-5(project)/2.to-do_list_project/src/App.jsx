import { useState } from "react";
import { FaTrash } from "react-icons/fa";
import "./index.css";

function App() {
  const [task, setTask] = useState("");
  const [date, setDate] = useState("");
  const [todos, setTodos] = useState([]);

  // Add Task
  const addTask = () => {
    if (task.trim() === "" || date === "") return;

    const newTodo = {
      id: Date.now(),
      text: task,
      date: date,
    };

    setTodos([newTodo, ...todos]);
    setTask("");
    setDate("");
  };

  // Delete Task
  const deleteTask = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="container">
      
      <h1>Task Manager</h1>

      {/* INPUT ROW */}
      <div className="input-row">
        <input
          type="text"
          placeholder="Enter your task..."
          className="task-input"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />

        <input
          type="date"
          className="date-input"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <button className="add-btn" onClick={addTask}>
          Add Task
        </button>
      </div>

      {/* TASK LIST */}
      <div className="task-list">
        {todos.length === 0 ? (
          <p className="empty">No tasks yet</p>
        ) : (
          todos.map((todo) => (
            <div className="task-row" key={todo.id}>
              <div className="task-info">
                <span className="task-text">{todo.text}</span>
                <span className="task-date">{todo.date}</span>
              </div>

              <button
                className="delete-btn"
                onClick={() => deleteTask(todo.id)}
              >
                <FaTrash />
              </button>
            </div>
          ))
        )}
      </div>

    </div>
  );
}

export default App;