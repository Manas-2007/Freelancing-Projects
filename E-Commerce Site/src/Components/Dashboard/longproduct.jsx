import "./product.css";

export function LongBanner() {
  return (
    <div className="container-fluid px-0 px-md-2">
      {/* Upper Row: Combined images with ZERO gap */}
      <div className="d-flex flex-row p-0 m-0"> 
        <img 
          src="/Graphics/long1.jpg" 
          alt="image-left" 
          className="w-50 banner-no-gap" 
          style={{ objectFit: "cover", height: "auto", display: "block" }} 
        />
        <img 
          src="/Graphics/long4.jpg" 
          alt="image-right" 
          className="w-50 banner-no-gap" 
          style={{ objectFit: "cover", height: "auto", display: "block" }} 
        />
      </div>

      {/* Lower Row: Full width image below */}
      <div className="mt-1 mt-md-3">
        <img 
          src="/Graphics/long2.jpg" 
          alt="full-banner" 
          className="img-fluid w-100" 
          style={{ objectFit: "contain", display: "block" }}
        />
      </div>
    </div>
  );
}

export function LongBelow() {
  return (
    <div className="container-fluid py-3 px-0">
      <div className="d-flex justify-content-center">
        {/* w-90 on mobile, w-100 on desktop */}
        <div className="banner-wrapper-elite shadow rounded-4 overflow-hidden">
          <img 
            src="/Graphics/long3.jpg" 
            alt="Library Banner" 
            className="img-fluid long-banner-final"
          />
        </div>
      </div>
    </div>
  );
}