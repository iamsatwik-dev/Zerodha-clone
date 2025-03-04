import React from 'react';
function LeftSection({imageURL,productName,productDescription,tryDemo,learnMore,googlePlay,appStore}) {
    return ( 
        <>
        <div className='container mt-5 '>
            <div className='row '>
                <div className='col-5 p-3 mt-5 leftMain'>
                    <img src={imageURL}></img>
                </div>
                <div className='col-2'></div>
                <div className='col-4 mt-5 '>
                    <h1 className='mt-5'>{productName}</h1>
                    <p className='mt-3 fs-5'>{productDescription}</p>
                    <div className=''>
                    <a href={tryDemo} style={{textDecoration:"none"}}>Try demo <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    <a href={tryDemo} style={{marginLeft:"50px",textDecoration:"none"}}>Learn more <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    </div>
                    <div className='mt-4'>
                    <a href={tryDemo} style={{textDecoration:"none"}}><img src="media\images\googlePlayBadge.svg"></img></a>
                    <a href={tryDemo} style={{marginLeft:"50px",textDecoration:"none"}}><img src="media\images\appstoreBadge.svg"></img></a>
                    </div>
                    
                    
                    

                </div>
            </div>
        </div>
       </>
     );
}

export default LeftSection;