import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Rides = (props) => {
    const { name, img } = props.data;
    return (
        <div className=" rides mt-5 mb-5 text-center">
            <Card style={{ width: '13rem' }}>
                <Card.Body>
                    <img style={{ width: '50%' }} src={img} alt="" />
                    <Card.Title>{name}</Card.Title>
                    <Link to="#"><button className="btn btn-primary">Explore</button></Link>

                </Card.Body>
            </Card>
        </div>
    );
};

export default Rides;