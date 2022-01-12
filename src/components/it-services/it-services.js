import React from 'react';
import bannerbg from '../../assets/images/services.svg';
import Clients from '../../common/clients';
import Industriesweserve from './Industriesweserve';
import Howitwork from './howitwork';
import OurServices from './our-services';
import TechnologiesweUse from './technologiesweuse';

function ItServices() {


  return (
    <div>


<section className="mainBlog">
     <div className="container">
       <div className="row">
         <div className="col-md-6">
            <h1>Push brands forward .</h1>
            <p>We help you to push your brand forward. If you are looking to grow a business or build your brand, you need to start thinking about expanding beyond its present limits.

</p>

         </div>
         <div className="col-md-6">
           <img src={bannerbg} alt=""/>
         </div>
       </div>
     </div>
   </section>

   <OurServices />
   <Howitwork />
   <TechnologiesweUse />
   <Industriesweserve />
   
   <Clients />

    </div>
  );
}

export default ItServices;
