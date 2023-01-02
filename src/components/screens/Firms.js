import React,{useState,useEffect} from 'react'
import './style.css'
import axios from 'axios'
import { useNavigate,Link } from "react-router-dom";
export const Firms = () => {
   const navigate = useNavigate();
   const [firms,setFirms]=useState([])
   
   const fetch_data = () => {
    let my_token = localStorage.getItem('token');
    const config = {
      headers: { Authorization: `Bearer ${my_token}` }
  };     

    axios.get('http://localhost:8000/lawyers/',
    config).then(response => {
      console.log(response.data)
      setFirms(response.data);
    
    });
  }
 
  useEffect(() => {
    fetch_data();
  }, [])

  return (
    <div class="container" style={{marginTop:100}}>
{/* <button className='btn-warning bg-[#606C80] mt-[20px]' style={{float:'right',color:'#FCC344',padding:'10px',marginLeft:'10px'}}>Download Csv</button> */}
<Link to="../add_firm">
<button className='btn btn-warning mt-[20px]' style={{float:'right',marginBottom:30}}>Add Firm</button>
</Link>

    <table class="table table-bordered table-striped "  id="tableOne" style={{background:'white',marginTop:30}}>
       <thead class="thead-dark">
           <tr>
             <th>ID</th>
             <th>Name</th>
             <th>Email</th>
             <th>Phone number</th>
             <th>Address</th>
          </tr>
       </thead>
       <tbody>
       {firms.map(firm => {
        return (
          <tr>
              <td>{firm.id}</td>
             <td>{firm.name}</td>
             <td>{firm.user}</td>
             <td>{firm.phone}</td>
             <td>{firm.address}</td>
          </tr>
          )
         })} 
         
          
       </tbody>
    </table>
    
    
    
    
    
 
 
 </div>
    )
}
