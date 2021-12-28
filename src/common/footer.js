import React from 'react';

import logo from '../../src/assets/images/logo.svg';
import Appstore from '../../src/assets/images/app_store.svg';
import Googleplay from '../../src/assets/images/google_play.svg';
import Facebook from '../../src/assets/images/facebook_white.svg';
import Twitter from '../../src/assets/images/twitter_white.svg';
import Invision from '../../src/assets/images/invision_white.svg';

function Footer() {
  return (
    

<footer>
   <div className="ftMainDiv">
    <div className="ftBlogLeft">
        <div className="container">
            <div className="row">
                <div className="col-sm-12">
                    <div className="ftLogo"><img src={logo} alt="" /></div> 
                    <h3>All your needs just in one app.</h3>
                    <a href="#"><img src={Appstore} alt=""/></a>
                    <a href="#"><img src={Googleplay} alt=""/></a>
                </div> 
            </div>       
        </div>
    </div>

    <div className="ftBlogRight">
      <div className="row">
        <div className="col-sm-3">
      <ul>
        <li><p>4299 Grasselli Street Derry, NH 03038</p></li>
        <li><a href="#">07704 467 741 </a></li>
        <li><a href="#">admin@tnh.com </a></li>
        <li>
          <a href="#"> <img src={Facebook} alt=""/></a>
          <a href="#"> <img src={Twitter} alt=""/></a>
          <a href="#"> <img src={Invision} alt=""/></a>
        </li>
      </ul>
    </div>
    <div className="col-sm-3">
      <ul>
        <li><a href="#">Home </a></li>
        <li><a href="#">IT Services </a></li>
        <li><a href="#">Mechanical  Work </a></li>
        <li><a href="#"> Staffing Services </a></li>
        <li><a href="#">About Us</a></li>
      </ul>
    </div>
    <div className="col-sm-3">
      <ul>
        <li><a href="#"> Privacy Policy </a></li>
        <li><a href="#">FAQ </a></li>
        <li><a href="#">Terms Of Use  </a></li>
           
      </ul>
    </div>
    <div className="col-sm-3">
      <ul>
        <li><a href="#">India </a></li>
        <li><a href="#">US </a></li>
        <li><a href="#">UK </a></li>
        <li><a href="#">  South </a></li>
        <li><a href="#">Africa</a></li>             
      </ul>
    </div>
  </div>
</div>
</div>

    <div className="footerCopyRight">
       <p>© 2021 - 2021 tnh.com, All Rights Reserved.</p>
    </div>

</footer>


        
  );
}

export default Footer;
