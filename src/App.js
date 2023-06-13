import React from 'react';
import "./App.css";
import Home from './Pages/Home/Home';
import List from './Pages/list/List';

const App = () => {
    return (
        <div className='App'>
            <Home />
            <List />
        </div>
    )
}

export default App