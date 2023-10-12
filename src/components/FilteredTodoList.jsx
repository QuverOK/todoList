import { useState } from "react"
import { TodoItem } from "./TodoItem"

export default function FilteredTodoList() {
  const [inputValue, setInputValue] = useState("")
  const [todoList, setTodoList] = useState([])
  const handleClickDelete = (id) => {
    const updatedTodos = todoList.filter((todo) => todo.id !== id)
    setTodoList(updatedTodos)
  }
  const handleClickAdd = () => {
    if (inputValue.trim() !== "") {
      const newTodo = {
        id: Date.now(),
        text: inputValue,
      }
      setTodoList([...todoList, newTodo])
      setInputValue("")
    }
  }
  return (
    <div className="todo">
      <h1 className="todo__title">Todo App</h1>
      <div className="todo__filter">
        <input
          type="text"
          className="todo__input"
          placeholder="Add your new todo"
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleClickAdd()
            }
          }}
          value={inputValue}
        />
        <button className="todo__button" onClick={handleClickAdd}>
          Add
        </button>
      </div>
      <ul className="todo__list">
        {todoList.map((todo) => (
          <TodoItem key={todo.id} todo={todo} onDelete={handleClickDelete} />
        ))}
      </ul>
    </div>
  )
}
