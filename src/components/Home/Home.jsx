import React from 'react';
import Banner from './Banner';
import FindCategory from './FindCategory';
import Jobs from './Jobs';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <FindCategory></FindCategory>
            <Jobs></Jobs>
        </div>
    );
};

export default Home;