import React, { useContext } from 'react';
import './PriceDetail.css';
import fakeData from '../../Fakedata/Fakedata.json';
import { useParams } from 'react-router';
// import map from '../images/Map.png';
import icon from '../images/peopleicon.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import Map from '../Map/Map';
import { destinationContext1, destinationContext2 } from '../../App';


const PriceDetail = () => {
    const { id } = useParams();

    const ride = fakeData.find(rd => rd.id === parseInt(id));
    const {img,regular,platinum,premium,regularPrc,platinumPrc,premiumPrc} = ride;

    const [userDestination1,setUserDestination1] = useContext(destinationContext1);
    const {name1} = userDestination1;
    const [userDestination2,setUserDestination2] = useContext(destinationContext2);
    const {name2} = userDestination2;
   
    return (
        <div className="row  mt-5  d-flex justify-content-center">
            <div className=" col-md-2">
                <div className="card" style={{ width: '18rem',border:"none"}}>
                    <div  style={{backgroundColor:"rgb(255, 204, 0)" }} className="card-body">
                        <h2 className="card-title text-center">RIDE MAMA</h2>
                        <div className="d-flex justify-content-around">
                            
                          <FontAwesomeIcon style={{fontSize:"30px"}} className="mt-5" icon={faLocationArrow} />
                            <div>
                                <h3>{name1}</h3>
                                <br/>
                                <br/>
                                <h3>{name2}</h3>
                            </div>
                        </div>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li style={{backgroundColor:"rgb(255, 232, 139)" }}   className="list-group-item d-flex justify-content-between price-list">
                            <img  style={{width:"40px"}} src={img} alt=""/>
                            {regular}
                            <div>
                            <img  style={{width:"20px"}}  src={icon} alt=""/>4
                            </div> 
                             {regularPrc}
                        
                         </li>
                         <li style={{backgroundColor:"rgb(255, 232, 139)" }} className="list-group-item d-flex justify-content-between">
                            <img  style={{width:"40px"}} src={ride.img} alt=""/>
                            {platinum}
                            <div>
                            <img  style={{width:"20px"}}  src={icon} alt=""/>4
                            </div> 
                            {platinumPrc}
                        
                         </li>
                         <li style={{backgroundColor:"rgb(255, 232, 139)" }} className="list-group-item d-flex justify-content-between">
                            <img  style={{width:"40px"}} src={ride.img} alt=""/>
                            {premium}
                            <div>
                            <img  style={{width:"20px"}}  src={icon} alt=""/>4
                            </div> 
                            {premiumPrc}
                        
                         </li>
                         <li style={{backgroundColor:"rgb(255, 232, 139)" }} className="list-group-item">
                           
                                  <Link style={{textDecoration:"none",color:"black"}} to="/home"><button style={{marginLeft:"34%"}} className="btn btn-warning ">HOME</button></Link>
                         </li>

            
                    </ul>

                </div>
            </div>
            <div className=" col-md-2 mapping">
            {/* <img  style={{width:"100%"}} src={map} alt=""/> */}
            <Map></Map>
            </div>
        </div>
    );
};

export default PriceDetail;