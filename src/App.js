import React from "react"

//  Form Components
import Form from "./components/Form"

// Input App css
import './App.css'

// Todo List Components
import TodoList from "./components/TodoList"

// App Components
function App() {
	// State Input Text
	const [inputText, setInputText] = React.useState("")

	// State Todos || initial state array
	const [Todos, setTodos] = React.useState([])

	// State status || filtering todos
	const [status, setStatus] = React.useState("all")

	// State Filtered Todos
	const [filteredTodos, setFilteredTodos] = React.useState([])

	// Filter todos based condition
	const FilterTodosHandler = () => {
		// Check Filter  and getTodos with status completed or not completed
		switch (status) {
			case "completed":
				setFilteredTodos(todos.filter(todo => todo.completed === "completed"))
				break
			case "uncompleted":
				setFilteredTodos(todos.filter(todo => todo.completed === "uncompleted"))
				break
		}
	}
	// continue -> send props status to this component
	return (
		<div className="App mt-8">
			{/* Title */}
			<h1 className="text-5xl font-extrabold text-white text-center">Create Todo List</h1>

			{/* Form Component */}
			<Form setStatus={setStatus} inputText={inputText} todos={Todos} setTodoList={setTodos} changeText={setInputText} />

			{/* Todo List Component */}
			<TodoList setTodos={setTodos} todos={Todos} />
		</div>
	)
}

export default App
