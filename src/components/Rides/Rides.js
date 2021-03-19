import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Rides = (props) => {
    const { name,img,id} = props.data;
    return (
        <div className="rides mt-5 mb-5 text-center">
            <Card style={{ width: '12rem'}}>
                <Card.Body>
                    <img style={{ width: '50%' }} src={img} alt="" />
                   
                    <Link style={{textDecoration:"none"}} to={`/rideDetail/${id}`}> <Card.Title style={{color:"black"}} className="mt-3 ">{name}</Card.Title></Link>

                </Card.Body>
            </Card>
        </div>
    );
};

export default Rides;