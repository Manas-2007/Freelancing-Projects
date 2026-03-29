import { Nav } from "./navbar"; 
import { Slider } from "./slider";
import { Productlist, Productlist2, Productlist3, ProductFinalList, SquadProduct } from "./product";
import { LongBanner, LongBelow } from "./longproduct";

export function HomeTab({ onAddToCart, cartItems = [], onWishlist, wishlist = [] }) {
  return (
    <>
      <Nav /> {/* This is the Sticky Yellow Bar */}
      <div style={{ marginTop: "0px" }}> 
        <Slider />
        <Productlist onAddToCart={onAddToCart} cartItems={cartItems} onWishlist={onWishlist} wishlist={wishlist} />
        <SquadProduct />
        <LongBanner />
        <Productlist2 onAddToCart={onAddToCart} />
        <Productlist3 onAddToCart={onAddToCart} />
        <LongBelow />
        <ProductFinalList onAddToCart={onAddToCart} cartItems={cartItems} onWishlist={onWishlist} wishlist={wishlist} />
      </div>
    </>
  );
}