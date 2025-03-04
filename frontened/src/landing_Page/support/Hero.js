import React from "react";
function Hero() {
  return (
    <>
      <section className="container-fluid" id="supportHero">
        <div className="p-3 " id="supportWrapper">
            <h4>Support Portal</h4>
            <a href="">Track Ticket</a>
        </div>
        <div className="row p-5  ms-5">
            <div className="col-6 ">
                <h3 className="mb-3 fs-4">Search for an answer or browse help topics to create a <br/>ticket</h3>
                <input  className="mb-3" style={{width:"67%" ,height:"30%"}} placeholder="Eg:how do I activate F&O ,where i get my order"/><br/>
                <a href="">Track account opening</a> &nbsp; &nbsp; 
                <a href="">Track segment activation</a> &nbsp; &nbsp;              
                <a href="">Intraday margins</a>&nbsp;  &nbsp; 
                <a href="">Kite user manual</a>
            </div>
            <div className="col-6 p-3">
                <h3 className="mb-3 fs-4">Feautured</h3>
                <ol>
                    <li><a href="" className="mb-4 fs-5">Surveillance measure on scrips - February 2025</a><br/></li>
                    <li><a href="" className="mt-4 fs-5">Current Takeovers and Delisting - February 2025</a></li>
                </ol>
                
                
            </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
