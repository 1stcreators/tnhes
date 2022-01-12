import React from 'react';
import awesomepeople from '../../assets/images/awesome_people.svg';
import meetourpeople from '../../assets/images/meet_our_people.png';
import arrowslidleft from '../../assets/images/arrow_slid_left.svg';
import arrowslidright from '../../assets/images/arrow_slid_right.svg';
import Send from '../../assets/images/Send.svg';
import Clients from '../../common/clients';

function Career() {


  return (
    <div>


    
   <section class="mainBlog">
     <div class="container">
       <div class="row">
         <div class="col-md-6">
            <h1>Work with awesome people</h1>
            <p>TalentPro provides one of the most advanced and professional staffing solutions in India for temporary, regular staffing. Our access to a large database of staffing.</p>
         </div>
         <div class="col-md-6 text-center">
           <img src={awesomepeople} alt="" />
         </div>
       </div>
     </div>
   </section>

   <section class="indiaBestTemorary">
          <div class="container">     
      <div class="row">
        <div class="col-md-12 text-center"> 
             <h4>Hi, future teammate</h4>
             <p>We are a well-knit team of individuals with a common goal - making all of our products innovative,<br />  appealing, fully efficient, and having fun bringing them to life.</p>
             <button class="btn btn-dark" type="">See All Openings</button>
            </div>
          </div>
     </div>
   </section>


   <section class="ourCulture ">
    <div class="container relative">
      <div class="row">
      <div class="col-md-6 pt-8">
         <h3>Work Hard Play hard</h3>
      </div>

       <div class="col-md-6">
         <div class="featureContnt">
          <ul>
            <li><span></span>Well-Deserved </li>
            <p>Pay We value hard work and make sure the team is covered with competitive pay and benefits.</p>
          </ul>                
       </div>  
       <div class="featureContnt">
        <ul>
          <li><span></span>Vacation Mode </li>
          <p>Our team is composed of ambitious creatives and strategists; each member is dedicated to perfecting their craft and taking brands to the next level. </p>
        </ul>                
     </div>  
     <div class="featureContnt">
      <ul>
        <li><span></span>Health is Wealth</li>
        <p> Every member of our team is genuinely passionate about doing great work for brands we believe in—from global technology giants, to ambitious startups.</p>
      </ul>                
   </div> 
   <div class="featureContnt">
    <ul>
      <li><span></span> Great Atmosphere </li>
      <p> We stand up for what we believe in, but never let ego get in the way. The key to growth is to embrace feedback and from team members and clients.</p>
    </ul>                
 </div>  
 <div class="featureContnt">
  <ul>
    <li><span></span>Operate with Integrity </li>
    <p>  More than skill, drive, or experience, great work is rooted in character; hiring the right people and investing in personal development is essential to our growth.</p>
  </ul>                
</div>  


      </div>
      </div>
      </div>
      </section>


      
  <section class="indiaBestTemorary">
  <div class="container">     
    <div class="row">
      <div class="col-md-12 text-center"> 
        <h4> Meet our people</h4>
      </div>
      </div>
 
      <div class="row relative">
      <div class="col-md-6"> 
        <img class="img" src={meetourpeople} />
      </div>

      <div class="col-md-6 mt-8"> 
        <div class="meetPeopleTextBox">
        <div class="meetPeopleDetails">
        <h6>Our customer retention rate speaks volumes about the quality of the platform and the people I would be working with.</h6>       
          <p class="nameTitle">Rachal Timberlake</p>
          <p class="dcrName">Software Architect</p>         
      </div>

      <div class="arrows">
        <a class="arrLeft" href="#"><img class="img" src={arrowslidleft} alt="arrow" /></a>
        <a class="arrRight" href="#"><img class="img" src={arrowslidright} alt='arrow' /></a>
      </div>     
    </div>
    </div>
  </div>
  </div>
  </section>

<section class="recruitmentProcessBlog">
  <div class="container">
    <div class="row">
    <div class="col-md-12 text-left"> 
      <h4>Recruitment process</h4>
    </div>
  </div>


  <div class="row">
    <div class="col-md-4"> 
    <div class="RecruiProcessBox processPr">
      <h3>01</h3>
      <h5>Application</h5>
      <p>We verify your experience, know-how, and skills. If they fit our assumptions, we give you a call.</p>
    </div>
    </div>

    <div class="col-md-4"> 
      <div class="RecruiProcessBox processPr">
        <h3>02</h3>
        <h5>Conversation</h5>
        <p>We verify your experience, know-how, and skills. If they fit our assumptions, we give you a call.</p>
      </div>
      </div>

      <div class="col-md-4"> 
        <div class="RecruiProcessBox processPr">
          <h3>03</h3>
          <h5>Technology</h5>
          <p>We verify your experience, know-how, and skills. If they fit our assumptions, we give you a call.</p>
        </div>
        </div>

        <div class="col-md-4"> 
          <div class="RecruiProcessBox processPl">
            <h3>04</h3>
            <h5>Feedback</h5>
            <p>We verify your experience, know-how, and skills. If they fit our assumptions, we give you a call.</p>
          </div>
          </div>

          <div class="col-md-4"> 
            <div class="RecruiProcessBox processPl">
              <h3>05</h3>
              <h5>Employment</h5>
              <p>We verify your experience, know-how, and skills. If they fit our assumptions, we give you a call.</p>
            </div>
            </div>

            <div class="col-md-4"> 
              <div class="RecruiProcessBox processPl">
                <h3>06</h3>
                <h5>Onboarding</h5>
                <p>We verify your experience, know-how, and skills. If they fit our assumptions, we give you a call.</p>
              </div>
              </div>
    </div>

</div>
</section>





        <section class="availableJobBg darkBg relative pr-0">
          <div class="container-full ml-30">
            <div class="row">
              <h2 class="mb-5">Available jobs <span>(35) </span></h2>    
              <div class="col-md-5">                
                <div class="availablejobs">
                  <ul>
                    <li><span></span>Well-Deserved  <b> (5)</b> </li>
                    <li><span></span>Recruitment Specialist  <b> (5)</b> </li>
                    <li><span></span>Project Manager  <b> (5)</b> </li>
                    <li><span></span>PHP Developer  <b> (5)</b> </li>
                    <li><span></span>Fullstack PHP/Angular Developer  <b> (5)</b> </li>
                    <li><span></span>Angular Developer  <b> (5)</b> </li>
                    <li><span></span>iOS Developer  <b> (5)</b> </li>
                    <li><span></span>Java Developer  <b> (5)</b> </li>
                    <li><span></span>Front-end Developer  <b> (5)</b> </li>
                    <li><span></span>Flutter Developer  <b> (5)</b> </li>
                    <li><span></span>Angular Developer  <b> (5)</b> </li>
                  </ul>                
               </div>
      
              </div>
              <div class="col-md-7 pr-0">
                <div class="availableSelectBoxs">
                   <ul>
                     <li class="active"><a href="#">All</a></li>
                     <li class="w-100"></li>
                    <li><a href="#">Security </a></li>
                     <li><a href="#">Cloud</a></li>
                     <li><a href="#">Backend</a></li>
                     <li><a href="#">Business</a></li>
                     <li class="w-100"></li>
                     <li ><a href="#">HR</a></li>
                     <li><a href="#">Design</a></li>
                     <li><a href="#">Frontend</a></li>
                     <li><a href="#">QA</a></li>
                     <li class="w-100 "></li>
                     <li><a href="#">Admin</a></li>
                     <li><a href="#">Mobile</a></li>
                     
                   </ul>
                </div>
                <h4>Haven't found <br /> an offer for you?</h4>
                <h5>Let us know <a href="#"><img src={Send} alt='Send' /></a> </h5>
              </div>
            </div>
          </div>
        </section>





   <Clients />

    </div>
  );
}

export default Career;
