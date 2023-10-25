// src/components/Publications.js
import React from 'react';
import {Link} from 'react-router-dom'
import ProjectDescription from './ProjectDescription';
const Publications = () => {
 
 

  return (
    <div>
      <h2 className='p-3 mt-20% mr-20%'>Here you can find Publications and scientific journals published by people all around this country</h2>
      <label  >Search by catogory:</label> 
      <input type='text' placeholder='catagories'></input>
      <table class="table">
  <thead>
    <tr>
      <th scope="col">No_</th>
      <th scope="col">Principal investigators name</th>
      <th scope="col">Project title</th>
      <th scope="col">Project Description</th>
      <th>catagory</th>
      <th>Publication date</th>
      <th>Download PDT</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Tomas Mores</td>
      <td>Ai Bycle</td>
      <td> <Link to='/resources/publications/discription' className='btn bg-info'> Description</Link> </td>
      <td>Agricalture</td>
      <td>10/12/2012</td>
      <button className='btn bg-success'>Download</button>
    </tr>
   
      
  </tbody>
</table>
    </div>
  );
};

export default Publications;
