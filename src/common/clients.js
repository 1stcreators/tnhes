import React from 'react'
import client from '../assets/images/client_img1.png';
import client2 from '../assets/images/client_img2.png';
import client3 from '../assets/images/client_img3.png';
import client4 from '../assets/images/client_img4.png';
import client5 from '../assets/images/client_img5.png';
import client6 from '../assets/images/client_img6.png';


function Clients() {


    return (
        <div>
            
            <section className="ourClients">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="headingTitle"><span className="borderV"></span> Our Valued Clients</div>
      </div>
      <div className="col-md-12">
          <div className="row ourClientBlog">
              <div className="col">
                 <a href="#"><img src={client} /></a> 
              </div>
              <div className="col">
                 <a href="#"><img src={client2} /></a> 
              </div>
              <div className="col">
                 <a href="#"><img src={client3} /></a> 
              </div>
              <div className="col">
                <a href="#"><img src={client4} /></a> 
             </div>
             <div className="col">
              <a href="#"><img src={client5} /></a> 
           </div>
           <div className="col">
            <a href="#"><img src={client6} /></a> 
         </div>
          </div>
      </div>
      </div>
      </div>
      </section>



        </div>
    )
}

export default Clients;