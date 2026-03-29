import React from 'react';
import "./product.css";

export function ProfileTab() {
  const user = {
    name: "Manas Kumar",
    role: "Founder & CEO",
    email: "manas.kumar@newbornnest.com",
    memberID: "NX-2026-001",
    points: "4,850",
    credits: "₹1,200.00"
  };

  return (
    <div className="container" style={{ marginTop: "120px", marginBottom: "100px", fontFamily: "'Inter', sans-serif" }}>
      
      {/* HEADER SECTION: Premium Branding */}
      <div className="row g-4 mb-4 mb-md-5">
        <div className="col-lg-8 col-12">
          <div className="p-4 p-md-5 rounded-5 shadow-sm border-0 position-relative overflow-hidden text-white h-100" 
               style={{ background: "linear-gradient(135deg, #198754 0%, #0a4d2e 100%)", minHeight: "220px" }}>
            
            {/* Abstract Background Shapes */}
            <div className="position-absolute bg-white opacity-10 rounded-circle d-none d-md-block" style={{ width: "300px", height: "300px", top: "-100px", right: "-100px" }}></div>
            <div className="position-absolute bg-warning opacity-25 rounded-circle" style={{ width: "150px", height: "150px", bottom: "-50px", left: "-50px" }}></div>

            <div className="position-relative z-1 d-flex flex-column flex-md-row align-items-center h-100 text-center text-md-start">
              <img 
                src={`https://ui-avatars.com/api/?name=Manas+Kumar&background=fff&color=198754&size=200&bold=true`} 
                alt="Manas" 
                className="rounded-circle border border-4 border-white shadow-lg mb-3 mb-md-0"
                style={{ width: "120px", height: "120px" }}
              />
              <div className="ms-md-4">
                <span className="badge bg-warning text-dark mb-2 fw-bold px-3">NEST ELITE MEMBER</span>
                <h1 className="fw-bold mb-1 display-6 display-md-5">{user.name}</h1>
                <p className="opacity-75 mb-0 small small-md-5 text-truncate w-100" style={{maxWidth: '280px', margin: '0 auto'}}>
                  <i className="fa-solid fa-envelope-open me-2"></i>{user.email}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* NEST WALLET CARD (Fintech Look) */}
        <div className="col-lg-4 col-12">
          <div className="card h-100 border-0 shadow-lg rounded-5 bg-dark text-white p-4 d-flex flex-column justify-content-between border-top border-4 border-warning mx-auto" style={{maxWidth: '400px', minHeight: '220px'}}>
            <div className="d-flex justify-content-between align-items-start">
              <i className="fa-solid fa-braille fs-3 text-warning"></i>
              <span className="small opacity-50 fw-bold">NEST PAY</span>
            </div>
            <div className="my-3 my-md-4">
              <p className="small opacity-50 mb-1">Available Credits</p>
              <h2 className="fw-bold display-6">{user.credits}</h2>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <p className="extra-small opacity-50 mb-0" style={{fontSize: '0.6rem'}}>CARD HOLDER</p>
                <p className="small fw-bold mb-0">MANAS KUMAR</p>
              </div>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png" width="35" alt="mastercard" />
            </div>
          </div>
        </div>
      </div>

      {/* BENTO GRID CONTENT */}
      <div className="row g-3 g-md-4">
        
        {/* STATS BENTO - 2 Columns on Mobile */}
        <div className="col-6 col-md-3">
          <div className="card border-0 shadow-sm rounded-5 p-3 p-md-4 bg-white text-center h-100 transition-up">
            <div className="bg-success-subtle text-success p-2 p-md-3 rounded-4 d-inline-block mb-2 mb-md-3">
              <i className="fa-solid fa-bolt fs-4 fs-md-3"></i>
            </div>
            <h3 className="fw-bold mb-1">24</h3>
            <p className="text-muted extra-small mb-0 fw-bold">FAST TRACK</p>
          </div>
        </div>

        <div className="col-6 col-md-3">
          <div className="card border-0 shadow-sm rounded-5 p-3 p-md-4 bg-white text-center h-100 transition-up">
            <div className="bg-warning-subtle text-warning p-2 p-md-3 rounded-4 d-inline-block mb-2 mb-md-3">
              <i className="fa-solid fa-crown fs-4 fs-md-3"></i>
            </div>
            <h3 className="fw-bold mb-1">{user.points}</h3>
            <p className="text-muted extra-small mb-0 fw-bold">REWARD POINTS</p>
          </div>
        </div>

        {/* QUICK ACTIONS BENTO - Full width on mobile */}
        <div className="col-12 col-md-6">
          <div className="card border-0 shadow-sm rounded-5 p-4 bg-white h-100">
            <h6 className="fw-bold mb-3">Quick Shortcuts</h6>
            <div className="row g-2">
              {[
                { n: "Orders", i: "fa-box", c: "btn-outline-primary" },
                { n: "Security", i: "fa-lock", c: "btn-outline-dark" },
                { n: "Help", i: "fa-life-ring", c: "btn-outline-info" },
                { n: "Vouchers", i: "fa-ticket", c: "btn-outline-warning" }
              ].map((btn, idx) => (
                <div className="col-6" key={idx}>
                  <button className={`btn ${btn.c} w-100 py-2 py-md-3 rounded-4 fw-bold border-2 d-flex align-items-center justify-content-center gap-2 small`}>
                    <i className={`fa-solid ${btn.i}`}></i> {btn.n}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* LARGE SETTINGS SECTION */}
        <div className="col-12">
          <div className="card border-0 shadow-sm rounded-5 p-4 p-md-5 bg-white">
            <div className="row align-items-center mb-4 mb-md-5 text-center text-md-start">
               <div className="col-md-6 mb-3 mb-md-0">
                 <h4 className="fw-bold m-0 text-dark">Personalized Experience</h4>
                 <p className="text-muted small">Manage your preferences and delivery settings</p>
               </div>
               <div className="col-md-6 text-md-end">
                 <button className="btn btn-success px-4 px-md-5 py-2 py-md-3 rounded-pill fw-bold shadow w-100 w-md-auto">
                   <i className="fa-solid fa-pen-nib me-2"></i>Update Preferences
                 </button>
               </div>
            </div>

            <div className="row g-3">
               {[
                 { t: "Shipping Address", d: "123, Tech Park Towers, Gwalior", i: "fa-map-pin" },
                 { t: "Payment Sync", d: "Mastercard **** 4242", i: "fa-sync" },
                 { t: "Notification", d: "Active: Email, SMS, WhatsApp", i: "fa-bell" }
               ].map((pref, idx) => (
                 <div className="col-12 col-md-4" key={idx}>
                    <div className="p-3 p-md-4 border-0 rounded-5 bg-light h-100">
                       <i className={`fa-solid ${pref.i} text-success mb-2 mb-md-3 fs-5`}></i>
                       <h6 className="fw-bold text-dark mb-1">{pref.t}</h6>
                       <p className="text-muted extra-small mb-0">{pref.d}</p>
                    </div>
                 </div>
               ))}
            </div>
          </div>
        </div>

      </div>

      {/* FOOTER ACTION */}
      <div className="text-center mt-5">
        <p className="text-muted extra-small mb-3 italic opacity-75">"Building the future of childcare essentials, one line of code at a time."</p>
        <button className="btn btn-outline-danger fw-bold rounded-pill px-4 py-2 border-2 small shadow-sm">
          Sign Out of Manas Kumar’s Session
        </button>
      </div>
    </div>
  );
}