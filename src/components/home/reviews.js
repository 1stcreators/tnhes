import React from 'react'
import Star from '../../assets/images/Star.svg';
import reviewicon from '../../assets/images/review_icon.svg';
import Scrollbar from "react-scrollbars-custom";

function Reviews() {


    return (
        <div>
            
           
  <section className="verifiedReviews">
    <div className="container">
      <div className="row">
          <div className="col-md-12">
             <div className="headingTitle text-end"><span className="borderV"></span> Verified Reviews</div>
          </div>

          <div className="col-md-6">
              <img src={reviewicon} />
           </div>

        <div className="col-md-6">
        <Scrollbar className="verticleScrollBarWit" style={{height:700}} noScrollX={true} >
          <div className="reviewBox lightReview">
            <div className="stars">
            <a href="#"><img src={Star} /></a>
            <a href="#"><img src={Star} /></a>
            <a href="#"><img src={Star} /></a>
            <a href="#"><img src={Star} /></a>
            <a href="#"><img src={Star} /></a>
            </div>
            <h2>“It Doesn’t Get Better Than TnHES</h2>
            <p>TnHES has been awesome to work with. They’re very responsive and helpful with any questions or concerns. 
              I can tell they genuinely care about the people and companies they work with and our partnership with FourKites is one that has grown over the last couple of 
              years to be something great for both parties.</p>
              <h3>Anthony Morrison</h3>
          </div>
          <div className="reviewBox lightReview">
            <div className="stars">
            <a href="#"><img src={Star} /></a>
            <a href="#"><img src={Star} /></a>
            <a href="#"><img src={Star} /></a>
            <a href="#"><img src={Star} /></a>
            <a href="#"><img src={Star} /></a>
            </div>
            <h2>“It Doesn’t Get Better Than TnHES</h2>
            <p>TnHES has been awesome to work with. They’re very responsive and helpful with any questions or concerns. 
              I can tell they genuinely care about the people and companies they work with and our partnership with FourKites is one that has grown over the last couple of 
              years to be something great for both parties.</p>
              <h3>Anthony Morrison</h3>
          </div>
          <div className="reviewBox lightReview">
            <div className="stars">
            <a href="#"><img src={Star} /></a>
            <a href="#"><img src={Star} /></a>
            <a href="#"><img src={Star} /></a>
            <a href="#"><img src={Star} /></a>
            <a href="#"><img src={Star} /></a>
            </div>
            <h2>“It Doesn’t Get Better Than TnHES</h2>
            <p>TnHES has been awesome to work with. They’re very responsive and helpful with any questions or concerns. 
              I can tell they genuinely care about the people and companies they work with and our partnership with FourKites is one that has grown over the last couple of 
              years to be something great for both parties.</p>
              <h3>Anthony Morrison</h3>
          </div>
          <div className="reviewBox lightReview">
            <div className="stars">
            <a href="#"><img src={Star} /></a>
            <a href="#"><img src={Star} /></a>
            <a href="#"><img src={Star} /></a>
            <a href="#"><img src={Star} /></a>
            <a href="#"><img src={Star} /></a>
            </div>
            <h2>“It Doesn’t Get Better Than TnHES</h2>
            <p>TnHES has been awesome to work with. They’re very responsive and helpful with any questions or concerns. 
              I can tell they genuinely care about the people and companies they work with and our partnership with FourKites is one that has grown over the last couple of 
              years to be something great for both parties.</p>
              <h3>Anthony Morrison</h3>
          </div>
          </Scrollbar>

        </div>

      </div>
    </div>
  </section>




        </div>
    )
}

export default Reviews;