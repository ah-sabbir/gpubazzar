import React from "react";
const Head = () => {
  return (
    <>
      <section className="head">
        <div className="container d_flex">
          <div className="row">
            <div className="col-md-6">
              <label>
                <i className="fa fa-phone"></i>
                +88012 3456 7894
              </label>
              <label>
                <i className="fa fa-envelope"></i>
                support@gpu-bazzar.com
              </label>
            </div>
            <div className="col-md-6">
              <label>Need Help?</label>
              <span></span>
              <label>EN</label>
              <span>🇧🇩</span>
              <label>BN</label>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Head;
