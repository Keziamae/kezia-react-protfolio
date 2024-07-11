import "./Home.css";
import Navbar from "./Navbar";

import myImage from "./img/keziahhh-removebg-preview (1).png"

const Home = () => {
  return (
    <>
      <Navbar />



      <div className="wrapper">
        <div className="overlay">
          <div className="container1">

            <div id="home-info" >
              <ul class="circles">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>

              <div className="container mt-5">
                <div className="row ok">
                  <div className="col-lg-6">
                    <div className="card fordz">
                      <img src={myImage} />
                    </div>
                  </div>
                  <div className="col-lg-6 fordz">
                    <div className="card">
                      <h2 className=" fw-bold display-3 text-center text-light mb-5">
                        Salutations! <br /> This is Kezia Mae D. Getacay
                      </h2>
                      <h4 className=" text-light text-center mt-5">"Those who continually acquire new skills and creatively integrate them will shape the future."</h4>
                      <center>
                        <a href="/about" className="btn shadow mt-5">
                          Next
                        </a>
                      </center>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
