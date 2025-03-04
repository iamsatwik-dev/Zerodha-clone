import React from 'react';
import { useState } from "react";
function signup() {
    
    return (
 <>
    <div className='container border-bottom mb-5 '>
        <div className='row'>
            <div className='col-12 text-center'>
            <h1>Open a free demat and trading account online</h1>
            <h3 className='text-muted'>Start investing brokerage free and join a community of 1.5+ crore investors and traders</h3>
            </div>
            
        </div>
        <div className='row'>
        <div className='col-6 p-5'>
            <img className='mb-5' src='media\images\account_open.svg'></img>
        </div>
        <div className='col-6'>
            <h2>Signup now</h2><br/>
            <p>Or track your existing application</p>
            <label>Phone Number:</label>
          <form action="http://localhost:3001/">
          <input className='mt-3'
           type="tel"
           placeholder="Enter phone number"
        
         /> <br/>
         <label  className='mt-3'>Password:</label> <br/>
         <input
         className='mt-3'
        type="text"
        placeholder="enter Pasword"
        
         />
         <br/>
         <button  className="p-2 btn btn-primary mb-5 mt-4" style={{width:"20%" , margin:"0 auto"}}>Continue</button>
          </form>
        </div>
        </div>
    </div>
    </>  );
}

export default signup;