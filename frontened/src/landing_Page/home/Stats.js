import React from "react";
function Stats() {
  return (
    <>
      <div className="Container mb-5">
        <div className="row">
          <div className="col-6">
            <h2 className="text-center">Trust with confidence</h2>
            <div className="mt-5" style={{marginLeft:"320px"}}>
              <h4 className="mb-2" >Customer-first always</h4>
            <p>
              That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh
              crores of equity investments and contribute to 15% of daily retail
              exchange volumes in India.
            </p>
            <h4 className="mt-5">No spam or gimmicks</h4>
            <p>
              No gimmicks, spam, "gamification", or annoying push notifications.
              High quality apps that you use at your pace, the way you like.
            </p>
            <h4 className="mt-5">The Zerodha universe</h4>
            <p>
              Not just an app, but a whole ecosystem. Our investments in 30+
              fintech startups offer you tailored services specific to your
              needs.
            </p>
            <h4 className="mt-5">Do better with money</h4>
            <p>
              With initiatives like Nudge and Kill Switch, we don't just
              facilitate transactions, but actively help you do better with your
              money.
            </p>

            </div>
            <div className="links text-center mt-5" style={{textDecoration:"none"}}>
                <a href="#">Explore Our Product<i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                <a href="#">Try kit demo<i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
            </div>
       
          </div>
          <div className="col-6">
            <img
              src="media/images/largestBroker.png"
              style={{ width: "75%", height: "100%" }}
            ></img>
            
          </div>
          <img
            src="media/images/pressLogos.png"
            style={{ width: "50%", height: "50%", margin: "0px auto",marginTop:"40px" }}
          ></img>
        </div>
      </div>
    </>
  );
}

export default Stats;
