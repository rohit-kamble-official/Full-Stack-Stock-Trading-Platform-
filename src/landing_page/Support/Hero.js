import React from "react";

function Hero() {
  return (
    <section className="container-fluid bg-light" id="supportHero">
      <div
        className="p-5 text-center text-white"
        id="supportWrapper"
        style={{ backgroundColor: "#007bff", borderRadius: "12px" }}
      >
        <h4 className="fw-bold">Support Portal</h4>
        <a href="" className="btn btn-outline-light mt-2">
          Track Tickets
        </a>
      </div>

      <div className="row p-5 m-3 bg-white shadow rounded">
        <div className="col-6 p-3">
          <h1 className="fs-4 mb-4">
            Search for an answer or browse help topics to create a ticket
          </h1>
          <input
            placeholder="Eg. how do I activate F&O"
            className="form-control mb-3"
          />
          <div className="d-flex flex-column">
            <a href="" className="text-primary mb-2">
              Track account opening
            </a>
            <a href="" className="text-primary mb-2">
              Track segment activation
            </a>
            <a href="" className="text-primary mb-2">
              Intraday margins
            </a>
            <a href="" className="text-primary mb-2">
              Kite user manual
            </a>
          </div>
        </div>

        <div className="col-6 p-3">
          <h1 className="fs-4 mb-4">Featured</h1>
          <ol className="list-group list-group-numbered">
            <li className="list-group-item">
              <a href="">Current Takeovers and Delisting - January 2024</a>
            </li>
            <li className="list-group-item">
              <a href="">Latest Intraday leverages - MIS & CO</a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
