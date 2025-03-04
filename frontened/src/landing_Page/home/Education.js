import React from 'react';
function Education() {
    return ( 
        <>
         <div className='container mt-5 mb-5'>
            <div className='row'>
                <div className='col-6'>
                    <img src='media/images/education.svg'></img>
                </div>
                <div className='col-6' style={{textDecoration:"none"}}>
                    <h2 className='mb-4'>Free and open market education</h2>
                    <p className='mb-4'>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                    <a href='#' >Varsity<i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    <p className='mb-4 mt-5'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                    <a href='#'>TradingQ&A<i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                </div>
            </div>
         </div>
        </>
     );
}

export default Education;