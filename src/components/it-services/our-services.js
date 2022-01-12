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
           <h2>Here are some services we can help you with</h2>
           <div className="featureContnt serviceHelp">
            <ul>
              <li><span></span>Web Technology</li>
              <p>We specialize in providing web technology services that enable our clients in different business fields to succeed.</p>
            </ul>                
           </div>  
           
           <div className="featureContnt serviceHelp">
            <ul>
              <li><span></span>Cloud services</li>
              <p>We develop softwares that makes it easy for any business to interface with the cloud and take advantage of all its features.</p>
            </ul>      
                       
           </div>  

           <div className="featureContnt serviceHelp">
            <ul>
              <li><span></span>Mobile application development</li>
              <p>We at TNH build mobile applications for iOS and Android devices. Our expert team also developed a hybrid application made with HTML5, CSS3, JavaScript, and Phonegap.</p>
            </ul> 
                     
           </div>  

           <div className="featureContnt serviceHelp">
            <ul>
              <li><span></span>Website development </li>
              <p>Do You Want Us To Develop A Website For Your Business? So, you are at the right place. We ensure to optimize your website for both search engines and people. </p>
            </ul>               
           </div>  
           <div className="featureContnt serviceHelp">
            <ul>
              <li><span></span>Digital Strategy and Analytics</li>
              <p> Digital Strategy is a set of integrated components and design principles which work together to create an effective digital presence for a company or product. If you are looking for Digital Strategy and Analytics to help your business grow, get in touch with us.   </p>
            </ul>                  
           </div>  
       
           <div className="featureContnt serviceHelp">
            <ul>
              <li><span></span>Staffing Services</li>
              <p>TNH has a specialized staffing service, a team of professional human resource consultants. We can help you find the right people for your business, and once you have them, we can help you train them to be even better.</p>
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
