import "./Contact.css";
import Navbar from "./Navbar";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTiktok, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faLocation, faNewspaper, faUserNinja } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <>
      <Navbar />

      <div id="Contact-info" className="bg-danger">
        <div className="container-fluid mt-5">
          <div className="row">
            <div className="col">
              <h1 className="fw-bold display-1 text-center mt-5 pt-5">
                Contact
              </h1>
            </div>
          </div>
        </div>
      </div>

      <section id="faq">
        <div className="container">
          <div className="row">
            <div className="col-lg-2">
              <a href="https://www.facebook.com/keziahmae.getacay">
                <h1>
                  <FontAwesomeIcon className="icons" icon={faFacebook} />
                </h1>
              </a>
            </div>
            <div className="col-lg-2">
              <a href="https://www.tiktok.com/@keziahwithh?_t=8nsMEeQOH1l&_r=1">
                <h1>
                  <FontAwesomeIcon className="icons" icon={faTiktok} />
                </h1>
              </a>
            </div>
            <div className="col-lg-2">
              <a href="https://www.instagram.com/kissmieeeee?igsh=b2N2ajE2cmpmOHhx">
                <h1>
                  <FontAwesomeIcon className="icons" icon={faInstagram} />
                </h1>
              </a>
            </div>
            <div className="col-lg-2">
              <a href="https://x.com/kissmieee?t=quX2XHdKPkohA3amWPpjbw&s=09">
                <h1>
                  <FontAwesomeIcon className="icons" icon={faTwitter} />
                </h1>
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer class="footer text-light fixed-bottom pt-3" id="footer">
        <div class="container">
          <div class="row al">
            <div class="col-md-4 col-sm-6 text-lg-start text-center">
              <a class="navbar-brand" href="#">
              </a>
              <h5 class="mt-4"><FontAwesomeIcon className="me-1" icon={faUserNinja} />About Us</h5>
              <p>Navigating the complexities of life, kindness is the anchor that grounds us.</p>
            </div>
            <div class="col-md-4 col-sm-6 text-lg-start text-center">
              <h5><FontAwesomeIcon className="me-1" icon={faLocation} /> Address </h5>
              <p>Purok Mangga Barangay Tabugon,<br /> Kabankalan City Negros Occidental</p>
              <p>Email: Keziahjjml@gmail.com<br />Phone: 09955008621</p>
            </div>
            <div class="col-md-4 col-sm-6 text-lg-start  text-center">
              <h5><FontAwesomeIcon className="me-1" icon={faNewspaper} />Newsletter</h5>
              <form>
                <div class="input-group mb-3">
                  <input type="text" class="form-control" />
                  <button class="btn btn-outline-light" type="button" id="button-addon2">Subscribe</button>
                </div>
              </form>
              <p>Forever caught in the grips of stress.</p>
            </div>
          </div>
        </div>
      </footer>

    </>
  );
};

export default Contact;