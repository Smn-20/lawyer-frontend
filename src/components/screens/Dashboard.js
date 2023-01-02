import React, {useEffect, useState} from 'react'

export const Dashboard = () => {
    const [lawyers,setLawyers]=useState(0)
    const [firms,setFirms]=useState(0)
   

  return (
      <div className='row' style={{marginTop:100,padding:20}}>
            <div className='col-md-12'>

                <div className='row' style={{marginBottom:20,marginLeft:5}}>
                    <div className='col-md-3'>
                      <div  style={{background:'white',borderRadius:5,padding:10}}>
                        <div className='row'>
                            <div className='col-md-9'>
                                <p style={{fontSize:18,color:'#757575'}}>Lawyers</p>
                            </div>
                            <div className='col-md-3'>
                                <i className='fa fa-users fa-2x' style={{color:"#FCC344"}}></i>
                            </div>
                        </div>
                        <p style={{margin:'0px 5px 5px 5px',fontSize:24,fontWeight:'bold'}}>{lawyers}</p>
                      </div>
                    </div>
                    <div className='col-md-3'>
                      <div  style={{background:'white',borderRadius:5,padding:10}}>
                        <div className='row'>
                            <div className='col-md-9'>
                                <p style={{fontSize:18,color:'#757575'}}>Firms</p>
                            </div>
                            <div className='col-md-3'>
                                <i className='fa fa-user-plus fa-2x' style={{color:"#FCC344"}}></i>
                            </div>
                        </div>
                        <p style={{margin:'0px 5px 5px 5px',fontSize:24,fontWeight:'bold'}}>{firms}</p>
                      </div>
                    </div>
                    <div className='col-md-3'>
                      <div  style={{background:'white',borderRadius:5,padding:10}}>
                        <div className='row'>
                            <div className='col-md-9'>
                                <p style={{fontSize:18,color:'#757575'}}>Unsolved Cases</p>
                            </div>
                            <div className='col-md-3'>
                                <i className='fa fa-comment fa-2x' style={{color:"#FCC344"}}></i>
                            </div>
                        </div>
                        <p style={{margin:'0px 5px 5px 5px',fontSize:24,fontWeight:'bold'}}>2.9k</p>
                      </div>
                    </div>
                    <div className='col-md-3'>
                      <div  style={{background:'white',borderRadius:5,padding:10}}>
                        <div className='row'>
                            <div className='col-md-9'>
                                <p style={{fontSize:18,color:'#757575'}}>Solved Cases</p>
                            </div>
                            <div className='col-md-3'>
                                <i className='fa fa-check-square fa-2x' style={{color:"#FCC344"}}></i>
                            </div>
                        </div>
                        <p style={{margin:'0px 5px 5px 5px',fontSize:24,fontWeight:'bold'}}>9.5k</p>
                      </div>
                    </div>
                </div>


               

                

                

               

                

            </div>

           
      </div>
  )
}
