import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Rides = (props) => {
    const { name,img,id} = props.data;
    return (
        <div className="rides mt-5 ml-5 text-center col-sm-2 ">
            <Card style={{ width: '18rem',height: '15rem'}}>
                <Card.Body>
                    <img style={{ width: '50%' }} src={img} alt="" />
                   
                    <Link style={{textDecoration:"none"}} to={`/rideDetail/${id}`}> <Card.Title style={{color:"black"}} className="mt-3 ">{name}</Card.Title></Link>

                </Card.Body>
            </Card>
        </div>
    );
};

export default Rides;