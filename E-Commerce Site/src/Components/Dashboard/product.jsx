import "./product.css";
import { Titles, Titles2, Titles3, Titles4 } from "./titles";

export function Productlist({ onAddToCart, cartItems = [], onWishlist, wishlist = [] }) {
  const products = [
    { image: 'src/Components/Graphics/product21.jpg', name: 'Sunny T-Shirt', brand: 'NewBorn Nest', price: 1500, discountPrice: 1200 },
    { image: 'src/Components/Graphics/product22.jpg', name: 'Short Capri', brand: 'NewBorn Nest', price: 2000, discountPrice: 1800 },
    { image: 'src/Components/Graphics/product23.jpg', name: 'Kids Dual T-Shirt', brand: 'NewBorn Nest', price: 1000, discountPrice: 850 },
    { image: 'src/Components/Graphics/product24.jpg', name: 'T-Shirt', brand: 'NewBorn Nest', price: 2500, discountPrice: 2100 },
    { image: 'src/Components/Graphics/product25.jpg', name: 'Long kid Wear', brand: 'NewBorn Nest', price: 3000, discountPrice: 2700 },
    { image: 'src/Components/Graphics/product11.jpg', name: 'Baby Wear', brand: 'NewBorn Nest', price: 1500, discountPrice: 1200 },
    { image: 'src/Components/Graphics/product12.jpg', name: 'Swimming Wear', brand: 'NewBorn Nest', price: 2000, discountPrice: 1800 },
    { image: 'src/Components/Graphics/product13.jpg', name: 'Long Dress', brand: 'NewBorn Nest', price: 1000, discountPrice: 850 },
    { image: 'src/Components/Graphics/product14.jpg', name: 'Trio Set Dress', brand: 'NewBorn Nest', price: 2500, discountPrice: 2100 },
    { image: 'src/Components/Graphics/product15.jpg', name: 'Little kid jeans', brand: 'NewBorn Nest', price: 3000, discountPrice: 2700 },
  ];

  return (
    <div className="container py-3 px-2">
      <Titles />
      {/* flex-wrap ensures items drop to the next line on mobile */}
      <div className="row g-2 g-md-4 justify-content-center flex-wrap">
        {products.map((prod, idx) => {
          const isAdded = cartItems.some((item) => item.name === prod.name);
          const isWishlisted = wishlist.some((item) => item.name === prod.name);

          return (
            /* col-6 = 2 items per row on mobile. col-lg-2-5 = desktop layout */
            <div key={idx} className="col-6 col-sm-6 col-md-4 col-lg-2-5 d-flex align-items-stretch">
              <div className="card shadow-sm border-0 rounded-4 overflow-hidden product-card w-100">
                
                {/* Image Container with responsive class */}
                <div className="text-center p-1 p-md-2">
                  <img 
                    src={prod.image} 
                    alt={prod.name} 
                    className="img-fluid rounded-3 product-img-responsive" 
                    style={{ width: '100%', objectFit: 'cover' }}
                  />
                </div>

                <div className="card-body d-flex flex-column p-2 p-md-3">
                  <h6 className="card-title mb-1 fw-bold text-truncate" style={{ fontSize: '0.85rem' }}>
                    {prod.name}
                  </h6>
                  <p className="text-muted extra-small mb-1 d-none d-md-block" style={{ fontSize: '0.7rem' }}>
                    {prod.brand}
                  </p>
                  
                  <div className="mb-2">
                    <span className="text-danger fw-bold me-1" style={{ fontSize: '0.85rem' }}>
                      ₹{prod.discountPrice}
                    </span>
                    <span className="text-muted text-decoration-line-through extra-small" style={{ fontSize: '0.7rem' }}>
                      ₹{prod.price}
                    </span>
                  </div>
                  
                  <div className="mt-auto d-flex gap-1 gap-md-2">
                    <button
                      className={`btn d-flex align-items-center justify-content-center flex-grow-1 ${isAdded ? "btn-success disabled" : "btn-primary"}`}
                      onClick={() => !isAdded && onAddToCart(prod)}
                      style={{ height: '36px', fontSize: '0.75rem', borderRadius: '8px' }}
                    >
                      <i className={`fa-solid ${isAdded ? "fa-circle-check" : "fa-cart-shopping"}`}></i>
                      <span className="ms-1 d-none d-sm-inline">{isAdded ? "Added" : "Cart"}</span>
                    </button>

                    <button 
                      className={`btn d-flex align-items-center justify-content-center ${isWishlisted ? "btn-danger" : "btn-outline-danger"}`} 
                      onClick={() => onWishlist(prod)}
                      style={{ height: '36px', width: '36px', borderRadius: '8px' }}
                    >
                      <i className={`${isWishlisted ? "fa-solid" : "fa-regular"} fa-heart`}></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// Productlist2 (Diapers Category)

export function Productlist2() {
  const products = [
    "src/Components/Graphics/diaper1.jpg", 
    "src/Components/Graphics/diaper2.jpg", 
    "src/Components/Graphics/diaper3.jpg", 
    "src/Components/Graphics/diaper4.jpg", 
    "src/Components/Graphics/diaper5.jpg", 
    "src/Components/Graphics/diaper6.jpg", 
    "src/Components/Graphics/diaper7.jpg"
  ];

  return (
    <div className="container my-4 px-2 px-md-3">
      <Titles2 />
      {/* Horizontal Scroll Wrapper */}
      <div className="d-flex flex-nowrap overflow-auto hide-scrollbar gap-2 gap-md-0 pb-2">
        {products.map((imgSrc, index) => (
  <div 
    key={index} 
    className="text-center" 
    style={{ 
      /* INCREASED FROM 140px TO 180px FOR BETTER TEXT VISIBILITY */
      flex: window.innerWidth < 768 ? "0 0 200px" : "0 0 14.28%", 
      padding: "0 5px" 
    }}
  >
    <img 
      src={imgSrc} 
      alt="product" 
      className="img-fluid shadow-sm border" 
      style={{ 
        width: "100%", 
        height: window.innerWidth < 768 ? "180px" : "250px", 
        objectFit: "cover", 
        borderRadius: "12px" 
      }} 
    />
  </div>
))}
      </div>
    </div>
  );
}

// Productlist3 (Skin Care Category)
export function Productlist3() {
  const products = [
    "src/Components/Graphics/skin1.jpg", 
    "src/Components/Graphics/skin2.jpg", 
    "src/Components/Graphics/skin3.jpg", 
    "src/Components/Graphics/skin4.jpg", 
    "src/Components/Graphics/skin5.jpg", 
    "src/Components/Graphics/skin6.jpg", 
    "src/Components/Graphics/skin7.jpg"
  ];

  return (
    <div className="container my-4 px-2 px-md-3">
      <Titles3 />
      {/* Horizontal Scroll Wrapper */}
      <div className="d-flex flex-nowrap overflow-auto hide-scrollbar gap-2 gap-md-0 pb-2">
        {products.map((imgSrc, index) => (
  <div 
    key={index} 
    className="text-center" 
    style={{ 
      /* INCREASED FROM 140px TO 180px FOR BETTER TEXT VISIBILITY */
      flex: window.innerWidth < 768 ? "0 0 200px" : "0 0 14.28%", 
      padding: "0 5px" 
    }}
  >
    <img 
      src={imgSrc} 
      alt="product" 
      className="img-fluid shadow-sm border" 
      style={{ 
        width: "100%", 
        height: window.innerWidth < 768 ? "180px" : "250px", 
        objectFit: "cover", 
        borderRadius: "12px" 
      }} 
    />   
  </div>
))}
      </div>
    </div>
  );
}

export function ProductFinalList({ onAddToCart, cartItems = [], onWishlist, wishlist = [] }) {
  const products = [
    { image: 'src/Components/Graphics/product16.jpg', name: 'Kid Capri', brand: 'NewBorn Nest', price: 1500, discountPrice: 1200 },
    { image: 'src/Components/Graphics/product17.jpg', name: 'Pair Dress', brand: 'NewBorn Nest', price: 2000, discountPrice: 1800 },
    { image: 'src/Components/Graphics/product18.jpg', name: 'Night Wear', brand: 'NewBorn Nest', price: 1000, discountPrice: 850 },
    { image: 'src/Components/Graphics/product19.jpg', name: 'Shoes', brand: 'NewBorn Nest', price: 2500, discountPrice: 2100 },
    { image: 'src/Components/Graphics/product20.jpg', name: 'Nighty Dress', brand: 'NewBorn Nest', price: 3000, discountPrice: 2700 },
    { image: 'src/Components/Graphics/product26.jpg', name: 'Little Champ ', brand: 'NewBorn Nest', price: 1500, discountPrice: 1200 },
    { image: 'src/Components/Graphics/product29.jpg', name: 'Mini Bag', brand: 'NewBorn Nest', price: 2000, discountPrice: 1800 },
    { image: 'src/Components/Graphics/product27.jpg', name: 'Little Frock', brand: 'NewBorn Nest', price: 1000, discountPrice: 850 },
    { image: 'src/Components/Graphics/product28.jpg', name: 'Kid Wear', brand: 'NewBorn Nest', price: 2500, discountPrice: 2100 },
    { image: 'src/Components/Graphics/product30.jpg', name: 'Short Wear', brand: 'NewBorn Nest', price: 3000, discountPrice: 2700 },
  ];

  return (
    <div className="container py-3 py-md-5">
      <Titles />
      <div className="row g-2 g-md-4 justify-content-center flex-wrap">
        {products.map((prod, idx) => {
          const isAdded = cartItems.some((item) => item.name === prod.name);
          const isWishlisted = wishlist.some((item) => item.name === prod.name);

          return (
            /* col-6 = 2 per row on mobile | col-lg-2-5 = your Desktop UI */
            <div key={idx} className="col-6 col-sm-6 col-md-4 col-lg-2-5 d-flex align-items-stretch">
              <div className="card shadow-sm border-0 rounded-4 overflow-hidden product-card w-100">
                
                {/* Responsive Image height */}
                <div className="text-center p-1 p-md-2">
                  <img 
                    src={prod.image} 
                    alt={prod.name} 
                    className="img-fluid rounded-3" 
                    style={{ 
                      height: window.innerWidth < 768 ? '150px' : '200px', 
                      objectFit: 'cover', 
                      width: '100%' 
                    }} 
                  />
                </div>

                <div className="card-body d-flex flex-column p-2 p-md-3">
                  <h6 className="card-title mb-1 fw-bold text-truncate" style={{ fontSize: '0.85rem' }}>
                    {prod.name}
                  </h6>
                  
                  {/* Brand name hidden on mobile to keep card height clean */}
                  <p className="text-muted extra-small mb-1 d-none d-md-block" style={{ fontSize: '0.7rem' }}>
                    {prod.brand}
                  </p>
                  
                  <div className="mb-2">
                    <span className="text-danger fw-bold me-1" style={{ fontSize: '0.85rem' }}>
                      ₹{prod.discountPrice}
                    </span>
                    <span className="text-muted text-decoration-line-through extra-small" style={{ fontSize: '0.7rem' }}>
                      ₹{prod.price}
                    </span>
                  </div>
                  
                  <div className="mt-auto d-flex gap-1">
                    {/* CART BUTTON: Text hides on mobile to prevent squashing */}
                    <button
                      className={`btn d-flex align-items-center justify-content-center flex-grow-1 ${isAdded ? "btn-success disabled" : "btn-primary"}`}
                      onClick={() => !isAdded && onAddToCart(prod)}
                      style={{ height: '36px', borderRadius: '8px', padding: '0 4px' }}
                    >
                      <i className={`fa-solid ${isAdded ? "fa-circle-check" : "fa-cart-shopping"}`} style={{ fontSize: '0.8rem' }}></i>
                      <span className="ms-1 d-none d-md-inline" style={{ fontSize: '0.75rem' }}>
                        {isAdded ? "Added" : "Cart"}
                      </span>
                    </button>

                    {/* WISHLIST BUTTON */}
                    <button 
                      className={`btn d-flex align-items-center justify-content-center ${isWishlisted ? "btn-danger" : "btn-outline-danger"}`} 
                      onClick={() => onWishlist(prod)}
                      style={{ height: '36px', width: '36px', minWidth: '36px', borderRadius: '8px' }}
                    >
                      <i className={`${isWishlisted ? "fa-solid" : "fa-regular"} fa-heart`} style={{ fontSize: '0.8rem' }}></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function SquadProduct() {
  return (
    <div className="container mt-4 mb-5">
      <Titles4 />
      {/* Using a single row with 'g-2' for a tight, modern mobile gap.
          'col-6' keeps it 2x2 on mobile.
          'col-md-3' makes it a sleek 1x4 on laptops.
      */}
      <div className="row g-2 g-md-3">
        <div className="col-6 col-md-3">
          <div className="squad-img-wrapper">
             <img src="src/Components/Graphics/side1.jpg" alt="side1" className="img-fluid rounded-4 shadow-sm squad-img" />
          </div>
        </div>
        <div className="col-6 col-md-3">
          <div className="squad-img-wrapper">
             <img src="src/Components/Graphics/side2.jpg" alt="side2" className="img-fluid rounded-4 shadow-sm squad-img" />
          </div>
        </div>
        <div className="col-6 col-md-3">
          <div className="squad-img-wrapper">
             <img src="src/Components/Graphics/side3.jpg" alt="side3" className="img-fluid rounded-4 shadow-sm squad-img" />
          </div>
        </div>
        <div className="col-6 col-md-3">
          <div className="squad-img-wrapper">
             <img src="src/Components/Graphics/side4.jpg" alt="side4" className="img-fluid rounded-4 shadow-sm squad-img" />
          </div>
        </div>
      </div>
    </div>
  );
}