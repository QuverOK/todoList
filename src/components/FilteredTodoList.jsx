import { useState } from "react"

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

export const TodoItem = ({ todo, onDelete }) => {
  const [check, setCheck] = useState("initial")
  const [change, setChange] = useState(false)

  const handleChange = () => {
    if (!change) {
      setCheck("line-through")
    } else {
      setCheck("none")
    }
  }

  return (
    <li className="todo__item">
      <label className="todo__check" style={{ textDecoration: check }}>
        <input
          type="checkbox"
          onChange={() => {
            setChange(!change)
            handleChange()
          }}
          className="todo__checkbox"
          value={change}
        />
        <span className="todo__text"></span>
        <span className="todo__value">{todo.text}</span>
      </label>
      <div className="todo__wrapper">
        <button
          className="todo__btn"
          onClick={() => onDelete(todo.id)}
        ></button>
      </div>
    </li>
  )
}
