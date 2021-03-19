import React from 'react';
import { useParams } from 'react-router';
import './RideDetail.css';
import { Link } from 'react-router-dom';
import Map from '../Map/Map';

const RideDetail = () => {
    const {id} = useParams();
    
  
    
    return (
       
            
            <div  className="row mt-5 d-flex justify-content-around">

           
            <div className="wrapper  col-sm-3">
                <h2>RIDE MAMA</h2>
                <form id="myform">
                    <div className="input_field">
                            <h6>Pick From</h6>
                            <input type="text" placeholder="Pick From" />

                    </div>
                    <div className="input_field">
                            <h6>Pick To</h6>    
                            <input type="text" placeholder="Destination"/>

                    </div>
                    
                   
                </form>
                <div >
                   <Link to={`/price/${id}`}><button className="btn btn-warning">SEARCH</button></Link>
                    </div>
            </div>

            <div className="col-sm-5">
            
                <Map></Map>
            </div>
            
        </div>
      
    );
};

export default RideDetail;