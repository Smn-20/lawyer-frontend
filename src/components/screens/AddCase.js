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




const AddCase = () => {
const navigate = useNavigate();
  const [subject,setSubject]=useState('')
  const [area,setArea]=useState('')
  const [client,setClient]=useState('')
  const [firm,setFirm]=useState('')
  const [proof,setProof]=useState('')
  
  const handleSubmit = (e) => {
    let my_token = localStorage.getItem('token');
      e.preventDefault()
      const config = {
        headers: { Authorization: `Token ${my_token}` }
    };
    var areas=[]
    
   

    const postObj = new FormData();
    postObj.append('proof', proof)
    postObj.append('client', client)
    postObj.append('subject', subject)
    postObj.append('area', area)
            
    console.log(postObj)
    

    axios.post('http://localhost:8000/add_case/', postObj).then((res) => {
      if (res.data.code == 200) {
        alert('Case reported successfully!')
        navigate('/app/cases')
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
        <p style ={{color :"#606C80"}}>Add case</p>
        <form className='m-[35px]' onSubmit={(e)=>handleSubmit(e)}>  
        {/* <div className='flex flex-row' style={{justifyContent:'space-between',marginTop:20,marginRight:'20%'}}>
        <label style={{}}>Lawyer ID</label>
        <input type="text" name="id"  className="form-control" placeholder="Lawyer id" style={{width:'60%'}} required />
        </div>      */}
        <div className='flex flex-row form-group' style={{justifyContent:'space-between',marginTop:20,marginRight:'20%'}}>

         <label className="" style={{}}>Subject</label>
                
            <input type="text" onChange={(text) => setSubject(text.target.value)} name="subject" className="form-control" placeholder="add subject" style={{width:'60%'}}required/>
        </div>

        <div className='' style={{justifyContent:'space-between',marginTop:20,marginRight:'20%'}}>
                <label style={{}}>Area</label>
                <br/>
              <select required onChange={(text) => setArea(text.target.value)} className="" style={{width:'60%',border:'1px solid #cfd1cf',color:'#757575',height:38,borderRadius:5}}>
                            <option value="">Select the area</option>
                            <option value="Murder">Murder</option>
                            <option value="Land">Land</option>
                            <option value="Finance">Finance</option>
                        </select>
                 </div>


                 <div className='' style={{justifyContent:'space-between',marginTop:20,marginRight:'20%'}}>
                <label style={{}}>Firm</label>
                <br/>
              <select required onChange={(text) => setFirm(text.target.value)} className="" style={{width:'60%',border:'1px solid #cfd1cf',color:'#757575',height:38,borderRadius:5}}>
                            <option value="">Select the firm</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                 </div>

                 <div className='' style={{justifyContent:'space-between',marginTop:20,marginRight:'20%'}}>
                <label style={{}}>Client</label>
                <br/>
              <select required onChange={(text) => setClient(text.target.value)} className="" style={{width:'60%',border:'1px solid #cfd1cf',color:'#757575',height:38,borderRadius:5}}>
                            <option value="">Select the client</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                 </div>

                 <div className='flex flex-row form-group' style={{justifyContent:'space-between',marginTop:20,marginRight:'20%'}}>

         <label className="" style={{}}>Proof</label>
                
            <input type="file" onChange={(text) => {setProof(text.target.files[0])}} name="proof" className="form-control" placeholder="add subject" style={{width:'60%'}}required/>
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
}}>Submit case</button>

</form>
     </div>
    </>
  );
};

export default AddCase;
