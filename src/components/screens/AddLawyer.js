import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
// import Select from 'react-select';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
const options = [
  { value: "Cybersecurity", label: 'Cybersecurity' },
  { value: 'Banking', label: 'Banking' },
  { value: 'Rights', label: 'Rights' }
]




const AddLawyer = () => {
  const navigate = useNavigate();
  const [lawyerName, setLawyerName] = useState('')
  const [lawyerEmail, setLawyerEmail] = useState('')
  const [lawyerAddress, setLawyerAddress] = useState('')
  const [lawyerPhone, setLawyerPhone] = useState('')
  const [lawyerFirm, setlawyerFirm] = useState('')
  const [lawyerPassword, setLawyerPassword] = useState('')
  const [firms, setFirms] = useState([])

  useEffect(() => {
    axios.get('http://localhost:8000/firms/').then(response => {
      console.log(response.data)
      setFirms(response.data);
    });
  }, [])
  
  const handleSubmit = (e) => {
    let my_token = localStorage.getItem('token');
    e.preventDefault()
    const config = {
      headers: { Authorization: `Bearer ${my_token}` }
    };
    // var areas = []
    // for (var i = 0; i < lawyerArea.length; i++) {
    //   areas.push(lawyerArea[i].value)
    // }
    const postObj = JSON.stringify({
      'name': lawyerName,
      'email': lawyerEmail,
      'address': lawyerAddress,
      'phone': lawyerPhone,
      'firm': lawyerFirm,
      'password': lawyerPassword,


    })

    
    

    axios.post('http://localhost:8000/register_lawyer/', postObj).then((res) => {
      if (res.data.code == 200) {
        alert('Your are succesfully register Please login with you credentials')
        navigate('/app/lawyers')
      }
      else {
        alert('Something went wrong')
      }

    }).catch(err => {
      console.log(err)
    })
  };
  return (
    <>
      <div className="" style={{ padding: "20px", backgroundColor: "white", marginTop: 70 }}>
        <p style={{ color: "#606C80" }}>Add Lawyer</p>
        <form className='m-[35px]' onSubmit={(e) => handleSubmit(e)}>
          {/* <div className='flex flex-row' style={{justifyContent:'space-between',marginTop:20,marginRight:'20%'}}>
        <label style={{}}>Lawyer ID</label>
        <input type="text" name="id"  className="form-control" placeholder="Lawyer id" style={{width:'60%'}} required />
        </div>      */}
          <div className='flex flex-row form-group' style={{ justifyContent: 'space-between', marginTop: 20, marginRight: '20%' }}>

            <label className="" style={{}}>Lawyer Name</label>

            <input type="text" onChange={(text) => setLawyerName(text.target.value)} name="lawyername" className="form-control" placeholder="Lawyer Name" style={{ width: '60%' }} required />
          </div>

          <div className='flex flex-row' style={{ justifyContent: 'space-between', marginTop: 20, marginRight: '20%' }}>
            <label style={{}}>Email</label>
            <input type="email" onChange={(text) => setLawyerEmail(text.target.value)} name="email" className="form-control" placeholder="lawyer email" style={{ width: '60%' }} required />
          </div>

          <div className='flex flex-row' style={{ justifyContent: 'space-between', marginTop: 20, marginRight: '20%' }}>
            <label style={{}}>Address </label>
            <input type="text" onChange={(text) => setLawyerAddress(text.target.value)} name="address" className="form-control" placeholder="lawyer address" style={{ width: '60%' }} required />
          </div>

          <div className='' style={{ justifyContent: 'space-between', marginTop: 20, marginRight: '20%' }}>
            <label style={{}}>Education Level</label>
            <br />
            <select required onChange={(text) => setlawyerFirm(text.target.value)} className="" style={{ width: '60%', border: '1px solid #cfd1cf', color: '#757575', height: 38, borderRadius: 5 }}>
              <option value="">Select your Firm</option>
              {firms.map(firm => {
                return (
                  <option value={firm.id}>{firm.name}</option>
                )
              })}
            </select>
          </div>

          <div className='flex flex-row' style={{ justifyContent: 'space-between', marginTop: 20, marginRight: '20%' }}>
            <label style={{}}>Phone </label>
            <input type="text" onChange={(text) => setLawyerPhone(text.target.value)} name="phonenumber" className="form-control" placeholder="Phonenumber" style={{ width: '60%' }} required />
          </div>

          <div className='flex flex-row' style={{ justifyContent: 'space-between', marginTop: 20, marginRight: '20%' }}>
            <label style={{}}>Phone </label>
            <input type="password" onChange={(text) => setLawyerPassword(text.target.value)} name="Password" className="form-control" placeholder="Password" style={{ width: '60%' }} required />
          </div>

          {/* <div className='flex flex-row' style={{justifyContent:'space-between',marginTop:20,marginRight:'20%'}}>
                <label style={{}}>Area</label>
                <div className="" style={{width:"60%"}}>
               <Select isMulti options={options} className="  "onChange={(text) => setLawyerArea(text)}/>
               </div>
                
                </div> */}

          {/* <div className='flex flex-row' style={{justifyContent:'space-between',marginTop:20,marginRight:'20%'}}>
                <label style={{}}>Industry</label>

                <input type="text" name="industry" className="form-control" placeholder="industry" style={{width:'60%'}} required />
                </div> */}
          <button href="#" class="btn btn-primary mt-[15px]" type="submit" style={{
            background: '#FCC344', border: 'none', width: '20%', justifycontent: 'center', marginTop: 30,

            marginLeft: "10%",
            color: "#000",
            height: '40px',
          }}>Add Lawyer</button>

        </form>
      </div>
    </>
  );
};

export default AddLawyer;
