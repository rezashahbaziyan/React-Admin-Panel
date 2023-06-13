import React from 'react';
import "./App.css";
import Home from './Pages/Home/Home';
import List from './Pages/list/List';
import Login from './Pages/login/Login';
import New from './Pages/New/New';
import Single from './Pages/Single/Single';

import {
    BrowserRouter,
    Routes,
    Route,
} from 'react-router-dom';

const App = () => {
    return (
        <div className='App'>
            <BrowserRouter>
                <Routes>
                    <Route path='/'>
                        <Route index element={<Home />} />
                        <Route path='Login' element={<Login />} />
                        <Route path='users'>
                            <Route index element={<List />} />
                            <Route path=':userId' element={<Single />} />
                            <Route path='new' element={<New />} />
                        </Route>
                        <Route path='products'>
                            <Route index element={<List />} />
                            <Route path=':productId' element={<Single />} />
                            <Route path='new' element={<New />} />
                        </Route>
                    </Route>
                </Routes>
            </BrowserRouter>
            {/* <Home />
            <List />
            <Login />
            <New />
            <Single /> */}
        </div>
    )
}

export default App