import { AnyAction } from 'redux';
import { IState } from './interfaces/IState';
import { ACTION_TYPES } from './constants/actionTypes';

const initialState: IState = {
    todos: [],
};

export const reducer = (state: IState = initialState, action: AnyAction) => {
    switch (action.type) {
        case ACTION_TYPES.ADD_TODO:
            return {
                todos: [...state.todos, action.payload],
            };
        case ACTION_TYPES.DELETE_TODO:
            return {
                todos: [...state.todos.filter((todo) => todo.id !== action.payload)],
            };
        case ACTION_TYPES.EDIT_TODO:
            return {
                todos: [
                    ...state.todos.map((todo) => {
                        if (todo.id === action.payload.id) {
                            return {
                                ...todo,
                                description: action.payload.description,
                                date: action.payload.date,
                            };
                        }
                        return todo;
                    }),
                ],
            };
        default:
            return state;
    }
};
