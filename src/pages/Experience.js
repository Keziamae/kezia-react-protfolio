import "./Experience.css";
import Navbar from "./Navbar";
import boy2Image from "./img/achievement1.jpeg"
import boy1Image from "./img/achievements 2 (1).jpg"
import boy3Image from "./img/achievements 2 (2).jpg"
import jov2Image from "./img/thesis2.png"
import jov1Image from "./img/thesis1.png"
import jov3Image from "./img/thesis3.png"
import oms2Image from "./img/oojt1.jpeg"
import oms1Image from "./img/oojt2.jpeg"
import oms3Image from "./img/oojt3.jpeg"
import oms4Image from "./img/pm1.jpeg"
import oms5Image from "./img/pm2.jpeg"
import oms6Image from "./img/pm3.jpeg"
import oms7Image from "./img/pm4.jpeg"
import oms8Image from "./img/pm5.jpeg"
import oms9Image from "./img/pm6.jpeg"
import oms10Image from "./img/pm7.jpeg"

const Experience = () => {
  return (
    <>
      <Navbar />
      <div id="experience-info" className="bg-danger">
        <div className="container-fluid mt-5">
          <div className="row">
            <div className="col">
              <h1 className="fw-bold display-1 text-center mt-5 pt-5">
                Experience
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="exp">
        <div className="container">
          <hr />
          <div className="row mb-5">
            <h3 className=" text-light text-center">ON-THE JOB TRAINING</h3>
            <hr />
            <div className="col-lg-4">
              <img className="two" src={oms2Image} />
              <h4>Editing Photo Manipulation</h4>
            </div>
            <div className="col-lg-4">
              <img className="one" src={oms1Image} />
              <h4>Observing the machine printing the tarpaulin.</h4>
            </div>
            <div className="col-lg-4">
              <img className="three" src={oms3Image} />
              <h4>With our boss.</h4>
            </div>
            <div className="col-lg-4">
              <img className="three" src={oms4Image} />
              <h4>Editing a jersey sublimation with my desired photo.</h4>
            </div>
            <div className="col-lg-4">
              <img className="three" src={oms5Image} />
              <h4>Photo Manipulation with a girl inside a boat besides the moon.</h4>
            </div>
            <div className="col-lg-4">
              <img className="three" src={oms6Image} />
              <h4>Photo Manipulation of a girl with mermaid scales.</h4>
            </div>
            <div className="col-lg-4">
              <img className="three" src={oms7Image} />
              <h4>Photo Manipulation of a person on the truck.</h4>
            </div>
            <div className="col-lg-4">
              <img className="three" src={oms8Image} />
              <h4>Photo Manipulation of a cat looking at glowing butterfly.</h4>
            </div>
            <div className="col-lg-4">
              <img className="three" src={oms9Image} />
              <h4>Photo Manipulation of a wizard hermoine in Harry Potter.</h4>
            </div>
            <div className="col-lg-4">
              <img className="three" src={oms10Image} />
              <h4>Photo Manipulation</h4>
            </div>
          </div>
          <hr />
          <div className="row mb-5">
            <h3 className=" text-light text-center">THESIS/CAPSTONE</h3>
            <hr />
            <div className="col-lg-4">
              <img className="two" src={jov1Image} />
              <h4>This is our Homepage of the System</h4>
            </div>
            <div className="col-lg-4">
              <img className="one" src={jov3Image} />
              <h4>Sign up or create account</h4>
            </div>
            <div className="col-lg-4">
              <img className="three" src={jov2Image} />
              <h4>This is our dashboard </h4>
            </div>
          </div>
          <hr />
          <div className="row mb-5">
            <h3 className=" text-light text-center">ACHIEVEMENTS</h3>
            <hr />
            <div className="col-lg-4">
              <img className="two" src={boy2Image} />
              <h4>Attending a 2024 colloquium, achievement for supporting a friend.</h4>
            </div>
            <div className="col-lg-4">
              <img className="one" src={boy1Image} />
              <h4>Certificate of Completion during Internship</h4>
            </div>
            <div className="col-lg-4">
              <img className="three" src={boy3Image} />
              <h4>Our bookbound capstone project. </h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
