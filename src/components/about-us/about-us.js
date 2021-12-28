import React from 'react';
import bannerbg from '../../assets/images/about_us.svg';
import aboutAampe from '../../assets/images/about_us.png';
import featureprojects from '../../assets/images/feature_projects.png';
import ourleader from '../../assets/images/our_leader.jpg';
import Clients from '../../common/clients';

function AboutUs() {


  return (
    <div>

<section className="mainBlog">
     <div className="container">
       <div className="row">
         <div className="col-md-6">
            <h1>Want to know about us ?</h1>
            <p>All-in-one-shop, this is a way to save your time and money. Although you must already have an objection to it:</p>
         </div>
         <div className="col-md-6">
           <img src={bannerbg} alt="" />
         </div>
       </div>
     </div>
   </section>

<section className="aboutBlog darkBg relative">
    <div className="serviceTitle">
      <div className="headingTitle text-end"><span className="borderV"></span>About Us </div>
    </div>
    <div className="container ml-30">
      <div className="row">
        <div className="col-md-5">          
           <h2>About Aampe, in short</h2>
           <p>Aampe is an experimentation layer for a company’s communication stack. Aampe’s APIs enable its customers to learn user preferences 
             (true personalization) through communication. It automates the otherwise manual content creation, experimental design, conversion tracking, 
             and ongoing iterations. Aampe continuously tests different message strategies to understand which attributes drive customer engagement. Check 
             out our blog to learn more. Aampe was started by experts in data science, data engineering, human behavior, and product development. We are a small, funded, seed-round company looking to scale the offering.
              (And we love our investors!) We have a supportive culture focused on execution.</p>          
        </div>
        <div className="col-md-6">
          <div className="aboutUsImg"><img src={aboutAampe} alt="" /></div>
        </div>
      </div>
    </div>
  </section>






  <section className="featureProjects transparentBg">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="headingTitle"><span className="borderV"></span> What we do</div>
      </div>
      <div className="col-md-6 mb-5">
        <div className="featureImg">
        <img src={featureprojects} />
      </div>
       </div>

       <div className="col-md-6 mb-5">
         <div className="featureContnt">
        <h2>IT Services</h2>
        <p>Once the works are procured through tender or negotiation, we immediately undertake although risk analysis and prepare a comprehensive construction program, 
          detailed scopes on works are agreed and letting of contracts commences according to the critical path and risk requirements.Once the works are procured
           through tender or negotiation, we immediately undertake although risk analysis and prepare a comprehensive construction program, detailed scopes on works are 
          agreed and letting of contracts commences according to the critical path and risk requirements.</p>
        <button className="btn btn-border" type="">Know More</button>
       </div>  
      </div>
      </div>

      <div className="row">     
       <div className="col-md-6 mb-5">
         <div className="featureContnt">
        <h2>Staffing Soluction</h2>
        <p>Once the works are procured through tender or negotiation, we immediately undertake although risk analysis and prepare a comprehensive construction program, detailed scopes on works are agreed 
          and letting of contracts commences according to the critical path and risk requirements.</p>
        <button className="btn btn-border" type="">Know More</button>
       </div>  
      </div>
      <div className="col-md-6 mb-5">
        <div className="featureImg">
        <img src={featureprojects} />
      </div>
       </div>
      </div>

      <div className="row">
        <div className="col-md-12">
          <div className="headingTitle"><span className="borderV"></span> What we do</div>
      </div>
      <div className="col-md-6 mb-5">
        <div className="featureImg">
        <img src={featureprojects} />
      </div>
       </div>

       <div className="col-md-6 mb-5">
         <div className="featureContnt">
        <h2> Mechanical Work</h2>
        <p>Once the works are procured through tender or negotiation, we immediately undertake although risk analysis and prepare a comprehensive construction program, detailed scopes 
          on works are agreed and letting of contracts commences according to the critical path and risk requirements.</p>
        <button className="btn btn-border" type="">Know More</button>
       </div>  
      </div>


      </div>
</div>   
   </section>


      
  <section className="ourLeader">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="headingTitle"><span className="borderV"></span> Our Leader</div>
      </div>
      <div className="col-md-4">
        <img src={ourleader} />
      </div>

       <div className="col-md-8">
         <div className="featureContnt">
        <h2>Ajitender Vijay</h2>
        <p>Once the works are procured through tender or negotiation, we immediately undertake although risk analysis and prepare a comprehensive
           construction program, detailed scopes on works are agreed and letting of contracts commences according to the critical path and risk 
           requirements.Once the works are procured through tender or negotiation, we immediately undertake although risk analysis and prepare a 
           comprehensive construction program, detailed scopes on works are agreed and letting of contracts commences according to the critical path
            and risk requirements.Once the works are procured through tender or negotiation, we immediately undertake although risk analysis and prepare 
            a comprehensive construction program, 
          detailed scopes on works are agreed and letting of contracts commences according to the critical path and risk requirements.</p>

          <p>Once the works are procured through tender or negotiation, we immediately undertake although risk analysis and prepare a 
            comprehensive construction program, detailed scopes on works are agreed and letting of contracts commences according to the critical path and risk
             requirements.Once the works are procured through tender or negotiation, we immediately.</p>
              
       </div>  
      </div>
      </div>
      </div>
      </section>

      <section className="ourCulture">
        <div className="container posRel">
          <div className="row">
            {/* <div className="col-md-12">
              <div className="headingTitle"><span className="borderV"></span> Our Culture, value, and beliefs</div>
          </div> */}
          <div className="col-md-6">
             <h3 className='CVBHeadingTOpPadding' >Our Culture, value, and beliefs</h3>
          </div>
    
           <div className="col-md-6">
             <div className="featureContnt">
              <ul>
                <li><span></span> Forward-Thinking</li>
                <p>We pride ourselves on pushing the boundaries of digital design and development. We combine relevant trends and best practices to build platforms with longevity.</p>
              </ul>                
           </div>  
           <div className="featureContnt">
            <ul>
              <li><span></span>Constant Growth </li>
              <p>Our team is composed of ambitious creatives and strategists; each member is dedicated to perfecting their craft and taking brands to the next level.</p>
            </ul>                
         </div>  
         <div className="featureContnt">
          <ul>
            <li><span></span>Pure Passion</li>
            <p> Every member of our team is genuinely passionate about doing great work for brands we believe in—from global technology giants, to ambitious startups.</p>
          </ul>                
       </div> 
       <div className="featureContnt">
        <ul>
          <li><span></span> Stay Humble</li>
          <p>  We stand up for what we believe in, but never let ego get in the way. The key to growth is to embrace feedback and from team members and clients.</p>
        </ul>                
     </div>  
     <div className="featureContnt">
      <ul>
        <li><span></span>Great Character</li>
        <p>  More than skill, drive, or experience, great work is rooted in character; hiring the right people and investing in personal development is essential to our growth.</p>
      </ul>                
   </div>  
   
   
          </div>
          </div>
          </div>
          </section>

   
   <Clients />

    </div>
  );
}

export default AboutUs;
