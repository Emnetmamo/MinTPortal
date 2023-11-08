// src/components/announcementsComponents/NationalCalls.js

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
// import { Link } from 'react-router-dom';


const NationalCalls = (props) => {
  const[calls, setCalls] = useState([]);
  const[loaded, setLoaded] = useState(false);
  const[currentPage, setCurrentPage] = useState(1);
  let count = 0;
  let category = props.category;
  let noOfPages = 0;
  let data = [];

  console.log(category);
  useEffect(function(){
    axios.get("http://localhost:5001/announcements/fetchCalls")
    .then(result=>setCalls(result.data))
    .then(result=>console.log(result))
    .catch(err=>console.log(err))
    setLoaded(true);
  
  },[]);
  function display(){
    if(loaded)
    {
      for(let i=0; i<calls.length; i++){
        if(calls[i].callType=="national" && (calls[i].field.toLowerCase()== category.toLowerCase() || 
        category == " "))
        {
          count++;
        }
      }
      noOfPages = count/4;
      if(noOfPages > parseInt(noOfPages, 10))
      {
        noOfPages = parseInt(noOfPages, 10) + 1;
      }
    for(let i=0; i<(calls.length); i++){
      if(calls[i].callType=="national" && (calls[i].field.toLowerCase()== category.toLowerCase() || 
      category == " "))
      {
      data.push(
        <div className="card mb-3" key={calls[i]._id}>
          <div className="card-body">
          <h3 className="card-title">{calls[i].title}</h3>
            <p className="card-text">Category: {calls[i].callType} calls</p>
            <p className="card-text">Description: {calls[i].description}</p>
            <p className='card-text'>Field of Study: {calls[i].field}</p>
            <p className='card-text'>Start Date: {calls[i].startDate.split("T")[0]}</p>
            <p className='card-text'>End Date: {calls[i].endDate.split("T")[0]}</p>
            <p className='card-text'>Prizes(Monetary): {calls[i].prizes}</p>
            <p className='card-text'>Instructions: {calls[i]. instructions}</p>
            <p className='card-text'>Guidelines on how to fill the application: {calls[i].guideline}</p>
            <a href='/register' style={{ backgroundColor: "orange", color:"white"}}
           className="btn ">
              Start your application
            </a>
          </div>
        </div>
      );
      }
    }
    return data;
  }
  }
  function pageLogic(list){
    const displayedCalls = [];
    const selectBox = document.getElementById("pageNo");
    selectBox.value = currentPage;
    for(let i=((currentPage-1)*4); i<(currentPage*4); i++){
      displayedCalls.push(list[i]);
    }
    return displayedCalls;
  }
  function generatePageNo(){
    const pages = [];
    for(let i=1; i<=noOfPages; i++){
      pages.push(
        <option value={i}>{i}</option>
      );
    }
    return pages;
  }

  return (
    <div>
      {loaded && pageLogic(display())}
      <div
        style={{
          width: "100%",
          textAlign: "center",
          marginTop: "10px",
          marginBottom: "50px",
        }}
      >
        {(currentPage > 1) && <Link
          style={{
            backgroundColor: "#11676d",
            color: "white",
            marginRight: "20px",
            width: "100px",
          }}
          className="btn "
          onClick={function(e){setCurrentPage(currentPage-1)}}
        >
          Previous
        </Link>}
        <select name="pageNo" id="pageNo" style={{ borderRadius: "5px" }}
        onChange={function(e){setCurrentPage(parseInt(e.target.value))}}>
          {loaded && generatePageNo()}
        </select>
        {(currentPage < noOfPages) && <Link
          style={{
            backgroundColor: "#11676d",
            color: "white",
            marginLeft: "20px",
            width: "100px",
          }}
          onClick={function(e){setCurrentPage(currentPage+1)}}
          className="btn "
        >
          Next
        </Link>}
      </div>
    </div>
  );
}

export default NationalCalls;
