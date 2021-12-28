import React from 'react';
import bannerbg from '../../assets/images/main_slid.svg';
import Approach from './approach';
import Articles from './articles';
import Clients from '../../common/clients';
import FeatureProject from './feature-projects';
import Results from './results';
import Reviews from './reviews';
import Services from './services';

function Home() {


  return (
    <div>


<section className="mainBlog">
     <div className="container">
       <div className="row">
         <div className="col-md-6">
            <h1>We help you in grow</h1>
            <p>All-in-one-shop, this is a way to save your time and money. Although you must already have an objection to it:</p>
            <button className="btn btn-border" type="">Discover more</button>
         </div>
         <div className="col-md-6">
           <img src={bannerbg} alt=""/>
         </div>
       </div>
     </div>
   </section>

   <Services />
   <Approach />
   <FeatureProject />
   <Results />
   <Articles />
   <Reviews />
   <Clients />

    </div>
  );
}

export default Home;
