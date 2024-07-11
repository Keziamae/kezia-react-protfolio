import "./Portfolio.css";
import Navbar from "./Navbar";
import calcuImage2 from "./img/calc.png"
import jao3Image from "./img/react project.png"
import jao4Image from "./img/final frontend projectt.png"
import jao5Image from "./img/frontend projectt.png"

const Portfolio = () => {
  return (
    <>
      <Navbar />
      <div id="portfolio-info" className="bg-danger">
        <div className="container-fluid mt-5">
          <div className="row">
            <div className="col">
              <h1 className="fw-bold display-1 text-center mt-5 pt-5">
                Portfolio 
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div id="portfolio">
        <div className="container">
          <div className="row text-light mt-5">
            <h3>Projects</h3>
            <hr />
          <div className="col">
          <img className="one" src={calcuImage2} />
          <h4 className="mt-5">Calculator Project</h4>
          </div>
          <div className="col">
          <img className="two" src={jao3Image} />
          <h4 className="mt-5">My React Project</h4>
          </div>
          <div className="col">
          <img className="three" src={jao4Image} />
          <h4 className="mt-5">Final Frontend Project</h4>
          </div>
          <div className="col">
          <img className="four" src={jao5Image} />
          <h4 className="mt-5">Frontend Project</h4>
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
