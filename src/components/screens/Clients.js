import React,{useState,useEffect} from 'react'
import './style.css'
import axios from 'axios'
import { useNavigate,Link } from "react-router-dom";
export const Clients = () => {
   const navigate = useNavigate();
   const [clients,setClients]=useState([])
   
   

   


   const fetch_data = () => {
      let my_token = localStorage.getItem('token');
      const config = {
        headers: { Authorization: `Bearer ${my_token}` }
    };     
 
      axios.get('http://localhost:8000/clients/',
      config).then(response => {
        console.log(response.data)
        setClients(response.data);
      
      });
    }
   
    useEffect(() => {
      fetch_data();
      
    }, [])
  return (
    <div class="container" style={{marginTop:100}}>


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
       {clients.map(client => {
        return (
          <tr>
             <td>{client.id}</td>
             <td>{client.name}</td>
             <td>{client.user}</td>
             <td>{client.phone}</td>
             <td>{client.address}</td>
            
          </tr>
          )
         })} 
         
          
       </tbody>
    </table>
    
    
    
    
    
 
 
 </div>
    )
}
