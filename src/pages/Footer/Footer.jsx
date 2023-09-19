import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaInstagramSquare,
  FaTwitterSquare,
  FaLinkedin,
} from "react-icons/fa";
import './footer.css'
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-dark text-white p-5  m-auto">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-lg-3 col-sm-12">
            <h5 className="fs-2">Contact Us</h5>
            <div className="contact-info">
              <a className="footer-link">
                <FaEnvelope className="me-2 footer-icon" />hmyahya001@gmail.com
              </a>
              <br/>
              <a className="footer-link" >
                <FaPhone className="me-2 footer-icon" /> (+880) 1625290235
              </a>
              <br/>
              <a className="footer-link">
                <FaMapMarkerAlt className="me-2 footer-icon" /> Rong Mhahal Tower, Bondor Bazar, Sylhet, BD
              </a>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 col-sm-12">
            <h5 className="fs-2">Navigate</h5>
            <div className="contact-info">
              <Link className="footer-nav" to="/">Home</Link>
              <br/>
              <Link className="footer-nav" to="/all-jobs">All Jobs</Link>
              <br/>
              <Link className="footer-nav" to="/MyJobs">My Jobs</Link>
              <br/>
              <Link className="footer-nav" to="/login">Login</Link>
              <br/>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 col-sm-12">
            <h5 className="fs-2">Subscribe</h5>
            <p>Get the latest news and updates from us.</p>
            <form>
              <div className="form-group pb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                />
              </div>
              <button type="submit" className="btn footer-btn">
                Subscribe
              </button>
            </form>
          </div>
          <div className="col-md-6 col-lg-3 col-sm-12">
            <h5 className="fs-2">Follow Us</h5>
            <div className="social-links">
              <a href="https://www.linkedin.com/in/hmyahya201/">
                <FaLinkedin className="me-3 social-links" />
              </a>
              <a href="https://twitter.com/hmyahya201">
                <FaTwitterSquare className="me-3 social-links" />
              </a>
              <a href="https://www.instagram.com/hmyahya201/?hl=en">
                <FaInstagramSquare className="me-3 social-links" />
              </a>
            </div>
          </div>
        </div>

        <div className="row mt-4 col-sm-12">
          <div className="col-md-12 text-center">
            <p>&copy;2023 All rights reserved by hmyahya</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
