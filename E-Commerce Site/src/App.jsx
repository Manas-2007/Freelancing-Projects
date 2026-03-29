import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react"; 
import { Navbar } from "./Components/Dashboard/navbar";
import { HomeTab } from "./Components/Dashboard/Hometab"; 
import { Footer } from "./Components/Dashboard/footer";
import { CartTab } from "./Components/Dashboard/Carttab";
import { WishlistTab } from "./Components/Dashboard/Wishlist";
import { OrderTab } from "./Components/Dashboard/Ordertab"; 
import { ProfileTab } from "./Components/Dashboard/Profile"; 

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [orders, setOrders] = useState([]);

  const addToCart = (product) => setCart([...cart, product]);
  const removeFromCart = (index) => setCart(cart.filter((_, i) => i !== index));
  const toggleWishlist = (product) => {
    setWishlist((prev) => {
      const isAlreadyThere = prev.some((item) => item.name === product.name);
      return isAlreadyThere ? prev.filter((item) => item.name !== product.name) : [...prev, product];
    });
  };

  const updateQuantity = (index, delta) => {
  setCart((prevCart) => {
    const newCart = [...prevCart];
    const item = newCart[index];
    if (item) {
      const newQty = (item.quantity || 1) + delta;
      item.quantity = newQty > 0 ? newQty : 1;
    }
    return newCart;
  });
};

  const placeOrder = () => {
    if (cart.length === 0) return alert("Your cart is empty!");
    setOrders([...orders, ...cart]);
    setCart([]); 
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar cartCount={cart.length} wishlistCount={wishlist.length} />
      {/* 70px margin ensures content starts after the fixed navbar */}
      <div className="main-content" style={{ marginTop: "70px" }}>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<HomeTab onAddToCart={addToCart} cartItems={cart} onWishlist={toggleWishlist} wishlist={wishlist} />} />
          <Route path="/my-cart" element={<CartTab cartItems={cart} onRemove={removeFromCart} onUpdateQuantity={updateQuantity} onPlaceOrder={placeOrder} />} />
          <Route path="/orders" element={<OrderTab orderItems={orders} />} />
          <Route path="/wishlist" element={<WishlistTab wishlistItems={wishlist} onRemove={toggleWishlist} onAddToCart={addToCart} />} />
          <Route path="/profile" element={<ProfileTab />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}