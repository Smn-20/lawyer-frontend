import React from 'react'
import './Menu.css'
import { connect } from 'react-redux';
import profile from '../../images/user.png'
import { Outlet } from 'react-router-dom'
import { logout } from '../../store/actions/auth'; 
import { Link } from 'react-router-dom';
const Menu = (props) => {

  const handleLogout = () => {
    props.logout()
    window.location.reload();
  }

  const [open,setOpen]=React.useState(true)
  const openMenu=()=>{
    setOpen(!open)
  }
  return (
      <>
    <div>
        <div class={`sidebar ${open?"open":""}`}>
    <div class="logo-details">
      <i></i>
        <div class="logo_name">Dashboard</div>
        <i class='bx bx-menu' onClick={openMenu} id="btn"></i>
    </div>
    <ul class="nav-list" style={{paddingLeft:0}}>
     {/* <li>
          <i class='bx bx-search' ></i>
         <input type="text" placeholder="Search...">
         <span class="tooltip">Search</span>
      </li>  */}
     
      <li>
       <Link to='./dashboard'>
         <i class='bx bx-home' ></i>
         <span class="links_name">Dashboard</span>
       </Link>
       <span class="tooltip">Dashboard</span>
     </li>
     <li>
       <Link to='./my_cases'>
         <i class='bx bx-printer' ></i>
         <span class="links_name">My Cases</span>
       </Link>
       <span class="tooltip">My cases</span>
     </li>
     <li>
       <Link to='./cases'>
         <i class='bx bx-printer' ></i>
         <span class="links_name">Cases</span>
       </Link>
       <span class="tooltip">Cases</span>
     </li>
     <li>
       <Link to='./firms'>
         <i class='bx bx-building-house' ></i>
         <span class="links_name">Firms</span>
       </Link>
       <span class="tooltip">Firms</span>
     </li>
      <li>
       <Link to='./lawyers'>
         <i class='bx bx-user' ></i>
         <span class="links_name">Lawyers</span>
       </Link>
       <span class="tooltip">Lawyers</span>
     </li>
     <li>
       <Link to='./clients'>
         <i class='bx bx-book' ></i>
         <span class="links_name">Clients</span>
       </Link>
       <span class="tooltip">Clients</span>
     </li>
     {/* <li>
     <Link to="./chats">
         <i class='bx bx-chat' style={{color:"#FCC344"}} ></i>
         <span class="links_name" style={{color:"#FCC344"}}>Chats</span>
         <div class="links_name" style={{marginLeft:80,padding: 4,backgroundColor: "#FCC344",borderRadius: 5,height:24}}> <p style={{fontSize:12,color:"black",fontWeight:'bold'}}>45</p> </div>
       </Link>
       <span class="tooltip" style={{color:"#FCC344"}}>Chats</span>
     </li> */}
     <li>
       <a href="#">
         <i class='bx bx-cog' ></i>
         <span class="links_name">Settings</span>
       </a>
       <span class="tooltip">Settings</span>
     </li>
     {/* <li class="profile">
         <div class="profile-details">
           <img src="profile.jpg" alt="profileImg">
           <div class="name_job">
             <div class="name">Prem Shahi</div>
             <div class="job">Web designer</div>
           </div>
         </div>
         <i class='bx bx-log-out' id="log_out" ></i>
     </li>  */}
    </ul>
  </div>
  <section class="home-section" style={{background:'#ededeb',paddingTop:0.1}}>
    <div className='header_width' style={{position:'fixed',background:'#ededeb'}}>
    <div className='row justify-content-end' style={{borderBottom:'0.1px solid #b8b8b4',marginTop:15,marginBottom:5}}>
      <div className='col-md-4' style={{border:'2px solid #FCC344',borderRadius:21,height:48,width:48,padding:2}}>
      <img src={profile} style={{width:40,height:40,borderRadius:20}}/>
      </div>
      <div className='col-md-2'>
        <p style={{marginLeft:10,fontWeight:'bold',fontSize:14}}>Brian KAMANZI</p>
        <p style={{marginLeft:10,fontSize:12,marginTop:0,color:'grey'}}>Emizi Firm Administrator</p>
      </div>
      <div className='col-md-4' style={{marginLeft:30,marginRight:30,height:30,textAlign:'center',paddingTop:3,width:30,borderRadius:15,marginTop:5}}>
        <a onClick={handleLogout}>
        <i className="fa fa-power-off" style={{color:'red'}}></i>
        </a>
      </div>
    </div>
    </div>

      <Outlet/>
  </section>
    </div>
   
    </>
  )
}

export default connect(null, { logout })(Menu);