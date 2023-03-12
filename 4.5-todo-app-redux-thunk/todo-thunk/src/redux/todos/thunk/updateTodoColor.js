import { colorSelected } from "../actions";

export const updateTodoColor = (todoId, selectedColor) => {
    return async (dispatch, getState) => {
        const response = await fetch(`http://localhost:9000/todos/${todoId}`, {
            method: 'PATCH',
            body: JSON.stringify({
                "color": selectedColor,
            }),
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            }
        });
        const todo = await response.json()

        dispatch(colorSelected(todo.id, todo.color));
    }
}