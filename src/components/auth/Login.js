import React,{useState} from 'react'
import { connect } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import { authLogin } from '../../store/actions/auth';
import { Navigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Login = ({authLogin,isAuthenticated,role}) => {
  const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [loading, setloading] = useState(false)
    const { email, password } = formData;
    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });
  const onSubmit = async e => {
    setloading(true)
    e.preventDefault();
    authLogin(email, password);

  }
  if (isAuthenticated) {
      return <Navigate replace to="/app/dashboard" />
}

  return (
    <>
    
    <div class="card shadow mx-auto" style={{width: '360px',border:'none',height: '360px',top:'160px',borderradius: '4px'
}}>
      
  <div class="card-body">
  
    <Link to="/" style={{textDecoration:'none'}}>
    <h7 class="card-title pl-[10px] text-[#FCC344] u-none">Welcome back!<i className="fa-solid fa-hand-wave" style={{color:'yellow',marginLeft:2,marginRight:2}}></i></h7><br/>
    </Link>
    <h6 class="card-title font-bold pl-[10px] text-[19px] pt-[10px]">Sign in to your Account</h6>
              <form onSubmit={e => onSubmit(e)} className="pl-[10px] pr-[10px] pt-[12px]">       
                Username<label class="control-label"/>
                <input type="text" onChange={e => onChange(e)} name="email" id="username" className="form-control"  required />
                Password<label class="control-label"/>
                <input type="password" onChange={e => onChange(e)} name="password" id="password" className="form-control" required/><br/>
                <button class="btn btn-primary" style={{background:'#FCC344',border:'none',justifycontent:'center',width:330,position:'absolute',height:'45px',}}>CONTINUE</button>

</form>
<br/>
<div style={{margin:'15%',fontWeight:'bold'}}>
<p>New to SureLaw ?<Link to="../register" style={{color:'#FCC344'}}>Join Now</Link></p>
</div>
  </div>
</div>

</>
  )
}

export default connect(null, { authLogin })(Login);