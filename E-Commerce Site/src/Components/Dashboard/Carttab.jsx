import React from "react";
import { useNavigate } from "react-router-dom";
import "./product.css";

export function CartTab({ cartItems, onRemove, onUpdateQuantity, onPlaceOrder }) {
  const navigate = useNavigate();

  // Calculations
  const subtotal = cartItems.reduce((acc, item) => acc + (item.discountPrice * (item.quantity || 1)), 0);
  const festivalDiscount = subtotal > 0 ? 200 : 0; 
  const gstTax = Math.round(subtotal * 0.05); 
  const platformFee = subtotal > 0 ? 29 : 0;
  const shipping = subtotal > 1000 || subtotal === 0 ? 0 : 99;
  const finalTotal = subtotal - festivalDiscount + gstTax + platformFee + shipping;

  const handlePlaceOrder = () => {
    if (cartItems.length > 0) {
      onPlaceOrder();
      navigate("/orders");
    }
  };

  return (
    <div className="container" style={{ marginTop: "120px", marginBottom: "50px" }}>
      <div className="row g-4">
        
        {/* LEFT: Product List */}
        <div className="col-lg-8 order-1 order-lg-1">
          <h4 className="fw-bold mb-4 px-1">Shopping Bag ({cartItems.length})</h4>
          
          {/* Removed fixed maxHeight for mobile to allow natural scroll */}
          <div className="cart-items-container">
            {cartItems.length === 0 ? (
              <div className="p-5 text-center bg-light rounded shadow-sm border">
                <i className="fa-solid fa-cart-shopping fa-3x text-muted mb-3"></i>
                <h5>Your bag is empty!</h5>
                <button className="btn btn-success mt-3" onClick={() => navigate("/home")}>Shop Now</button>
              </div>
            ) : (
              cartItems.map((item, index) => (
                <div key={index} className="card border-0 shadow-sm mb-3 p-2 p-md-3" style={{ borderRadius: "15px" }}>
                  <div className="row align-items-center g-2">
                    {/* Image - col-4 on tiny screens, col-2 on desktop */}
                    <div className="col-4 col-md-2">
                      <img src={item.image} alt={item.name} className="img-fluid rounded-3" style={{ height: "80px", width: "100%", objectFit: "cover" }} />
                    </div>
                    
                    {/* Details - col-8 on tiny screens */}
                    <div className="col-8 col-md-6">
                      <div className="ps-2">
                        <h6 className="fw-bold m-0 text-truncate">{item.name}</h6>
                        <p className="text-muted small mb-2">{item.brand}</p>
                        <div className="d-flex align-items-center gap-2">
                          <button className="btn btn-xs btn-light border rounded-circle" style={{width: '28px', height: '28px', padding: 0}} onClick={() => onUpdateQuantity(index, -1)}>-</button>
                          <span className="fw-bold px-1">{item.quantity || 1}</span>
                          <button className="btn btn-xs btn-light border rounded-circle" style={{width: '28px', height: '28px', padding: 0}} onClick={() => onUpdateQuantity(index, 1)}>+</button>
                        </div>
                      </div>
                    </div>
                    
                    {/* Price & Remove - Full width on tiny screens, or col-4 on desktop */}
                    <div className="col-12 col-md-4 text-end mt-2 mt-md-0 d-flex d-md-block justify-content-between align-items-center border-top border-md-0 pt-2 pt-md-0 ps-3 ps-md-0">
                      <h6 className="fw-bold text-success mb-0 mb-md-1">₹{item.discountPrice * (item.quantity || 1)}</h6>
                      <button className="btn btn-link text-danger p-0 small text-decoration-none" onClick={() => onRemove(index)}>
                        <i className="fa-solid fa-trash-can me-1"></i> <span className="d-md-inline">Remove</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* RIGHT: Order Summary */}
        <div className="col-lg-4 order-2 order-lg-2">
          {/* Modified sticky behavior for mobile */}
          <div className="card border-0 shadow-lg p-4 custom-summary-card" style={{ borderRadius: "20px" }}>
            <h5 className="fw-bold mb-4 border-bottom pb-2">Price Details</h5>
            
            <div className="d-flex justify-content-between mb-2">
              <span className="text-muted small">Bag Total</span>
              <span className="small">₹{subtotal}</span>
            </div>
            
            <div className="d-flex justify-content-between mb-2">
              <span className="text-muted small">Festival Discount</span>
              <span className="small text-success">- ₹{festivalDiscount}</span>
            </div>

            <div className="d-flex justify-content-between mb-2">
              <span className="text-muted small">GST (5%)</span>
              <span className="small">+ ₹{gstTax}</span>
            </div>

            <div className="d-flex justify-content-between mb-3">
              <span className="text-muted small">Delivery Charges</span>
              <span className={`small ${shipping === 0 ? "text-success fw-bold" : ""}`}>
                {shipping === 0 ? "FREE" : `₹${shipping}`}
              </span>
            </div>

            <hr className="opacity-10" />
            
            <div className="d-flex justify-content-between mb-4">
              <span className="h5 fw-bold">Total Amount</span>
              <span className="h5 fw-bold text-dark">₹{finalTotal}</span>
            </div>

            <button 
              className={`btn btn-success w-100 py-3 fw-bold shadow ${cartItems.length === 0 ? 'disabled' : ''}`} 
              style={{ borderRadius: "12px", letterSpacing: "1px" }}
              onClick={handlePlaceOrder}
            >
              PROCEED TO SHIPPING
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}