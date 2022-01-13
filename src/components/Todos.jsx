import React from 'react'

// Todos Components
const Todos = ({ id, text }) => {
       return (
              <React.Fragment>
                     <div className="py-1 px-2 bg-white flex items-center justify-between my-2">
                            {/* Render Data */}
                            <li className="todo-items text-gray-800 font-bold py-1 px-2 mr-4">{text}</li>
                            <div className="w-fit flex items-center justify-center gap-x-2">
                                   <button className="complete">
                                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                 <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                          </svg>
                                   </button>
                                   <button className="delete">
                                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                 <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                                          </svg>
                                   </button>
                            </div>
                     </div>
              </React.Fragment>
       )
}

export default Todos
