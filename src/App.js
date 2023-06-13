import React from 'react';
import "./App.css";
import Home from './Pages/Home/Home';
import List from './Pages/list/List';
import Login from './Pages/login/Login';
import New from './Pages/New/New';
import Single from './Pages/Single/Single';

const App = () => {
    return (
        <div className='App'>
            <Home />
            <List />
            <Login />
            <New />
            <Single />
        </div>
    )
}

export default App