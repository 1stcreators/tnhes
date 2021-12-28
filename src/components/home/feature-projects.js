import React from 'react'
import featureprojects from '../../assets/images/feature_projects.png';

import { Controller, Scene } from 'react-scrollmagic';

function FeatureProject() {
  
    return (
        <div>
            
        <Controller globalSceneOptions={{ triggerHook: 'onLeave' }}>
<Scene  duration={600} pin={true} enabled={true}>
<div className="featureProjects">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="headingTitle"><span className="borderV"></span> Feature Projects</div>
      </div>
      <div className="col-md-6">
        <div className="featureImg">
        <img src={featureprojects} />
      </div>
       </div>

       <div className="col-md-6 ">
         <div className="featureContnt">
        <h2>22 Bishopsgate</h2>
        <span className="subtitle"> London, England, UK </span>
        <p>Once the works are procured through tender or negotiation, we immediately undertake although risk analysis and prepare a comprehensive construction program, 
          detailed scopes on works are agreed and letting of contracts commences according to the critical path and risk requirements.</p>
        <ul>
          <li><span></span> Couslting Services</li>
          <li><span></span> Staffing Services</li>
          <li><span></span> Engineering Services</li>
        </ul>
        <button className="btn btn-border" type="">View Project</button>
       </div>  
      </div>
      </div>
      </div>
      </div>
</Scene>
<Scene  duration={600} pin={true} enabled={true}>
<div className="featureProjects">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="headingTitle"><span className="borderV"></span> Feature Projects</div>
      </div>
      <div className="col-md-6">
        <div className="featureImg">
        <img src={featureprojects} />
      </div>
       </div>

       <div className="col-md-6 ">
         <div className="featureContnt">
        <h2>23 Bishopsgate</h2>
        <span className="subtitle"> London, England, UK </span>
        <p>Once the works are procured through tender or negotiation, we immediately undertake although risk analysis and prepare a comprehensive construction program, 
          detailed scopes on works are agreed and letting of contracts commences according to the critical path and risk requirements.</p>
        <ul>
          <li><span></span> Couslting Services</li>
          <li><span></span> Staffing Services</li>
          <li><span></span> Engineering Services</li>
        </ul>
        <button className="btn btn-border" type="">View Project</button>
       </div>  
      </div>
      </div>
      </div>
      </div>
</Scene>
<Scene  duration={600} pin={true} enabled={true}>
<div className="featureProjects">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="headingTitle"><span className="borderV"></span> Feature Projects</div>
      </div>
      <div className="col-md-6">
        <div className="featureImg">
        <img src={featureprojects} />
      </div>
       </div>

       <div className="col-md-6 ">
         <div className="featureContnt">
        <h2>24 Bishopsgate</h2>
        <span className="subtitle"> London, England, UK </span>
        <p>Once the works are procured through tender or negotiation, we immediately undertake although risk analysis and prepare a comprehensive construction program, 
          detailed scopes on works are agreed and letting of contracts commences according to the critical path and risk requirements.</p>
        <ul>
          <li><span></span> Couslting Services</li>
          <li><span></span> Staffing Services</li>
          <li><span></span> Engineering Services</li>
        </ul>
        <button className="btn btn-border" type="">View Project</button>
       </div>  
      </div>
      </div>
      </div>
      </div>
</Scene>
<Scene  duration={600} pin={true} enabled={true}>
<div className="featureProjects">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="headingTitle"><span className="borderV"></span> Feature Projects</div>
      </div>
      <div className="col-md-6">
        <div className="featureImg">
        <img src={featureprojects} />
      </div>
       </div>

       <div className="col-md-6 ">
         <div className="featureContnt">
        <h2>25 Bishopsgate</h2>
        <span className="subtitle"> London, England, UK </span>
        <p>Once the works are procured through tender or negotiation, we immediately undertake although risk analysis and prepare a comprehensive construction program, 
          detailed scopes on works are agreed and letting of contracts commences according to the critical path and risk requirements.</p>
        <ul>
          <li><span></span> Couslting Services</li>
          <li><span></span> Staffing Services</li>
          <li><span></span> Engineering Services</li>
        </ul>
        <button className="btn btn-border" type="">View Project</button>
       </div>  
      </div>
      </div>
      </div>
      </div>
</Scene>
</Controller>    




        </div>
    )
}

export default FeatureProject;