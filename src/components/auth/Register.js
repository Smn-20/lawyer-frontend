
import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../images/user.png';
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';


export const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [address, setaddress] = useState('')
  const [Phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')
  const handleSubmit = (e) => {
    let my_token = localStorage.getItem('token');
    if (password !== passwordConfirmation) {
      alert('Your passwords have to match!')
    }
    else {
      e.preventDefault()
      const config = {
        headers: { Authorization: `Bearer ${my_token}` }
      };
      // var areas = []
      // for (var i = 0; i < lawyerArea.length; i++) {
      //   areas.push(lawyerArea[i].value)
      // }
      const postObj = JSON.stringify({
        'name': name,
        'email': email,
        'address': address,
        'phone': Phone,
        'password': password,


      })

      axios.post('http://localhost:8000/register_client/', postObj).then((res) => {
        if (res.data.code == 200) {
          alert('Your are succesfully register new clients')
          navigate('/login')
        }
        else {
          alert('Something went wrong')
        }

      }).catch(err => {
        console.log(err)
      })
    }
  };
  return (
    <>

      <div className="card shadow mx-auto font-[Poppins]" style={{
        width: '824px', border: 'none', height: '654px', top: '25px', borderradius: '4px'
      }}>
        <div className="h-[100%]">
          <div style={{ float: 'left', padding: 11, marginBottom: 0 }} className="col-md-6">
            <div style={{ height: 100 }}></div>
            {/* <img src={logo}  style={{width:'100%'}}/> */}

            <h6 className="card-title font-bold pl-[10px] text-center text-[19px] ">Client Registration</h6>
            <form onSubmit={(e) => handleSubmit(e)} className='m-[35px] text-[left]'>
              Fullname
              <input onChange={(text) => setName(text.target.value)} type="text" name="names" className="form-control" required />
              Email
              <input onChange={(text) => setEmail(text.target.value)} type="email" name="email" className="form-control" required />
              {/* Country
                <input type="text" name="country"  className="form-control"  required />
                Phone Number
                <input type="text" name="number"  className="form-control"  required /> */}
              Phone
              <input type="number" onChange={(text) => setPhone(text.target.value)} name="phone" className="form-control" required />
              Address
              <input type="text" onChange={(text) => setaddress(text.target.value)} name="address" className="form-control" required />
              Password
              <input type="password" onChange={(text) => setPassword(text.target.value)} name="password" className="form-control" required />
              Confirm Password
              <input type="password" onChange={(text) => setPasswordConfirmation(text.target.value)} name="confirmpassword" className="form-control" required />

              <button href="#" className="btn btn-primary mt-[15px]" style={{
                background: '#FCC344', border: 'none', justifycontent: 'center',

                width: '100%',
                marginTop: 20,
                color: "#606C80",
                height: '40px',
              }}>Create Account</button>

            </form>
            <div className='text-center' style={{ marginTop: '7%', fontWeight: 'bold' }}>
              <p>Already on SureLaw?<Link to="../login" style={{ color: '#FCC344', fontSize: '20px' }}>Sign in</Link></p>
            </div>
          </div>

          <div style={{ float: 'right', height: '100%', backgroundColor: '#333333', padding: 12 }} className="col-md-6 bg-[#333333] pt-[12px] text-center">
            <p className='font-bold text-white font-[Poppins]' style={{ fontSize: '38px', paddingTop: 100 }}>Join Our Network</p>
            <p className='text-white font-[Poppins] weight-[600] pt-[35px]'>Sign up for an account to access our network.</p>


            <p className=' font-[Poppins] weight-[600] pt-[35px]' style={{ fontWeight: 'bold', color: '#FCC344' }}>Join our network and find the right lawyer for your case</p>



          </div>

        </div>
      </div>
    </>


  )
}

export default Register