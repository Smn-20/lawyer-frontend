import React,{useState,useEffect} from 'react'
import './style.css'
import axios from 'axios'
import { Link } from 'react-router-dom'
export const Lawyers = () => {
   const [lawyers,setLawyers]=useState([])


   const fetch_data = () => {
      let my_token = localStorage.getItem('token');
      const config = {
        headers: { Authorization: `Bearer ${my_token}` }
    };     
 
      axios.get('http://localhost:8000/lawyers/',
      config).then(response => {
        console.log(response.data)
        setLawyers(response.data);
      
      });
    }
   
    useEffect(() => {
      fetch_data();
    }, [])

  return (
    <div class="container" style={{marginTop:100}}>
<Link to="../add_lawyer">
<button className='btn btn-warning mt-[20px] mb-[10px]' style={{float:'right',marginBottom:30}}>Add Lawyer</button>
</Link>
    <table class="table table-bordered table-striped "  id="tableOne" style={{background:'white'}}>
       <thead class="thead-dark">
          <tr>
             <th>ID</th>
             <th>Name</th>
             <th>Email</th>
             <th>Phone number</th>
             <th>Firm</th>
             <th>Address</th>
          </tr>
       </thead>
       <tbody>
       {lawyers.map(lawyer => {
        return (
          <tr>
            
             <td>{lawyer.id}</td>
             <td>{lawyer.name}</td>
             <td>{lawyer.user}</td>
             <td>{lawyer.phone}</td>
             <td>{lawyer.firm.name}</td>
             <td>{lawyer.address}</td>
            
         
          </tr>
           )
         })} 
         
          
       </tbody>
    </table>
    
    
    
    
    
 
 
 </div>
    )
}
