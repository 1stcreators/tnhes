import React from 'react';
import Tech1 from '../../assets/images/technologies_1.svg';
import Tech2 from '../../assets/images/technologies_2.svg';
import Tech3 from '../../assets/images/technologies_3.svg';
import Tech4 from '../../assets/images/technologies_4.svg';
import Tech5 from '../../assets/images/technologies_5.svg';
import Tech6 from '../../assets/images/technologies_6.svg';

function TechnologiesweUse() {


  return (
    <div>
        
  <section className="technologiesUse">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="headingTitle"><span className="borderV"></span> Technologies we Use</div>
      </div>
      <div className="col-md-12">
          <div className="row technologiesBlog">
              <div className="col">
                 <a href="#"><img src={Tech1} /></a> 
              </div>
              <div className="col">
                 <a href="#"><img src={Tech2} /></a> 
              </div>
              <div className="col">
                 <a href="#"><img src={Tech3} /></a> 
              </div>
              <div className="col">
                <a href="#"><img src={Tech4} /></a> 
             </div>
             <div className="col">
              <a href="#"><img src={Tech5} /></a> 
           </div>
           <div className="col">
            <a href="#"><img src={Tech6} /></a> 
         </div>
          </div>
      </div>
      </div>
      </div>
      </section>

    </div>
  );
}

export default TechnologiesweUse;
