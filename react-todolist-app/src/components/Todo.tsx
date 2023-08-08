import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";

const Todo = () => {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState<any>([]);

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleSubmit = () => {
    if (!todo) {
      return;
    }
    setTodoList([...todoList, { text: todo, complete: false }]);
    setTodo("");
  };

  const handleComplete = (index) => {
    debugger;
    const newTodos = [...todoList];
    newTodos[index].complete = !newTodos[index].complete;
    setTodoList(newTodos);
  };
  return (
    <div className="container">
      <h1>TodoList</h1>
      <div className="mb-3 w-50">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Enter Todo
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
          onChange={handleChange}
          value={todo}
        />
        <button className="btn btn-primary" onClick={handleSubmit}>
          Submit
        </button>
      </div>
      {todoList.map((todo, index) => {
        return (
          <ul>
            <li
              key={index}
              onClick={() => handleComplete(index)}
              className={todo.complete ? "complete" : ""}
            >
              {todo.text}
              <button className="btn btn-warning">
                <FontAwesomeIcon icon={faPenToSquare} />
              </button>
              <button className="btn btn-danger">
                <FontAwesomeIcon icon={faTrashCan} />
              </button>
            </li>
          </ul>
        );
      })}
    </div>
  );
};

export default Todo;
