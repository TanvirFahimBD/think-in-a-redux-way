import React from 'react';
import { useDispatch } from 'react-redux';
import cancelImg from '../assets/images/cancel.png';
import { deleteTodo } from '../redux/todos/thunk/deleteTodo';
import { updateTodoColor } from '../redux/todos/thunk/updateTodoColor';
import { updateTodoStatus } from '../redux/todos/thunk/updateTodoStatus';

const Todo = ({ todo }) => {
    const { id, text, completed, color } = todo;
    const dispatch = useDispatch();

    const handleStatusChange = (todoId) => {
        dispatch(updateTodoStatus(todoId, completed))
    }

    const handleColorChange = (todoId, selectedColor) => {
        dispatch(updateTodoColor(todoId, selectedColor))
    }

    const handleDelete = (todoId) => {
        dispatch(deleteTodo(todoId))
    }

    return (
        <div
            className="flex justify-start items-center p-2 hover:bg-gray-100 hover:transition-all space-x-4 border-b border-gray-400/20 last:border-0"
        >
            {/* checkbox  */}
            <div
                className={`relative rounded-full bg-white border-2 border-gray-400 w-5 h-5 flex flex-shrink-0 justify-center items-center mr-2 ${completed && " border-green-500 focus-within:border-green-500"}`}
            >
                <input
                    type="checkbox"
                    checked={completed}
                    className="opacity-0 absolute rounded-full"
                    onChange={() => handleStatusChange(id)}
                />
                {completed && <svg
                    className="fill-current w-3 h-3 text-green-500 pointer-events-none"
                    viewBox="0 0 20 20"
                >
                    <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                </svg>}
            </div>
            {/* todo text  */}
            <div className={`select-none flex-1 ${completed && 'line-through'}`}>
                {text}
            </div>
            {/* green priority  */}
            <div
                className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer border-green-500 hover:bg-green-500 ${color === 'green' && 'bg-green-500'}`}
                onClick={() => handleColorChange(id, 'green')}
            ></div>
            {/* yellow priority  */}
            <div
                className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer border-yellow-500 hover:bg-yellow-500 ${color === 'yellow' && 'bg-yellow-500'}`}
                onClick={() => handleColorChange(id, 'yellow')}
            ></div>
            {/* red priority  */}
            <div
                className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer border-red-500 hover:bg-red-500 ${color === 'red' && 'bg-red-500'}`}
                onClick={() => handleColorChange(id, 'red')}
            ></div>
            {/* delete todo  */}
            <img
                src={cancelImg}
                className="flex-shrink-0 w-4 h-4 ml-2 cursor-pointer"
                alt="Cancel"
                onClick={() => handleDelete(id)}
            />
        </div>
    );
};

export default Todo;