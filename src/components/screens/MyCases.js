import React,{useState,useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './style.css'
import axios from 'axios'
export const MyCases = () => {
   const navigate = useNavigate()
   const [cases,setCases]=useState([])
   const fetch_data = () => {
      let my_token = localStorage.getItem('token');
      const config = {
        headers: { Authorization: `Bearer ${my_token}` }
    };     
  
      axios.get('http://localhost:8000/cases/',
      config).then(response => {
        console.log(response.data)
        setCases(response.data);
      
      });
    }
   
    useEffect(() => {
      fetch_data();
    }, [])
  return (
    <div class="container" style={{marginTop:100}}>
    <Link to="../add_case"><button className='btn btn-warning my-[20px]' style={{float:'right'}}>Add case <i class='bx bx-plus' ></i></button></Link>
    <h2 style={{marginTop:10}}>My Cases</h2>
    <table class="table table-bordered table-striped "  id="tableOne" style={{background:'white'}}>
       <thead class="thead-dark">
          <tr>
             <th>ID</th>
             <th>Client Name</th>
             <th>Firm name</th>
             <th>Firm email</th>
             <th>Firm phone</th>
             <th>Subject</th>
             <th>Area</th>
             <th>Status</th>
             <th>Action</th>
          </tr>
       </thead>
       <tbody>
       {cases.map(case_ => {
        return (
          <tr>
             <td>{case_.id}</td>
             <td>{case_.client}</td>
             <td>{case_.firm}</td>
             <td>{case_.firm}</td>
             <td>{case_.firm}</td>
             <td>{case_.subject}</td>
             <td>{case_.area}</td>
             <td style={{color:'green'}}>test</td>
             <td><button  className='btn btn-warning'>View</button></td>
          </tr>
         )
          })} 
       </tbody>
    </table>
    
    
    
    
    
 
 
 </div>
    )
}
