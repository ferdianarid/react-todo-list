import React from 'react'

// import Todo Component
import Todos from './Todos'

// TodoList Component || Destructuring Props
const TodoList = ({ todos, setTodos }) => {
       return (
              <React.Fragment>
                     <div className="todo-container">
                            <ul className="todo-list">
                                   {
                                          todos.map(todo => (
                                                 <Todos setTodos={setTodos} todos={todos} todo={todo} key={todo.id} text={todo.text} />
                                          ))
                                   }
                            </ul>
                     </div>
              </React.Fragment>
       )
}

export default TodoList
