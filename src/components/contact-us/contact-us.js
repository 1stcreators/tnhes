import React from 'react';
import makefuture from '../../assets/images/make_future.svg';
import lettalk from '../../assets/images/Let_talk.svg';
import Clients from '../../common/clients';

function ContactUs() {


  return (
    <div>

<section className="mainBlog">
     <div className="container">
       <div className="row">
         <div className="col-md-6">
            <h1>Make future together</h1>
            <p>TalentPro provides one of the most advanced and professional staffing solutions in India for temporary, regular staffing. Our access to a large database of staffing.</p>
         </div>
         <div className="col-md-6 text-center">
           <img src={makefuture} alt="" />
         </div>
       </div>
     </div>
   </section>

   <section className="indiaBestTemorary">
          <div className="container">     
      <div className="row">
        <div className="col-md-12 text-center"> 
             <h4>Let's create progress together</h4>

            </div>
          </div>

          
          <div className="row">
          <div className="col-md-4">
            <div className="contactDetails">
              <h3>For general enquiries </h3>
              <p>
              <a href="#">Hello@tnhes.com</a>
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="contactDetails">
              <h3>For Career  </h3>
              <p>
              <a href="#">career@tnhes.com</a>
              </p>
            </div>
          </div>


          <div className="col-md-4">
            <div className="contactDetails">
              <h3>For Partnership </h3>
              <p>
              <a href="#">partnership@tnhes.com</a>
              </p>
            </div>
          </div>
</div>



      <form className="contactUs">
      <div className="row">
      <div className="col-md-6">
        <div className="mb-3">
          <input type="text" className="form-control" id="" placeholder="Name" />
        </div>
      </div>
      <div className="col-md-6">
        <div className="mb-3">
          <input type="text" className="form-control" id="" placeholder="Email" />
        </div>
      </div>
      <div className="col-md-6">
        <div className="mb-3">
          <input type="text" className="form-control" id="" placeholder="Company name" />
        </div>
      </div>
      <div className="col-md-6">
        <div className="mb-3">
          <input type="text" className="form-control" id="" placeholder="Phone Number" />
        </div>
      </div>
      <div className="col-md-12">
        <div className="mb-3">
          <textarea className="form-control" rows="1" id="" name="text" placeholder="Message"></textarea>
        </div>
      </div>
      <div className="col-md-12">
        <div className="mb-3 mt-3">
          <button className="btn btn-dark" type="">Sumit</button>
        </div>
      </div>
      </div>
    </form>


     </div>
   </section>








        <section className="availableJobBg darkBg relative pr-0">
          <div className="container-full ml-30">
            <div className="row">  
              <div className="col-md-5 pt-5">   
                <div className="letTalk">        
                <h4>Let's talk!</h4>
                <h5><a href="#"> 07704 467 741</a> </h5>
                <h5><a href="#"> @tnhes</a> </h5>
              </div> 
              </div>
              <div className="col-md-7 pr-0">               
                <img src={lettalk} alt="" />
              </div>

            </div>
          </div>
        </section>



   
   <Clients />

    </div>
  );
}

export default ContactUs;
