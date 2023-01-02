import React,{useEffect} from 'react';
import {connect} from 'react-redux';
import {Route,Navigate,Outlet} from 'react-router-dom';

 const PrivateRoute=({isAuthenticated})=>{
    //  useEffect(()=>{
    //      alert(JSON.stringify(isAuthenticated))
    //  },[])
     return(

        !isAuthenticated  ?<Navigate to='/login'/>:<Outlet/>
       )
 }
 
 

     const mapStateToProps = state => ({
    isAuthenticated: state.token !== null,
    isLoading: state.loading
})
 export default connect(mapStateToProps)(PrivateRoute); 