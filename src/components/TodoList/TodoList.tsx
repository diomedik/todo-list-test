import React from 'react';
import { useSelector } from 'react-redux';
import { TodoItem } from '../TodoItem';
import { IState } from '../../store/interfaces/IState';

export const TodoList = () => {
    const todos = useSelector((state: IState) => state.todos);

    return (
        <div>
            {!!todos.length &&
                todos.map((todo) => (
                    <TodoItem
                        key={todo.id}
                        description={todo.description}
                        date={todo.date}
                        id={todo.id}
                    />
                ))}
        </div>
    );
};
