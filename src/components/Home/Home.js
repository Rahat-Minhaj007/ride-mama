import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import fakeData from '../../Fakedata/Fakedata.json';
import Rides from '../Rides/Rides';
import './Home.css';

const Home = () => {

    const [data, setData] = useState([]);
    useEffect(() => {
        setData(fakeData);
    }, [])

    return (
        <div className="home">
            <div className="home-ride">
                {
                    data.map(dt => <Rides data={dt} key={dt.id}></Rides>)
                }
            </div>

        </div>
    );
};

export default Home;