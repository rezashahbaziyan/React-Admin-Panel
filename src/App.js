import React from 'react';
import "./App.css";
import Home from './Pages/Home/Home';
import List from './Pages/list/List';
import Login from './Pages/login/Login';

const App = () => {
    return (
        <div className='App'>
            <Home />
            <List />
            <Login />
        </div>
    )
}

export default App