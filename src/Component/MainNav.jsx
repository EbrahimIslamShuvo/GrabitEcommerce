import React from 'react';
import MainNavBig from './MainNavBig';
import MainNavMid from './MainNavMid';
import MainNavSmall from './MainNavSmall';

const MainNav = () => {
    return (
        <div>
            <MainNavBig></MainNavBig>
            <MainNavMid></MainNavMid>
            <MainNavSmall></MainNavSmall>
        </div>
    );
};

export default MainNav;