import React from "react";

function Footer() {
  return (
    <footer style={{ backgroundColor: "#222", color: "#ccc", paddingTop: "40px", paddingBottom: "20px" }}>
      <div className="container border-top pt-5" style={{ borderColor: "#444" }}>
        
        {/* Main Footer Content */}
        <div className="row gy-4">
          
          {/* Logo & Copyright */}
          <div className="col-md-3">
            <img src="media/images/logo.svg" style={{ width: "120px", marginBottom: "20px", filter: "invert(1)" }} alt="Logo" />
            <p style={{ fontSize: "14px", color: "#888" }}>
              © 2010 - 2024, Not Zerodha Broking Ltd. All rights reserved.
            </p>
          </div>

          {/* Company Links */}
          <div className="col-md-3">
            <p className="fw-bold mb-3 text-white">Company</p>
            <div className="d-flex flex-column gap-2">
              <a href="#" style={{ color: "#ccc", textDecoration: "none" }}>About</a>
              <a href="#" style={{ color: "#ccc", textDecoration: "none" }}>Products</a>
              <a href="#" style={{ color: "#ccc", textDecoration: "none" }}>Pricing</a>
              <a href="#" style={{ color: "#ccc", textDecoration: "none" }}>Referral programme</a>
              <a href="#" style={{ color: "#ccc", textDecoration: "none" }}>Careers</a>
              <a href="#" style={{ color: "#ccc", textDecoration: "none" }}>Zerodha.tech</a>
              <a href="#" style={{ color: "#ccc", textDecoration: "none" }}>Press & media</a>
              <a href="#" style={{ color: "#ccc", textDecoration: "none" }}>Zerodha cares (CSR)</a>
            </div>
          </div>

          {/* Support Links */}
          <div className="col-md-3">
            <p className="fw-bold mb-3 text-white">Support</p>
            <div className="d-flex flex-column gap-2">
              <a href="#" style={{ color: "#ccc", textDecoration: "none" }}>Contact</a>
              <a href="#" style={{ color: "#ccc", textDecoration: "none" }}>Support portal</a>
              <a href="#" style={{ color: "#ccc", textDecoration: "none" }}>Z-Connect blog</a>
              <a href="#" style={{ color: "#ccc", textDecoration: "none" }}>List of charges</a>
              <a href="#" style={{ color: "#ccc", textDecoration: "none" }}>Downloads & resources</a>
            </div>
          </div>

          {/* Account Links */}
          <div className="col-md-3">
            <p className="fw-bold mb-3 text-white">Account</p>
            <div className="d-flex flex-column gap-2">
              <a href="#" style={{ color: "#ccc", textDecoration: "none" }}>Open an account</a>
              <a href="#" style={{ color: "#ccc", textDecoration: "none" }}>Fund transfer</a>
              <a href="#" style={{ color: "#ccc", textDecoration: "none" }}>60 day challenge</a>
            </div>
          </div>
        </div>

        {/* Legal & Info Section */}
        <div className="mt-5" style={{ fontSize: "12px", lineHeight: "1.7", color: "#888" }}>
          <p>
            Zerodha Broking Ltd.: Member of NSE​ &​ BSE – SEBI Registration no.:
            INZ000031633 CDSL: Depository services through Zerodha Securities
            Pvt. Ltd. – SEBI Registration no.: IN-DP-100-2015 Commodity Trading
            through Zerodha Commodities Pvt. Ltd. MCX: 46025 – SEBI Registration
            no.: INZ000038238 Registered Address: Zerodha Broking Ltd.,
            #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School,
            J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India.
          </p>
          <p>
            Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF.
          </p>
          <p>
            Investments in securities market are subject to market risks; read all the related documents carefully before investing.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
