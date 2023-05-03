import React from 'react';
import NavigationBar from '../shared/NavigationBar/NavigationBar';
import { Outlet } from 'react-router-dom';
import Footer from '../shared/Footer/Footer';

const RecipeLayout = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default RecipeLayout;