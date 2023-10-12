export const TodoList = ({ handleClick }) => {
  return (
    <ul className="todo__list">
      {todoList.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onDelete={handleClick} />
      ))}
    </ul>
  )
}
