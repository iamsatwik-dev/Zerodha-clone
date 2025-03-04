import React from 'react';
function Brokerage() {
    return (
        <>
        <div className='container border-top'>
            <div className='row text-center'>
                <div className='col-8 p-4 '>
                    <a href='#' style={{textDecoration:"none"}} ><h1 className='fs-5'>Brokerage calculator</h1></a>
                    <ul style={{textAlign:'left', lineHeight:"1.8rem"}} className='text-muted mt-4  '>
                        <li>Call & trade and RMS auto-squareoff: Additional charges of &#8377;50 + GST per order.</li>
                        <li>Digital contract notes will be sent via e-mail.</li>
                        <li>Physical copies of contract notes,if required,shall be charged &#8377;20 per contarct note.Courier charges apply.</li>
                        <li>For NRI account(non-PIS), 0.5%or &#8377;100 per executedorder for  equity(whichever is lower).</li>
                        <li>For NRI account(non-PIS), 0.5%or &#8377;200 per executedorder for equity(whichever is lower).</li>
                        <li>If the account is in debit balance, any order placed will be charged &#8377;40 per executed order instead of &#8377;20 per executed order. </li>
                    </ul>
                </div>
                <div className='col-4 p-4 '>
                <a href='#' style={{textDecoration:"none"}}><h1 className='fs-5'>List of charges</h1></a>
                </div>
            </div>
        </div>
        </>
      );
}

export default Brokerage;