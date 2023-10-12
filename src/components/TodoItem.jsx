import { useState } from "react"

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
