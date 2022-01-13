import React from 'react'

const Form = (props) => {
       const { changeText } = props
       // Input Handler
       const InputHandler = (event) => {
              const values = event.target.value
              changeText(values)
       }
       return (
              <React.Fragment>
                     {/* Form Action */}
                     <form action="">
                            <input onChange={InputHandler} type="text" name="todo-input" id="todo-input" placeholder='Add task' className='todo-input text-yellow-500 font-bold' />
                            <button className="todo-button text-white" type='submit'>Add</button>
                            {/* Select Todos */}
                            <div className="select">
                                   <select name="todo" id="todo" className='filter-todo bg-white'>
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
