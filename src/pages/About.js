import "./About.css";
import Navbar from "./Navbar";
import myImage from "./img/kezia2.jpg"

const About = () => {
  return (
    <>
      <Navbar />
      <div id="about-info" className="bg-danger">
        <div className="container-fluid mt-5">
          <div className="row">
            <div className="col">
              <h1 className="fw-bold display-1 text-center mt-5 pt-5">
                About
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div id="about">
        <div className="container">
          <div className="col">
            <div className="card shadow p-5 ">
              <div className="row">
              <div className="col-lg-4">
              <center><img src={myImage} /></center>
              </div>
              <div className="col-lg-8">
                <div className="card box shadow mb-3 p-3">
                <h4 className="text-dark"><span>About Me</span></h4>
              <p> This is Kezia Mae D. Getacay, 22 years of age. I am undertaking a Batchelor of Science Information Technology (BSIT) at Central Philippines Sate University (CPSU).</p>
              <p>I am an enthusiast of BTS and Blackpink, and I admire Taylor's work. I enjoy watching a variety of content including K-dramas, anime, diverse movies, and cartoons that capture my interest. I am perfectly drawn to genres such as thriller, mystery, horror, fantasy, and action, and I am less inclined towards romance.
 </p>
                </div>
                <div className="card box shadow p-3">
                <h4 className="text-dark"><span>Academic Achievements</span> </h4>
              <p> Primary: Tabugon Elementary School S.Y 2013<br /> Secondary: Tabugon National High School S.Y 2017 <br />Senior High: Tabugon National High School S.Y 2020 <br />Tertiary: Central Philippines State University-Main Campus S.Y 2024</p>
              <p> </p>
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

export default About;
