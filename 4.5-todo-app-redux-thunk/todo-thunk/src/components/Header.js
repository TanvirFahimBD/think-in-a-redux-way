import React, { useState } from 'react';
import notesImg from '../assets/images/notes.png';
import completeAllImg from '../assets/images/double-tick.png';
import plusImg from '../assets/images/plus.png';
import { useDispatch } from 'react-redux';
import { allCompleted, clearCompleted } from '../redux/todos/actions';
import { addTodos } from '../redux/todos/thunk/addTodos';

const Header = () => {
    const dispatch = useDispatch()
    const [inputValue, setInputValue] = useState('');

    const handleInput = (e) => {
        e.preventDefault();
        dispatch(addTodos(inputValue));
        setInputValue('');
    };

    const completeHandler = (e) => {
        dispatch(allCompleted())
    };

    const clearHandler = (e) => {
        dispatch(clearCompleted())
    };
    return (
        <div>
            <form
                className="flex items-center bg-gray-100 px-4 py-4 rounded-md" onSubmit={handleInput}
            >
                <img
                    src={notesImg}
                    className="w-6 h-6"
                    alt="Add todo"
                />
                <input
                    type="text"
                    placeholder="Type your todo"
                    className="w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <button
                    type="submit"
                    className={`appearance-none w-8 h-8 bg-[url('${plusImg}')] bg-no-repeat bg-contain`}
                ></button>
            </form>

            <ul className="flex justify-between my-4 text-xs text-gray-500">
                <li className="flex space-x-1 cursor-pointer">
                    <img
                        className="w-4 h-4"
                        src={completeAllImg}
                        alt="Complete"
                    />
                    <span onClick={completeHandler}>Complete All Tasks</span>
                </li>
                <li className="cursor-pointer" onClick={clearHandler}>Clear completed</li>
            </ul>
        </div>
    );
};

export default Header;