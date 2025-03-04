import React from 'react';
function RightSection({imageURL,productName,productDescription,learnMore}) {
    return ( 
   <>
   <div className='container mt-5 '>
            <div className='row '>
                <div className='col-4 p-3 mt-5 leftMain'>
                    <h1 className='mt-5 '>{productName}</h1>
                    <p className='mt-3 fs-5'>{productDescription}</p>
                    <div className=''>
                    
                    <a href={learnMore} style={{textDecoration:"none"}}>Learn more <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    </div>
                    
                </div>
                <div className='col-2'></div>
                <div className='col-5 mt-3 '>
                <img src={imageURL}></img>
                    
                    
                    </div>
                    
                    
                    

                </div>
            </div>
        
      </>  );
}

export default RightSection;