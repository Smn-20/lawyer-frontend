import React,{useState,useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

// import Select from 'react-select';
import axios from 'axios'
const options = [
  { value: "Cybersecurity", label: 'Cybersecurity' },
  { value: 'Banking', label: 'Banking' },
  { value: 'Rights', label: 'Rights' }
]




const AddFirm = () => {
  const navigate = useNavigate();
  const [firmName,setfirmName]=useState('')
  const [firmEmail,setfirmEmail]=useState('')
  const [firmAddress,setfirmAddress]=useState('')
  const [firmphone,setfirmPhone]=useState('')
  const [password,setfirmPassword]=useState('')
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
      'name': firmName,
      'email': firmEmail,
      'address': firmAddress,
      'phone': firmphone,
      'password': password,


    })

    
    

    axios.post('http://localhost:8000/register_firm/', postObj).then((res) => {
      if (res.data.code == 200) {
        alert('Your are succesfully register new firm')
        navigate('/app/firms')
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
     <div className="" style={{padding:"20px",backgroundColor:"white",marginTop:70}}>
        <p style ={{color :"#606C80"}}>Add Firm</p>
        <form className='m-[35px]' onSubmit={(e)=>handleSubmit(e)}>  
        {/* <div className='flex flex-row' style={{justifyContent:'space-between',marginTop:20,marginRight:'20%'}}>
        <label style={{}}>Lawyer ID</label>
        <input type="text" name="id"  className="form-control" placeholder="Lawyer id" style={{width:'60%'}} required />
        </div>      */}
        <div className='flex flex-row form-group' style={{justifyContent:'space-between',marginTop:20,marginRight:'20%'}}>

         <label className="" style={{}}>Firm Name</label>
                
            <input type="text" onChange={(text) => setfirmName(text.target.value)} name="lawyername" className="form-control" placeholder="Firm Name" style={{width:'60%'}}required/>
        </div>
          
        <div className='flex flex-row' style={{justifyContent:'space-between',marginTop:20,marginRight:'20%'}}>
        <label style={{}}>Email</label>
        <input type="email" onChange={(text) => setfirmEmail(text.target.value)} name="email"  className="form-control" placeholder="Firm email" style={{width:'60%'}} required />
        </div> 

               <div className='flex flex-row' style={{justifyContent:'space-between',marginTop:20,marginRight:'20%'}}>
                <label style={{}}>Address </label>
                <input type="text" onChange={(text) => setfirmAddress(text.target.value)} name="address"  className="form-control" placeholder="Firm address" style={{width:'60%'}} required />
               </div>

               

                 <div className='flex flex-row' style={{justifyContent:'space-between',marginTop:20,marginRight:'20%'}}>
                <label style={{}}>Phone </label>
                <input type="text" onChange={(text) => setfirmPhone(text.target.value)} name="phonenumber" className="form-control" placeholder="Phone number" style={{width:'60%'}} required />
                </div>

                <div className='flex flex-row' style={{justifyContent:'space-between',marginTop:20,marginRight:'20%'}}>
                <label style={{}}>Password </label>
                <input type="password" onChange={(text) => setfirmPassword(text.target.value)} name="phonenumber" className="form-control" placeholder="Phone number" style={{width:'60%'}} required />
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
                <button href="#" class="btn btn-primary mt-[15px]" style={{background:'#FCC344',border:'none',width: '20%',justifycontent:'center',marginTop:30,

marginLeft:"10%",
color:"#000",
height:'40px',
}}>Add Firm</button>

</form>
     </div>
    </>
  );
};

export default AddFirm;
