export function Footer() {
    return (
        /* 1. Use w-100 and overflow-hidden to kill that white space gap */
        <footer className="w-100 text-dark pt-5 pb-3 overflow-hidden" style={{ backgroundColor: "#d9f3f4" }}>
            <div className="container">
                {/* 2. Ensure row has g-0 or is properly contained to prevent horizontal scroll */}
                <div className="row g-4 text-center text-md-start">

                    {/* About Section */}
                    <div className="col-12 col-md-3 mb-4">
                        <h5 className="fw-bold mb-3 text-success">NewBorn Nest</h5>
                        <p className="small">We bring the best products for your little ones. Quality toys, clothes, and essentials at affordable prices.</p>
                    </div>

                    {/* Quick Links */}
                    <div className="col-6 col-md-3 mb-4">
                        <h5 className="fw-bold mb-3">Quick Links</h5>
                        <ul className="list-unstyled">
                            <li className="mb-2"><a href="#" className="text-dark text-decoration-none small">Home</a></li>
                            <li className="mb-2"><a href="#" className="text-dark text-decoration-none small">Shop</a></li>
                            <li className="mb-2"><a href="#" className="text-dark text-decoration-none small">Offers</a></li>
                            <li className="mb-2"><a href="#" className="text-dark text-decoration-none small">Contact</a></li>
                        </ul>
                    </div>

                    {/* Customer Care */}
                    <div className="col-6 col-md-3 mb-4">
                        <h5 className="fw-bold mb-3">Customer Care</h5>
                        <ul className="list-unstyled">
                            <li className="mb-2"><a href="#" className="text-dark text-decoration-none small">Help Center</a></li>
                            <li className="mb-2"><a href="#" className="text-dark text-decoration-none small">Shipping</a></li>
                            <li className="mb-2"><a href="#" className="text-dark text-decoration-none small">Returns</a></li>
                            <li className="mb-2"><a href="#" className="text-dark text-decoration-none small">FAQ</a></li>
                        </ul>
                    </div>

                    {/* Contact & Social */}
                    <div className="col-12 col-md-3 mb-4">
                        <h5 className="fw-bold mb-3">Contact Us</h5>
                        <p className="small mb-1"><i className="fa-solid fa-envelope me-2 text-success"></i>support@newbornnest.com</p>
                        <p className="small mb-3"><i className="fa-solid fa-phone me-2 text-success"></i>+91 123 456 7890</p>
                        
                        <div className="d-flex gap-3 justify-content-center justify-content-md-start mt-3">
                            <a href="#" className="text-dark fs-5"><i className="fa-brands fa-facebook"></i></a>
                            <a href="#" className="text-dark fs-5"><i className="fa-brands fa-instagram"></i></a>
                            <a href="#" className="text-dark fs-5"><i className="fa-brands fa-x-twitter"></i></a>
                            <a href="#" className="text-dark fs-5"><i className="fa-brands fa-youtube"></i></a>
                        </div>
                    </div>

                </div>

                <hr className="border-top border-dark opacity-10" />

                <div className="text-center pt-2 small opacity-75">
                    &copy; {new Date().getFullYear()} <span className="fw-bold">NewBorn Nest</span>. All rights reserved.
                </div>
            </div>
        </footer>
    );
}