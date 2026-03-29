import React from 'react';
import "./product.css";

export function OrderTab({ orderItems = [] }) {
  const today = new Date();
  const deliveryDate = new Date(today);
  deliveryDate.setDate(today.getDate() + 3);

  const totalAmount = orderItems.reduce((acc, item) => acc + (item.discountPrice * (item.quantity || 1)), 0) + 29;

  const handleFinalOrder = () => {
    alert("🎉 SUCCESS!\n\nYour order has been officially processed. \n\nThank you for shopping with NewBorn Nest.");
  };

  return (
    <div className="container" style={{ marginTop: "120px", marginBottom: "50px" }}>
      
      {/* Header Section */}
      <div className="d-md-flex align-items-center justify-content-between mb-4 px-1">
        <div className="d-flex align-items-center mb-3 mb-md-0">
          <h3 className="fw-bold m-0 text-dark fs-4 fs-md-3">Track Shipment</h3>
          <span className="badge bg-primary ms-3 px-3 py-2 small" style={{ borderRadius: "20px" }}>#NB-2026</span>
        </div>
        <p className="text-muted small mb-0"><i className="fa-solid fa-calendar-day me-1"></i> Order Date: {today.toLocaleDateString()}</p>
      </div>

      {orderItems.length === 0 ? (
        <div className="text-center py-5 shadow-sm rounded-4 bg-white border mx-1">
          <i className="fa-solid fa-box-open fa-3x text-muted mb-3 opacity-50"></i>
          <h5 className="fw-bold text-muted">No active shipments</h5>
          <button className="btn btn-success btn-sm mt-2 px-4 rounded-pill" onClick={() => window.location.href='/home'}>Start Shopping</button>
        </div>
      ) : (
        <div className="row g-4">
          
          {/* LEFT SIDE: Items & Address */}
          <div className="col-lg-7 order-2 order-lg-1">
            <div className="custom-order-scroll pe-lg-2">
              <h6 className="fw-bold text-muted mb-3 ps-1 small uppercase tracking-wider">Shipment Contents</h6>
              
              {orderItems.map((item, index) => (
                <div key={index} className="card border-0 shadow-sm rounded-4 mb-3 overflow-hidden transition-all">
                  <div className="card-body p-3">
                    <div className="d-flex align-items-center">
                      <img src={item.image} alt="" className="rounded-3 border flex-shrink-0" style={{ width: "80px", height: "100px", objectFit: "cover" }} />
                      <div className="ms-3 ms-md-4 flex-grow-1">
                        <div className="d-flex justify-content-between align-items-start">
                          <h6 className="fw-bold mb-0 text-truncate" style={{maxWidth: '150px'}}>{item.name}</h6>
                          <span className="text-success extra-small fw-bold d-none d-md-inline"><i className="fa-solid fa-circle-check me-1"></i>Verified</span>
                        </div>
                        <p className="text-muted extra-small mb-1">{item.brand}</p>
                        <p className="text-muted extra-small mb-2">Qty: {item.quantity || 1}</p>
                        <div className="d-flex align-items-center justify-content-between">
                           <h6 className="fw-bold m-0 text-primary">₹{item.discountPrice * (item.quantity || 1)}</h6>
                           <button className="btn btn-link p-0 extra-small text-decoration-none fw-bold">Details</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              
              {/* Shipping Address */}
              <div className="card border-0 shadow-sm rounded-4 mt-4 p-3 p-md-4 bg-white border-start border-4 border-primary">
                <h6 className="fw-bold mb-3 small"><i className="fa-solid fa-map-location-dot me-2 text-primary"></i> Delivery Destination</h6>
                <div className="p-3 rounded-3 bg-light-subtle border">
                    <p className="mb-1 fw-bold small">Manas Kumar</p>
                    <p className="text-muted extra-small mb-0">Flat 404, Tech Park Towers, City Center</p>
                    <p className="text-muted extra-small mb-2">Gwalior, MP - 474001</p>
                    <p className="text-dark extra-small fw-bold mb-0"><i className="fa-solid fa-phone me-1"></i> +91 911XXXXX00</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Tracking (Top on Mobile) */}
          <div className="col-lg-5 order-1 order-lg-2">
            <div className="card border-0 shadow-lg rounded-4 p-4 sticky-lg-top custom-summary-box" style={{ top: "120px", zIndex: 10 }}>
              <h5 className="fw-bold mb-4 fs-6 text-uppercase tracking-wider">Live Status</h5>
              
              {/* STEPPER */}
              <div className="position-relative ps-4 mb-4">
                <div className="position-absolute h-100 border-start border-2 border-light" style={{ left: "11px", top: "5px", zIndex: 0 }}></div>

                <div className="mb-4 position-relative">
                  <div className="position-absolute bg-success rounded-circle shadow-sm" style={{ width: "22px", height: "22px", left: "-35px", zIndex: 1, border: "4px solid #fff" }}></div>
                  <h6 className="fw-bold mb-0 small">Order Placed</h6>
                  <p className="text-muted mb-0 extra-small">Confirmed on {today.toLocaleDateString()}</p>
                </div>

                <div className="mb-4 position-relative">
                  <div className="position-absolute bg-primary rounded-circle pulse-animation shadow-sm" style={{ width: "22px", height: "22px", left: "-35px", zIndex: 1, border: "4px solid #fff" }}></div>
                  <h6 className="fw-bold mb-0 small">Shipped</h6>
                  <p className="text-muted mb-0 extra-small">Carrier: BlueDart Express</p>
                </div>

                <div className="mb-0 position-relative opacity-50">
                  <div className="position-absolute bg-secondary rounded-circle shadow-sm" style={{ width: "22px", height: "22px", left: "-35px", zIndex: 1, border: "4px solid #fff" }}></div>
                  <h6 className="fw-bold mb-0 small">Out for Delivery</h6>
                  <p className="text-success fw-bold mb-0 extra-small">ETA: {deliveryDate.toDateString()}</p>
                </div>
              </div>

              <h6 className="fw-bold mb-3 small">Payment Details</h6>
              <div className="bg-light p-3 rounded-4 mb-4 border-0 shadow-inner">
                <div className="d-flex justify-content-between mb-2">
                  <span className="extra-small text-muted">Subtotal</span>
                  <span className="extra-small fw-bold">₹{totalAmount - 29}</span>
                </div>
                <div className="d-flex justify-content-between mb-2">
                  <span className="extra-small text-muted">Processing</span>
                  <span className="extra-small fw-bold text-success">FREE</span>
                </div>
                <div className="d-flex justify-content-between border-top pt-2 mt-2">
                  <span className="small fw-bold">Grand Total</span>
                  <span className="small fw-bold text-dark">₹{totalAmount}</span>
                </div>
              </div>

              {/* ACTION BUTTONS */}
              <div className="d-grid gap-2">
                <button className="btn btn-dark py-3 fw-bold shadow btn-hover-effect" style={{ borderRadius: "12px" }} onClick={handleFinalOrder}>
                  CONFIRM DELIVERY
                </button>
                
                <div className="row g-2 mt-1">
                  <div className="col-6">
                    <button className="btn btn-outline-secondary w-100 py-2 extra-small fw-bold rounded-3" onClick={() => window.print()}>
                      <i className="fa-solid fa-file-invoice me-1"></i> Invoice
                    </button>
                  </div>
                  <div className="col-6">
                    <button className="btn btn-outline-danger w-100 py-2 extra-small fw-bold rounded-3">
                      <i className="fa-solid fa-triangle-exclamation me-1"></i> Support
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      )}
    </div>
  );
}