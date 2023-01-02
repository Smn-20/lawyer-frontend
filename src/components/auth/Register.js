
import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../images/user.png';
import axios from 'axios'
import { Link } from 'react-router-dom';

export const Register= () => {
  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [passwordConfirmation,setPasswordConfirmation]=useState('')
  const handleSubmit = (e) => {
    e.preventDefault();

    const body = {
      "name":name,
      "email":email,
      "password":password,
      "password_confirmation":passwordConfirmation
    };

    console.log(body)

    axios
      .post(
        "https://damp-everglades-40742.herokuapp.com/api/register",
        body
      )
      .then((res) => {
        console.log(res);
        alert("Registration successfull!")
        // location.replace("/login");
      })
      .catch((error) => {
       alert("Something went wrong!")
      });
  };
  return (
    <>
    
    <div className="card shadow mx-auto font-[Poppins]" style={{width: '824px',border:'none',height: '654px',top:'25px',borderradius: '4px'
}}>
      <div className="h-[100%]">
      <div style={{float:'left',padding:20,marginBottom:107}} className="col-md-6">
      <div style={{height:100}}></div>
      {/* <img src={logo}  style={{width:'100%'}}/> */}
      
    <h6 className="card-title font-bold pl-[10px] text-center text-[19px] ">Client Registration</h6>
              <form onSubmit={(e)=>handleSubmit(e)} className='m-[35px] text-[left]'>       
                Fullname
                <input onChange={(text) => setName(text.target.value)} type="text" name="names"  className="form-control"  required />
                Email
                <input onChange={(text) => setEmail(text.target.value)} type="email" name="email" className="form-control" required/>
                {/* Country
                <input type="text" name="country"  className="form-control"  required />
                Phone Number
                <input type="text" name="number"  className="form-control"  required /> */}
                Password
                <input type="password" onChange={(text) => setPassword(text.target.value)} name="password"  className="form-control"  required />
                Confirm Password
                <input type="password" onChange={(text) => setPasswordConfirmation(text.target.value)} name="confirmpassword" className="form-control"  required />
                
                <button href="#" className="btn btn-primary mt-[15px]" style={{background:'#FCC344',border:'none',justifycontent:'center',

width:'80%',
marginTop:20,
marginLeft:"10%",
color:"#606C80",
height:'40px',
}}>Create Account</button>

</form>
<div className='text-center' style={{marginTop:'7%',fontWeight:'bold'}}>
<p>Already on SureLaw?<Link to="../login" style={{color:'#FCC344',fontSize:'20px'}}>Sign in</Link></p>
</div>
        </div>

        <div style={{float:'right',height:'100%',backgroundColor:'#333333',padding:12}} className="col-md-6 bg-[#333333] pt-[12px] text-center">
        <p className='font-bold text-white font-[Poppins]'style={{fontSize:'38px',paddingTop:100}}>Join Our Network</p>
          <p className='text-white font-[Poppins] weight-[600] pt-[35px]'>Sign up for an account to access our network.</p>
         

          <p className=' font-[Poppins] weight-[600] pt-[55px]' style={{fontWeight:'bold',color:'#FCC344'}}>Join our network and find the right lawyer for your case</p>
          
         

        </div>
  
        </div>
  </div>
</>


  )
}

export default Register