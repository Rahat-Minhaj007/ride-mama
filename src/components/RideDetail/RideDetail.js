import React, { useContext, useState } from 'react';
import { useParams } from 'react-router';
import './RideDetail.css';
import { Link } from 'react-router-dom';
import Map from '../Map/Map';
import { destinationContext } from '../../App';
// import map from '../images/Map.png';

const RideDetail = () => {
    const { id } = useParams();
    const [rideDetails,setRideDetail] = useState({
        name1 : '',
        name2 : ''
    })
    const [userDestination,setUserDestination] = useContext(destinationContext);

    const handleOnBlur = (e) => {
        if(e.target.name === 'pickUp'){
          const  rideInfo = {...rideDetails}
          rideInfo.name1 = e.target.value;
          setUserDestination(rideInfo);

        }
        if(e.target.name === 'drop'){
            const  rideInfo = {...rideDetails}
            rideInfo.name2 = e.target.value;
            setUserDestination(rideInfo);
  
          }
    }

    return (


        <div className="row mt-5 d-flex justify-content-around">


            <div className="wrapper  col-sm-3">
                <h2>RIDE MAMA</h2>
                <form id="myform">
                    <div className="input_field">
                        <h6>Pick From</h6>
                        <input type="text" onBlur={handleOnBlur} name="pickUp" placeholder="Pick Up From" required />

                    </div>
                    <div className="input_field">
                        <h6>Pick To</h6>
                        <input type="text"  onBlur={handleOnBlur} name="drop" placeholder="Destination"  required />

                    </div>

                    <div >
                        <Link to={`/price/${id}`}>  <input className="btn btn-warning" type="submit" value="SEARCH" /></Link>
                    </div>
                </form>

            </div>

            <div className="col-sm-5 mapping">
                {/* <img  style={{width:"100%"}} src={map} alt=""/> */}
                <Map></Map>
            </div>

        </div>

    );
};

export default RideDetail;