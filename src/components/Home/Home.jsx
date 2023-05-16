import React from 'react';
import Banner from './Banner';
import FindCategory from './FindCategory';
import Job from './Job';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <FindCategory></FindCategory>
            <Job></Job>
        </div>
    );
};

export default Home;