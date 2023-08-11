import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";

const Todo = () => {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState<any>([]);
  const [editing, setEditing] = useState(null);
  const [editText, setEditText] = useState("");

  const handleSubmit = () => {
    if (!todo) {
      return;
    }
    if (editing !== null) {
      const newTodos = [...todoList];
      newTodos[editing].text = editText;
      setEditing(null);
      setEditText("");
    } else {
      setTodoList([...todoList, { text: todo, complete: false }]);
      setTodo("");
    }
  };

  // const handleComplete = (index) => {
  //   debugger;
  //   const newTodos = [...todoList];
  //   newTodos[index].complete = !newTodos[index].complete;
  //   setTodoList(newTodos);
  // };

  const handleDelete = (index: any) => {
    const newTodos = todoList.filter((_: any, i: any) => i !== index);
    setTodoList(newTodos);
  };

  const handleEditTodo = (index: any) => {
    setEditing(index);
    setEditText(todoList[index].text);
    setTodo(todoList[index].text);
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
          onChange={(e) =>
            editing !== null
              ? setEditText(e.target.value)
              : setTodo(e.target.value)
          }
          value={editing !== null ? editText : todo}
        />
        <button className="btn btn-primary" onClick={handleSubmit}>
          {editing !== null ? "Edit Todo" : "Add Todo"}
        </button>
      </div>
      {todoList.map((todo: any, index: any) => {
        return (
          <ul>
            <li
              key={index}
              // onClick={() => handleComplete(index)}
              className={todo.complete ? "complete" : ""}
            >
              {todo.text}
              <button
                className="btn btn-warning"
                onClick={() => handleEditTodo(index)}
              >
                <FontAwesomeIcon icon={faPenToSquare} />
              </button>
              <button
                className="btn btn-danger"
                onClick={() => handleDelete(index)}
              >
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
