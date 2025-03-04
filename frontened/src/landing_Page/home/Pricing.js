import React from 'react';
function Pricing() {
    return (  
    <>
     <div className='container'>
        <div className='row'>
            <div className='col-6 mt-5' style={{textDecoration:"none"}}>
                <h1>Unbeatable pricing</h1>
                <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                <a href='#'>See Pricing<i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
            </div>
            <div className='col-6 mt-5 d-flex justify-content-between align-items-center'>
                <img src='media/images/pricing0.svg' style={{height:"100px"}}></img>
                <p  style={{ fontSize: "0.7rem" }}>Free account opening</p>
                <img src='media/images/pricing0.svg' style={{height:"100px"}}></img>
                <p  style={{ fontSize: "0.7rem" }}>Free equity delivery and direct mutual funds</p>
                <img src='media/images/pricing20.svg' style={{height:"100px"}}></img>
                <p  style={{ fontSize: "0.7rem" }}>Intraday and F&O</p>
            </div>
        </div>

     </div>
    </>
    );
}

export default Pricing;