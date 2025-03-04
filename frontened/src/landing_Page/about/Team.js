import React from 'react';
function Team() {
    return ( <>
    <div className='container mb-5'>
            <div className='row  mb-3'>
                <h1 className='  text-center'>
                People
                </h1>
            </div>
            <div className='row p-2 text-muted '>
                <div className='about col-5 text-center '>
                    <img src='media\images\nithinKamath.jpg'></img>
                    <h5 className='mt-2'>Nithin Kamath</h5>
                    <p >Founder, CEO</p>
                   
                </div>
                <div className='about col-5 mt-4 p-2'>
                    <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
                    <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
                    <p>Playing basketball is his zen.</p>
                    <p>Connect on <a href='#'>Homepage</a>/<a href='#'>TadingQ&A</a>/<a href='#'>Twitter</a></p>
                </div>

            </div>
        </div>
    </> );
}

export default Team;