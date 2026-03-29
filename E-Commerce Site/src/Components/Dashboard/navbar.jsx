import "./navbar.css";
import React, { useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

export function Navbar({ cartCount = 0, wishlistCount = 0 }) {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  // --- THE ULTIMATE FUNCTIONAL FIX ---
  useEffect(() => {
    // 1. Link click hone par Sidebar band karne ka logic
    const handleLinkClick = () => {
      const backdrop = document.querySelector('.offcanvas-backdrop');
      if (backdrop) {
        backdrop.remove(); 
        document.body.style.overflow = 'auto'; 
        document.body.style.paddingRight = '0';
      }
      // Sidebar ko hide karne ke liye
      const myOffcanvas = document.getElementById('offcanvasNavbar');
      if (myOffcanvas) {
        myOffcanvas.classList.remove('show');
      }
    };

    // Sare links par listener lagao
    const sidebarLinks = document.querySelectorAll('.emerald-nav-item, .nav-link');
    sidebarLinks.forEach(link => link.addEventListener('click', handleLinkClick));

    return () => {
      sidebarLinks.forEach(link => link.removeEventListener('click', handleLinkClick));
    };
  }, [location.pathname]); // Har page change par refresh hoga

  return (
    <>
      <nav className="navbar shadow-sm fixed-top py-2" 
           style={{ backgroundColor: "#e6f4ea", zIndex: 1050, minHeight: "70px" }}>
        <div className="container-fluid px-2 px-md-4 d-flex align-items-center flex-nowrap">
          
          {/* 1. Mobile Toggle - Added manual click check */}
          <button
            className="navbar-toggler d-lg-none border-0 shadow-none p-1 me-1"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            style={{ cursor: 'pointer', zIndex: 1100 }}
          >
            <i className="fa-solid fa-bars-staggered fs-4 text-success"></i>
          </button>

          {/* 2. Logo */}
          <NavLink className="navbar-brand fw-bold text-success d-flex align-items-center m-0 me-2" to="/home">
            <img src="/Graphics/logo.jpg" alt="logo" width="42" height="42" 
                 className="rounded-circle shadow-sm border border-2 border-white" style={{ objectFit: "cover" }} />
            <span className="d-none d-xl-inline ms-2" style={{ fontSize: "1.2rem", letterSpacing: "-0.5px" }}>NewBorn Nest</span>
          </NavLink>

          {/* 3. Search Bar */}
          <form className="flex-grow-1 mx-1 mx-md-3" role="search" style={{ maxWidth: "550px" }}>
            <div className="input-group shadow-sm rounded-pill overflow-hidden bg-white border" style={{ height: "42px" }}>
              <input className="form-control border-0 ps-3 bg-transparent h-100" type="search" placeholder="Search baby essentials..." style={{ fontSize: "0.85rem" }} />
              <button className="btn btn-success border-0 px-3 h-100" type="submit">
                <i className="fa-solid fa-magnifying-glass small"></i>
              </button>
            </div>
          </form>

          {/* 4. Desktop Icons */}
          <ul className="navbar-nav d-flex flex-row align-items-center gap-2 gap-md-3 mb-0">
            {["home", "orders", "wishlist", "my-cart"].map((path) => (
              <li className="nav-item d-none d-lg-block text-center" key={path} style={{ zIndex: 1100 }}>
                <NavLink 
                  className={({ isActive }) => `nav-link p-0 ${isActive ? 'text-success' : 'text-muted'}`} 
                  to={`/${path}`}
                  style={{ cursor: 'pointer', position: 'relative' }}
                >
                  <i className={`fa-solid ${path === 'home' ? 'fa-house' : path === 'orders' ? 'fa-truck' : path === 'wishlist' ? 'fa-heart' : 'fa-cart-shopping'} fs-5 d-block`}></i>
                  <span style={{ fontSize: '0.6rem', fontWeight: '800' }}>{path.replace('my-', '').toUpperCase()}</span>
                </NavLink>
              </li>
            ))}

            {/* Profile Avatar */}
            <li className="nav-item ms-1 ms-md-2" style={{ zIndex: 1100 }}>
              <NavLink className="nav-link p-0" to="/profile" style={{ cursor: 'pointer' }}>
                <img 
                  src="https://ui-avatars.com/api/?name=Manas+Kumar&background=198754&color=fff" 
                  alt="profile" 
                  className={`rounded-circle border border-2 shadow-sm ${isActive('/profile') ? 'border-success scale-110' : 'border-white'}`} 
                  width="35" height="35" 
                />
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>

      {/* --- SIDEBAR --- */}
      <div 
        className="offcanvas offcanvas-start border-0 shadow-lg" 
        tabIndex="-1" 
        id="offcanvasNavbar" 
        aria-labelledby="offcanvasNavbarLabel"
        style={{ 
          width: '85%', 
          maxWidth: '310px', 
          zIndex: 2500, 
          background: "linear-gradient(180deg, #062c1a 0%, #010a05 100%)",
          color: "#fff",
          visibility: 'visible'
        }}
      >
        <div className="offcanvas-header flex-column align-items-center py-5 position-relative border-bottom border-success border-opacity-10">
          <button 
            type="button" 
            className="btn btn-dark position-absolute top-0 end-0 m-3 shadow-none rounded-circle d-flex align-items-center justify-content-center border-0" 
            data-bs-dismiss="offcanvas"
            style={{ width: '38px', height: '38px', backgroundColor: 'rgba(255,255,255,0.05)' }}
          >
            <i className="fa-solid fa-xmark text-success"></i>
          </button>
          
          <div className="mb-3 p-1 rounded-circle shadow-lg position-relative">
            <img src="/Graphics/logo.jpg" alt="logo" width="75" height="75" className="rounded-circle border border-2 border-success border-opacity-50" />
          </div>
          
          <h5 className="offcanvas-title fw-bold text-white mb-1" style={{ letterSpacing: '1.5px' }}>NEWBORN NEST</h5>
          <p className="extra-small text-success opacity-75 mb-0 fw-bold" style={{ fontSize: '0.65rem' }}>PREMIUM BABY CARE HUB</p>
        </div>

        <div className="offcanvas-body p-3 d-flex flex-column">
          <div className="list-group list-group-flush gap-2">
            {[
              { to: "/home", label: "HOME HUB", icon: "fa-house" },
              { to: "/orders", label: "TRACK DELIVERIES", icon: "fa-truck-fast" },
              { to: "/wishlist", label: "MY FAVORITES", icon: "fa-heart", count: wishlistCount },
              { to: "/my-cart", label: "SHOPPING BAG", icon: "fa-cart-shopping", count: cartCount },
              { to: "/profile", label: "ACCOUNT SETTINGS", icon: "fa-user-gear" }
            ].map((item, index) => (
              <NavLink 
                key={index}
                to={item.to} 
                className={({ isActive }) => `list-group-item list-group-item-action border-0 rounded-4 py-3 px-3 emerald-nav-item ${isActive ? 'active-emerald-item' : ''}`}
              >
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center">
                    <i className={`fa-solid ${item.icon} me-3 opacity-75`} style={{width: '20px'}}></i>
                    <span className="fw-bold small tracking-wider">{item.label}</span>
                  </div>
                  {item.count > 0 && (
                    <span className="badge rounded-pill bg-success text-white shadow-sm px-2" style={{fontSize: '10px'}}>{item.count}</span>
                  )}
                </div>
              </NavLink>
            ))}
          </div>
          <div className="mt-auto pt-3">
             <button className="btn w-100 py-3 fw-bold rounded-pill shadow-lg text-uppercase signout_btn">Sign Out</button>
          </div>
        </div>
      </div>
    </>
  );
}



export function Nav() {
  return (
    <div
      className="category-bar shadow-sm"
      style={{ 
        backgroundColor: "#ffd91c", 
        position: "sticky", 
        top: "70px", // Match your updated navbar height
        zIndex: 1040,
        borderTop: "1px solid rgba(0,0,0,0.05)" 
      }}
    >
      <div className="container-fluid px-2 px-md-4">
        <ul className="nav d-flex flex-row align-items-center justify-content-evenly flex-nowrap mb-0 list-unstyled hide-scrollbar-mobile" 
            style={{ height: "45px", overflowX: "auto", overflowY: "hidden", WebkitOverflowScrolling: "touch" }}>
          
          <li className="nav-item">
            <a className="nav-link fw-bold text-dark py-0 px-3" href="#" style={{ fontSize: "0.7rem", whiteSpace: "nowrap" }}>
              <i className="fa-solid fa-bars me-1"></i> ALL
            </a>
          </li>

          {["BOY FASHION", "GIRL FASHION", "FOOTWEAR", "TOYS", "DIAPERING", "GEAR", "FEEDING", "BATH", "NURSERY", "MOMS HEALTH"].map((cat) => (
            <li className="nav-item" key={cat}>
              <a className="nav-link text-dark py-0 px-2" href="#" style={{ fontSize: "12px", whiteSpace: "nowrap", fontWeight: "600" }}>
                {cat}
              </a>
            </li>
          ))}

        </ul>
      </div>
    </div>
  );
}