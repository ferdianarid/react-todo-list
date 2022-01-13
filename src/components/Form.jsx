import React from 'react'

// Form Components
const Form = (props) => {
       // Destructuring props
       const { changeText, todos, setTodoList, inputText, setStatus } = props

       // Input Handler
       const InputHandler = (event) => {
              // Store Input Value to variable
              const values = event.target.value

              // Pass values to props
              changeText(values)
       }

       // addTodos Handler
       const addTodosHandler = (event) => {
              // Prevent browser reload when button is submited
              event.preventDefault()

              // Set Todo List || Array
              setTodoList([
                     // spread all values todos || Object { text, completed, id }
                     ...todos, {
                            text: inputText, completed: false, id: Math.random() * 1000
                     }
              ])
              // Reset Input after Submit Data
              changeText("")
       }

       // Select Status Handler
       const SelectStatusHandler = (event) => {
              const values = event.target.value
              setStatus(values)
              console.log(values)
       }
       return (
              <React.Fragment>
                     {/* Form Action */}
                     <form action="">
                            <input onChange={InputHandler} value={inputText} type="text" name="todo-input" id="todo-input" placeholder='Add task' className='todo-input text-yellow-500 font-bold' />

                            {/* Button Add Todos */}
                            <button onClick={addTodosHandler} className="todo-button text-white" type='submit'>Add</button>

                            {/* Select Todos */}
                            <div className="select">
                                   <select onChange={SelectStatusHandler} name="todo" id="todo" className='filter-todo bg-white'>
                                          {/* Option Values */}
                                          <option value="all">All</option>
                                          <option value="completed">Completed</option>
                                          <option value="uncompleted">Uncompleted</option>
                                   </select>
                            </div>
                     </form>
              </React.Fragment>
       )
}

export default Form
