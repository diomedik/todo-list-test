import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { MainPage } from './components/MainPage';
import './App.css';

const App = () => {
    return (
        <Provider store={store}>
            <MainPage />
        </Provider>
    );
};

export default App;
