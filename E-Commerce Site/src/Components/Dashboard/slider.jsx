export function Slider() {
  return (
    <>
      {/* Changed px-5 to px-1 on mobile for edge-to-edge feel */}
      <div className="container-fluid px-1 px-md-5" style={{ marginTop: "0px" }}>
        <div
          id="carouselExampleIndicators"
          className="carousel slide shadow-sm"
          data-bs-ride="carousel"
          style={{
            borderRadius: "15px",
            overflow: "hidden",
            border: "none" // Removed border for a cleaner modern look
          }}
        >
          {/* Indicators */}
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></button>
          </div>

          {/* Images */}
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="/Graphics/slider1.jpg"
                className="d-block w-100 slider-img-responsive"
                alt="img"
                style={{ backgroundColor: "#c9dff5" }}
              />
            </div>

            <div className="carousel-item">
              <img
                src="/Graphics/slider2.jpg"
                className="d-block w-100 slider-img-responsive"
                alt="img"
                style={{ backgroundColor: "#394857" }}
              />
            </div>

            <div className="carousel-item">
              <img
                src="/Graphics/slider3.jpg"
                className="d-block w-100 slider-img-responsive"
                alt="img"
                style={{ backgroundColor: "#031d38" }}
              />
            </div>
          </div>

          {/* Controls */}
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon"></span>
          </button>

          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon"></span>
          </button>
        </div>
      </div>
    </>
  );
}