import { useEffect, useReducer } from "react";
import { todoReducer } from "../reducers/NlcToDoReducer";
import NlcTodoItem from "./NlcTodoItem";
import NlcAddToDo from "./NlcAddToDo";

function NlcTodoList() {
  const [todos, dispatch] = useReducer(todoReducer, [], () => {
    const storedTodos = localStorage.getItem("todos");
    return storedTodos ? JSON.parse(storedTodos) : [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div>
      <h2>Danh Sách Công Việc</h2>
      <NlcAddToDo dispatch={dispatch} />
      <ul>
        {todos.map(todo => (
          <NlcTodoItem key={todo.id} todo={todo} dispatch={dispatch} />
        ))}
      </ul>
    </div>
  );
}

export default NlcTodoList;