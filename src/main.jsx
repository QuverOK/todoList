import React from "react"
import ReactDOM from "react-dom/client"
import FilteredTodoList from "./components/FilteredTodoList.jsx"
import "./sass/main.scss"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FilteredTodoList />
  </React.StrictMode>
)
