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
            <p>Tnhes is the only solution that gives you true end-to-end, real-time visibility with predictive ETAs and real-time status for shipments

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
