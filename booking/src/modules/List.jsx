import React from "react";
import Header from "./Header";
import Navbar from "./navbar";
import "./List.css"
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";

function List(){
    const location =useLocation()
    console.log(location)
    // set the states from the gained objects

    const [destination,setDestination]=useState(location.state.destination)
    const [date,setDate]= useState(location.state.date)
    const [openDate,setOpenDate]=useState(false)
    const [options,setOptions]=useState(location.state.Options)
    return(
        <div>
            <Navbar/>
            <Header type={"List"}/>
            <div className="listContainer">
                <div className="listWrapper">
                    <div className="listSearch">
                        <h1 className="lsTitle">Search</h1>
                        <div className="lsItem">
                            <label>Destination</label>
                            <input type="text" placeholder={destination}/>
                        </div>
                        <div className="lsItem">
                            <label>Check In Date</label>
                            <span onClick={()=>setOpenDate(!openDate)}>{`${format(date[0].startDate,"MM/dd/yyyy")} to ${format(date[0].endDate,"MM/dd/yyyy")}`}</span>
                            { openDate && <DateRange 
                                onChange={(item)=>setDate([item.selection])}
                                minDate={new Date()}
                                ranges={date}
                            />}
                        </div>
                    </div>
                    <div className="listResult"></div>
                </div>
            </div>
            
        </div>
    );
}
export default List;