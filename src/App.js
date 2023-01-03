import React,{ Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { connect } from 'react-redux';
import PrivateRoute from './PrivateRoute';
import  Login  from './components/auth/Login';
import * as actions from './store/actions/auth';
import { Dashboard } from './components/screens/Dashboard';
import Menu from './components/layout/Menu';
import { Lawyers } from './components/screens/Lawyers';
import AddLawyer from './components/screens/AddLawyer';
import { Firms } from './components/screens/Firms';
import AddFirm from './components/screens/AddFirm';
import Register from './components/auth/Register';
import { MyCases } from './components/screens/MyCases';
import { Cases } from './components/screens/Cases';
import { Clients } from './components/screens/Clients';
import AddCase from './components/screens/AddCase';
class App extends React.Component {

  componentDidMount() {
    this.props.onTryAutoSignup();
  }

  render() {
  return (
    <div className="App">
    <Router>
      <Routes>
        
        <Route exact path='/login' element={<Login {...this.props}/>} />
        <Route exact path='/register' element={<Register {...this.props}/>} />
        

        
         <Route element={<PrivateRoute/>}>

        <Route path='/app' element={<Menu {...this.props}/>}>
          <Route path='dashboard' element={<Dashboard/>}/>
          <Route path='lawyers' element={<Lawyers/>}/>
          <Route path='clients' element={<Clients/>}/>
          <Route path='add_lawyer' element={<AddLawyer/>}/>
          <Route path='add_firm' element={<AddFirm/>}/>
          <Route path='my_cases' element={<MyCases/>}/>
          <Route path='cases' element={<Cases/>}/>
          <Route path='add_case' element={<AddCase/>}/>
          <Route path='firms' element={<Firms/>}/>
        </Route> 

        </Route> 

        
        
      </Routes>
    </Router>
  </div>
    
  )
}
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.token !== null,
    role: state.role
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);