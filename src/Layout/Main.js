import React from 'react';
import { Outlet } from 'react-router-dom';
import Home from '../Pages/Home/Home/Home';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>

        </div>
    );
};

export default Main;