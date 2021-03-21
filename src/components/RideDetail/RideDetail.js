import React, { useContext, useState } from 'react';
import { useParams } from 'react-router';
import './RideDetail.css';
import { Link } from 'react-router-dom';
import Map from '../Map/Map';
import { destinationContext1, destinationContext2 } from '../../App';
// import map from '../images/Map.png';

const RideDetail = () => {

    const { id } = useParams();

    const [rideDetails1, setRideDetail1] = useState({

        name1: ''
    })

    const [rideDetails2, setRideDetail2] = useState({

        name2: ''
    })

    const [userDestination1, setUserDestination1] = useContext(destinationContext1);
    const [userDestination2, setUserDestination2] = useContext(destinationContext2);

    const handleOnBlur1 = (e) => {
        if (e.target.name === 'pickUp') {
            const rideInfo1 = { ...rideDetails1 }
            rideInfo1.name1 = e.target.value;
            setUserDestination1(rideInfo1);

        }

    }

    const handleOnBlur2 = (e) => {
        if (e.target.name === 'drop') {
            const rideInfo2 = { ...rideDetails2 }
            rideInfo2.name2 = e.target.value;
            setUserDestination2(rideInfo2);

        }

    }

    return (


        <div className="row mt-5 d-flex justify-content-center ">


            <div className="wrapper  col-md-2">
                <h2>RIDE MAMA</h2>
                <form id="myform">
                    <div className="input_field">
                        <h6>Pick Up From</h6>
                        <input type="text" onBlur={handleOnBlur1} name="pickUp" placeholder="Pick Up From" required />

                    </div>
                    <div className="input_field">
                        <h6>Drop</h6>
                        <input type="text" onBlur={handleOnBlur2} name="drop" placeholder="Destination" required />

                    </div>
                    <div className="input_field">
                        <label htmlFor=""><h6>Departure</h6></label>
                        <input className="form-control" type="date" id="dateFrom" required />
                    </div>
                    <div className="input_field">
                        <label htmlFor=""><h6>Return</h6></label>
                        <input className="form-control" type="date" id="dateTo" required />
                    </div>

                    <div >
                        <Link to={`/price/${id}`}>  <input className="btn btn-warning" type="submit" value="SEARCH" /></Link>
                    </div>

                </form>

            </div>

            <div className="col-md-2 mapping">
                {/* <img  style={{width:"100%"}} src={map} alt=""/> */}
                <Map></Map>
            </div>

        </div>

    );
};

export default RideDetail;