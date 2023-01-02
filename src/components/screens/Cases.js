import React,{useState,useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './style.css'
import axios from 'axios'
export const Cases = () => {
   const navigate = useNavigate()
   const [cases,setCases]=useState([])
   const fetch_industry_data = () => {
      let my_token = localStorage.getItem('token');
      const config = {
        headers: { Authorization: `Bearer ${my_token}` }
    };     
 
      axios.get('https://damp-everglades-40742.herokuapp.com/api/all-clients',
      config).then(response => {
        console.log(response.data)
        const data = response.data
        setCases(data.data);
      
      });
    }
    useEffect(() => {
      fetch_industry_data();
      
    }, [])
  return (
    <div class="container" style={{marginTop:100}}>
       <Link to="../assigncase"><button className='btn btn-warning my-[20px]' style={{float:'right'}}>Assign case <i class='bx bx-plus' ></i></button></Link>

    <h2 style={{marginTop:10}}>Cases</h2>
    <table class="table table-bordered table-striped "  id="tableOne" style={{background:'white'}}>
       <thead class="thead-dark">
          <tr>
             <th>No</th>
             <th>Client Name</th>
             <th>Country</th>
             <th>Firm name</th>
             <th>Firm email</th>
             <th>Firm address</th>
             <th>Firm phone</th>
             <th>Subject</th>
             <th>Area</th>
             <th>Status</th>
             <th>Action</th>
          </tr>
       </thead>
       <tbody>
       {/* {cases.map(case_ => {
        return ( */}
          <tr>
             <td>test</td>
             <td>test</td>
             <td>test</td>
             <td>test</td>
             <td>test</td>
             <td>test</td>
             <td>test</td>
             <td>test</td>
             <td>test</td>
             <td style={{color:'green'}}>test</td>
             <td><button  className='btn btn-warning'>View</button></td>
          </tr>
        {/* )
          })} */}
       </tbody>
    </table>
    
    
    
    
    
 
 
 </div>
    )
}
