import React from 'react';
function Hero() {
    return ( 
        <>
        <div className='Container p-7 mb-5'>
            <div className='row text-center'>
                <img src='media/images/homeHero.png' alt='Hero Image' className='mb-5' style={{height:"50%",width:"75%",margin:"0 auto"}}></img>
                <h1>Invest in everything</h1>
                <p>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                <button  className="p-2 btn btn-primary mb-5 mt-2" style={{width:"10%" , margin:"0 auto"}}>Sign up for Free</button>
            </div>

        </div>
        </>
     );
}

export default Hero;