import React from "react";
function Universe() {
  return (
    <>
      <div className="container Universe">
        <div className="row text-center p-4 ">
          <h1 className="mt-5">The Zerodha Universe</h1>
          <p className="text-muted mt-3">
            Extend your trading and investment experience even further with our
            partner platforms
          </p>
          <div className="col-4  text-muted mt-5">
            <a href="#" className="fundImage">
              <img src="media\images\zerodhaFundhouse.png"></img>
              <p>
                Our asset management venture <br /> that is creating simple and
                transparent index
                <br />
                funds to help you save for your goals.
              </p>
            </a>
            <a href="#" className="streakLogo ">
              <img src="media\images\streakLogo.png"></img>
              <p>
                Systematic trading platform <br />
                that allows you to create and backtest <br />
                strategies without coding.
              </p>
            </a>
          </div>
          <div className="col-4 mt-5">
            <a href="#" className="sensiBull mt-4">
              <img src="media\images\sensibullLogo.svg"></img>
              <p>
                options trading platform that lets you <br />
                create strategies, analyze positions, and examine <br />
                data points like open interest,Fll/Dll and more
              </p>
            </a>
            <a href="" className="smallcaseLogo mt-4">
              <img src="media\images\smallcaseLogo.png"></img>
              <p>
                Thematic investing platform <br />
                that helps you invest in diversified <br />
                baskets of stocks on ETFs.
              </p>
            </a>
          </div>
          <div className="col-4 mt-5">
            <a href="#" className="tijori mt-4">
              <img src="media\images\tijori.svg"></img>
              <p>
                Investment research platform <br />
                that offers detailed insights on stocks, <br />
                sectors, supply chains, and more.
                <br />
              </p>
            </a>
            <a href="#" className="dittoLogo mt-4">
              <img src="media\images\dittoLogo.png"></img>
              <p>
                Personalized advice on life <br />
                and health insurance. No spam <br />
                and no mis-selling.
                <br />
              </p>
            </a>
          </div>
          <button
            className="p-2 btn btn-primary mb-5 mt-5 "
            style={{ width: "20%", margin: "0 auto" }}
          >
            Sign up for Free
          </button>
        </div>
      </div>
    </>
  );
}

export default Universe;
