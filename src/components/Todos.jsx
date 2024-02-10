import React from 'react'
import { useSelector } from "react-redux"
import { deleteTodo } from '../features/todo/todoSlice'
import { useDispatch } from 'react-redux'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

function Todos() {

    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch();

    return (
        <>
            <div className='text-center m-auto lg:w-1/3 mt-8'>
                {
                    todos.map((todo) => (
                        <div key={todo.id} className='p-3 bg-slate-900 mt-5 rounded-md flex items-center justify-between'>
                            <div className='' >{todo.text}</div>

                            <button
                                onClick={() => dispatch(deleteTodo(todo.id))}
                                className="hover:scale-125 transition ease-in-out "
                            >
                                <FontAwesomeIcon className='text-rose-700' icon={faTrash} />
                            </button>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default Todos