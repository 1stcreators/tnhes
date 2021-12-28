import React from 'react'
import experienceicon from '../../assets/images/experience_icon.svg';
import workforce from '../../assets/images/workforce.svg';
import project from '../../assets/images/project.svg';


function Results() {


    return (
        <div>
            
            <section className="resultsSpeak relative">
        <div className="resultsTitle">
          <div className="headingTitle text-end"><span className="borderV"></span>Results that speak  </div>
        </div>
        <div className="container">
          <div className="row">
          <div className="col-lg-4">
            <div className="resultsLeftIcon">
              <div className="resultsSmIcon"><i className="colorBox1"><img src={experienceicon} alt="" /></i></div>
              <div className="resultstSMText">
                <h3>Years of Experience</h3>
                <p>15+ </p>
              </div>              
            </div>
           </div>
           <div className="col-lg-4">
            <div className="resultsLeftIcon">
              <div className="resultsSmIcon"><i className="colorBox2"><img src={workforce} alt=""  /></i></div>
              <div className="resultstSMText">
                <h3>Workforce</h3>
                <p>6,824+ </p>
              </div>              
            </div>
           </div>
           <div className="col-lg-4">
            <div className="resultsLeftIcon">
              <div className="resultsSmIcon"><i className="colorBox3"><img src={project} alt=""  /></i></div>
              <div className="resultstSMText">
                <h3>Project Completed</h3>
                <p> 250+ </p>
              </div>              
            </div>
           </div>
          </div>
          </div>
          </section>

        </div>
    )
}

export default Results;