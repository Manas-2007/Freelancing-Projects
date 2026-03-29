import React from 'react';

export function WishlistTab({ wishlistItems = [], onRemove, onAddToCart }) {
  return (
    <div className="container" style={{ marginTop: "120px", marginBottom: "50px", minHeight: "70vh" }}>
      
      {/* Header Section */}
      <div className="d-flex align-items-center justify-content-between mb-4 px-1">
        <h3 className="fw-bold m-0 fs-4 fs-md-3">
          My Wishlist <span className="text-muted fs-6 fs-md-5 fw-normal">({wishlistItems.length} items)</span>
        </h3>
      </div>

      <hr className="mb-4 mb-md-5 opacity-10" />

      {wishlistItems.length === 0 ? (
        /* Empty State UI */
        <div className="text-center py-5 shadow-sm rounded-4 bg-light border mx-1">
          <div className="mb-3 mb-md-4">
            <i className="fa-regular fa-heart fa-4x text-muted opacity-25"></i>
          </div>
          <h4 className="fw-bold">Your wishlist is empty!</h4>
          <p className="text-muted mb-4 small px-3">Save your favorite newborn essentials here to find them easily later.</p>
          <a href="/home" className="btn btn-success px-5 py-2 fw-bold rounded-pill shadow-sm">
            Continue Shopping
          </a>
        </div>
      ) : (
        /* Wishlist Grid - 2 items per row on Mobile, 4 on Desktop */
        <div className="row g-2 g-md-4">
          {wishlistItems.map((item, index) => (
            <div key={index} className="col-6 col-md-4 col-lg-3">
              <div className="card h-100 border-0 shadow-sm hover-shadow position-relative" style={{ transition: '0.3s', borderRadius: '15px', overflow: 'hidden' }}>
                
                {/* Quick Remove Icon (Top Right) */}
                <button 
                  className="btn btn-white position-absolute top-0 end-0 m-2 shadow-sm rounded-circle d-flex align-items-center justify-content-center"
                  onClick={() => onRemove(item)}
                  style={{ width: '32px', height: '32px', zIndex: 10, backgroundColor: 'rgba(255,255,255,0.9)' }}
                >
                  <i className="fa-solid fa-xmark text-danger small"></i>
                </button>

                {/* Product Image */}
                <div className="p-1 p-md-2">
                                  <img 
                  src={item.image} 
                  className="card-img-top rounded-4 wishlist-card-img" 
                  alt={item.name} 
                />
                </div>

                <div className="card-body d-flex flex-column pt-1 p-2 p-md-3">
                  <h6 className="fw-bold mb-1 text-truncate" style={{ fontSize: '0.9rem' }}>{item.name}</h6>
                  <p className="text-muted extra-small mb-2 d-none d-md-block">{item.brand}</p>
                  
                  <div className="mb-2 mb-md-3">
                    <span className="text-danger fw-bold me-1" style={{ fontSize: '0.9rem' }}>₹{item.discountPrice}</span>
                    <span className="text-muted text-decoration-line-through extra-small" style={{ fontSize: '0.75rem' }}>₹{item.price}</span>
                  </div>

                  {/* Action Button - Optimized for Mobile Tap */}
                  <div className="mt-auto">
                    <button 
                      className="btn btn-primary w-100 fw-bold py-2 rounded-3 shadow-sm" 
                      style={{ fontSize: '0.75rem', letterSpacing: '0.5px' }}
                      onClick={() => {
                        onAddToCart(item);
                        onRemove(item); 
                      }}
                    >
                      <i className="fa-solid fa-cart-plus me-1"></i> <span className="d-none d-sm-inline">MOVE TO BAG</span><span className="d-sm-none">ADD</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}