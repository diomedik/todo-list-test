import React from 'react';
import { CreateTodo } from '../CreateTodo';
import { TodoList } from '../TodoList';
import './MainPage.css';

export const MainPage = () => (
    <div>
        <h1 className="main-page-title">Todo List</h1>
        <CreateTodo />
        <TodoList />
    </div>
);
