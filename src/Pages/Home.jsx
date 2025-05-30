import React from 'react';
import UpNav from '../Component/UpNav';
import MainNav from '../Component/MainNav';
import Hero from '../Component/Hero';
import Category from '../Component/Category';

const Home = () => {
    return (
        <div>
            <UpNav></UpNav>
            <MainNav></MainNav>
            <Hero></Hero>
            <Category></Category>
        </div>
    );
};

export default Home;