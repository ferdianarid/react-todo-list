import React, { useEffect } from "react"

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

	// Use Side Effect Hook \\ Execute First Time
	useEffect(() => {
		GetLocalStorage()
	}, [])

	// Use Side Effect Hook
	useEffect(() => {
		FilterTodosHandler()
		StoreLocalStorage()
	}, [Todos, status])

	// Filter todos based condition
	const FilterTodosHandler = () => {
		// Check Filter  and getTodos with status completed or not completed
		switch (status) {
			// return filtered todos completed 
			case "completed":
				setFilteredTodos(Todos.filter(todo => todo.completed === true))
				break
			// return filtered todos uncompleted
			case "uncompleted":
				setFilteredTodos(Todos.filter(todo => todo.completed === false))
				break
			default:
				// return filtered todos
				setFilteredTodos(Todos)
		}
	}

	// Save Todos to Local Storage
	const StoreLocalStorage = () => {
		// Set Todos to Local Storage
		localStorage.setItem("Todos ", JSON.stringify(Todos))
	}

	// Get Local Storage Todos
	const GetLocalStorage = () => {
		// Check Todos in local storage
		if (localStorage.getItem("Todos") === null) {
			// if local storage is empty, return empty array
			localStorage.setItem("Todos ", JSON.stringify([]))
		} else {
			// Set Todos to local storage
			const LocalTodo = localStorage.getItem("Todos ", JSON.stringify(Todos))
			console.log(LocalTodo);
		}
	}

	return (
		<div className="App mt-8">
			{/* Title */}
			<h1 className="text-5xl font-extrabold text-white text-center">Create Todo List</h1>

			{/* Form Component */}
			<Form setStatus={setStatus} inputText={inputText} todos={Todos} setTodoList={setTodos} changeText={setInputText} />

			{/* Todo List Component */}
			<TodoList filteredTodos={filteredTodos} setTodos={setTodos} todos={Todos} />
		</div>
	)
}

export default App
