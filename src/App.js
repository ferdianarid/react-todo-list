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
	return (
		<div className="App mt-8">
			{/* Title */}
			<h1 className="text-5xl font-extrabold text-white text-center">Create Todo List</h1>

			{/* Form Component */}
			<Form inputText={inputText} todos={Todos} setTodoList={setTodos} changeText={setInputText} />

			{/* Todo List Component */}
			<TodoList todos={Todos} />
		</div>
	)
}

export default App
