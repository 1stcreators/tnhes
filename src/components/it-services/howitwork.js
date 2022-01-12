import React from 'react';
import Howitworkimg from '../../assets/images/work.svg';

function Howitwork() {


  return (
    <div>
          <section className="howWork"> 
    <div className="container">
      <div className="row">
        <div className="col-md-12 text-center">
          <h2>How does it work?</h2>
        </div>
      </div>
      
      <div className="row">

        <div className="col-md-6">
          <div className="howWorkImg"> <img src={Howitworkimg} /></div>
        </div>

        <div className="col-md-6">
          <div className="workDetailBox">
            <div className="workNumberBox"><span>1</span></div>
            <div className="workTextBox">
              <h5>Search</h5>
            <p>We discover the best staff and services for you.</p>
            </div>            
          </div>

          <div className="workDetailBox">
            <div className="workNumberBox"><span>2</span></div>
            <div className="workTextBox">
              <h5>Plan</h5>
            <p>We then make a plan to how to grow your business,</p>
            </div>            
          </div>


          <div className="workDetailBox">
            <div className="workNumberBox"><span>3</span></div>
            <div className="workTextBox">
              <h5>Proceed</h5>
            <p>We proceed to follow our strategies.</p>
            </div>            
          </div>

          <div className="workDetailBox">
            <div className="workNumberBox"><span>4</span></div>
            <div className="workTextBox">
              <h5>Final launch</h5>
            <p>Finally, we launch your brand to build your business.</p>
            </div>            
          </div>


        </div>

      </div>

    </div>
  </section>

    </div>
  );
}

export default Howitwork;
