import React from 'react';
function Hero() {
    return ( 
        <>
        <div className='container Pricing border-bottom '>
            <div className='row'>
                <div className='text-center mt-5 border-bottom p-5'>
                    <h1>Pricing</h1>
                    <p className='mt-4'>Free equity investments and flat &#8377;20 and traday and F&O trades</p>
                </div>
               <div className='row p-5'>
               <div className='col-4 text-center p-5'>
                    <img src='media\images\pricing0.svg'></img>
                    <h1 className='fs-3'>Free equity delivery</h1>
                    <p className='text-muted mt-3'>All equity delivery investments (NSE,BSE),<br/> are absolutely free-&#8377; 0 brokerage.</p>
                </div>
                <div className='col-4 text-center p-5'>
                <img src='media\images\pricing20.svg'></img>
                <h1 className='fs-3'>Intraday and F&O trades</h1>
                 <p className='text-muted mt-3'>Flat Rs.20 or 0.03% (whichever is lower) <br/>per executed order on intraday trades<br/> across equity,currency,and commodity<br/> trades.</p>
                </div>
                <div className='col-4 p-5 text-center'>
                <img src='media\images\pricing0.svg'></img>
                <h1 className='fs-3'>Free direct MF</h1>
                <p className='text-muted mt-3'>all direct mutual fund investments are absolutely <br/> free-&#8377;0 commissions & DP charges. </p>
                </div>
               </div>
            </div>
        </div>
        </>
     );
}

export default Hero;