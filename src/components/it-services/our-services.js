import React from 'react';
import Serviceshelp from '../../assets/images/services_help.png';

function OurServices() {


  return (
    <div>

<section className="aboutBlog darkBg relative">
    <div className="serviceTitle">
      <div className="headingTitle text-end"><span className="borderV"></span>Our IT Services </div>
    </div>
    <div className="container ml-30">
      <div className="row">
        <div className="col-md-5">          
           <h2>Here Are Some Services We Can Help You With</h2>
           <div className="featureContnt serviceHelp">
            <ul>
              <li><span></span>Web Technology</li>
              <p>Far far away, behind the word mountains, far from the countries Vokalia.Far far away, behind the word mountains</p>
            </ul>                
           </div>  
           
           <div className="featureContnt serviceHelp">
            <ul>
              <li><span></span>Cloud Services</li>
              <p>Far far away, behind the word mountains, far from the countries Vokalia.Far far away, behind the word mountains, far from the count</p>
            </ul>      
                       
           </div>  

           <div className="featureContnt serviceHelp">
            <ul>
              <li><span></span>QA & Testing</li>
              <p> Far far away, behind the word mountains, far from the countries Vokalia.</p>
            </ul> 
                     
           </div>  

           <div className="featureContnt serviceHelp">
            <ul>
              <li><span></span>Mobile Application </li>
              <p>Far far away, behind the word mountains, far from the countries Vokalia.Far far away, behind the word mountains, far from the count </p>
            </ul>               
           </div>  
           <div className="featureContnt serviceHelp">
            <ul>
              <li><span></span>SharePoint Solution</li>
              <p> Far far away, behind the word mountains, far from the countries Vokalia.Far far away, behind the word     </p>
            </ul>                  
           </div>  
       
           <div className="featureContnt serviceHelp">
            <ul>
              <li><span></span>SharePoin Capital Market</li>
              <p> Far far away, behind the word mountains, far from the countries Vokalia.   </p>
            </ul>                  
           </div>  
             

        </div>
        <div className="col-md-6">
          <div className="aboutUsImg"><img src={Serviceshelp} alt="" /></div>
        </div>
      </div>
    </div>
  </section>


    </div>
  );
}

export default OurServices;
