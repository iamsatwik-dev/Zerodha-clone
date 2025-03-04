import React from 'react';
function Hero() {
    return ( <>
    <div className="container  mb-5 border-bottom ">
        <div className='row text-center mt-5 '>
            <h1 >Zerodha Products</h1>
            <h4 className='text-muted mt-3'>Sleek, modern, and intuitive trading platforms</h4>
            <p className='text-muted mt-3 mb-5'>Check out our <a href='#' style={{textDecoration:"none"}}> investment offerings<i class="fa fa-long-arrow-right" aria-hidden="true"></i> </a></p>
        </div>
    </div>
    </> );
}

export default Hero;