import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import './App.css';
import { CreateTodo } from './components/CreateTodo';
import { TodoList } from './components/TodoList';

const App = () => {
    return (
        <Provider store={store}>
            <div className="App">
                <CreateTodo />
                <TodoList />
            </div>
        </Provider>
    );
};

export default App;
