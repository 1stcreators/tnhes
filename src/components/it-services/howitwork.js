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
              <h5>Discover</h5>
            <p>Aampe offers easy integrations with several messaging providers. See documentation.</p>
            </div>            
          </div>

          <div className="workDetailBox whireBgColor">
            <div className="workNumberBox"><span>2</span></div>
            <div className="workTextBox">
              <h5>Strategy</h5>
            <p>Aampe offers easy integrations with several messaging providers. See documentation.</p>
            </div>            
          </div>


          <div className="workDetailBox">
            <div className="workNumberBox"><span>3</span></div>
            <div className="workTextBox">
              <h5>Execute</h5>
            <p>Get 100's of messages in minutes with Aampe's content amplifier.</p>
            </div>            
          </div>

          <div className="workDetailBox">
            <div className="workNumberBox"><span>4</span></div>
            <div className="workTextBox">
              <h5>Lunch</h5>
            <p>Aampe automates message sending across channels and iterations based on personalization.</p>
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
