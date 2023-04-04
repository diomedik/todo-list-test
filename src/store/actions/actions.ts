import { ACTION_TYPES } from '../constants/actionTypes';
import { ITodo } from '../../interfaces/ITodo';

export const addTodo = (todo: ITodo) => ({
    type: ACTION_TYPES.ADD_TODO,
    payload: todo,
});

export const deleteTodo = (id: number) => ({
    type: ACTION_TYPES.DELETE_TODO,
    payload: id,
});

export const editTodo = (id: number, description: string) => ({
    type: ACTION_TYPES.EDIT_TODO,
    payload: { id, description },
});
