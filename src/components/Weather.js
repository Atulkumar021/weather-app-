import React, { useState } from "react";
import "./Weather.css";
import Sunimg from "../assets/icons8-sun.gif";
import Windimg from "../assets/icons8-wind-100.png";
import Rain from "../assets/icons8-drop-67.png";
import Umbrella from "../assets/icons8-umbrella-64.png";
import Weatherimg from '../assets/weatherimg.jpg'
const Weather = ({handlechange,city,data}) => {

  return (
    <div>
      <div className="container">
    
        <div className="box" >
         
        
          <div className="search">
            <input type="search" value={city} onChange={handlechange}/> Search
          </div>
          <div>
          <div className="cityinform">
                <div className="country" >
                  <p style={{margin:"10px",fontSize:'1rem'}}>{data?.location?.country}</p>
                  <p >Country</p>
                </div>
                <div className="region">
                  <p style={{margin:"10px",fontSize:'1rem'}}>{data?.location?.region}</p>
                  <p>Region</p>
                </div>
                <div className="city">
                  <p style={{margin:"10px",fontSize:'1rem'}}>{data?.location?.name}</p>
                  <p>City</p>
                </div>
              </div>
            <div className="winform" >
              <div className="image">
                <img src={data?.current?.condition?.icon} alt="img" />
              </div>
              <div className="temp" style={{ padding: "10px" }}>
                <p style={{ fontSize: "2em" }}>{data?.current?.temp_c}<sup>.</sup>c</p>
                <p>temp</p>
              </div>
              
            <div className="box2">
                
            <div className="humidity" style={{ padding: "10px",display:"flex"}}>
                  <img src={Windimg} alt="" style={{ width: "30px",marginRight:'20px' }} />
                  <p>{data?.current?.wind_kph} km/h </p>
                </div>
                <div className="wind" style={{ padding: "10px",display:"flex"}}>
                  <img src={Rain} alt="" style={{ width: "30px",marginRight:'20px' }} />
                  <p>{data?.current?.humidity} %</p>
                </div>
                <div className="sunrise" style={{ padding: "10px",display:"flex" }}>
                  <img src={Umbrella} alt="" style={{ width: "30px" ,marginRight:'20px'}} />
                  <p>{data?.current?.cloud} %</p>
                </div>
            </div>
       
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
