import React from 'react'
import consultingicon from '../../assets/images/consulting_icon.svg';
import strategiesicon from '../../assets/images/strategies_icon.svg';
import integrationicon from '../../assets/images/integration_icon.svg';
import differentapproach from '../../assets/images/different_approach.png';

function Approach() {


    return (
        <div>
            
            <section className="differentApproach">
    <div className="container">
      <div className="row">
          <div className="col-md-12">
             <div className="headingTitle text-end"><span className="borderV"></span> We has a different approach</div>
          </div>
        <div className="col-md-6">
           <h6>At BrickRed Systems, we believe in unlocking your IT Capabilities
            through our expertise for your advantage</h6>   
            
            <div className="approachLeftIcon">
              <div className="iconDiff"><i><img src={consultingicon} alt="" /></i></div>
              <div className="textDiff">
                <h3>Consulting</h3>
                <p>Good solutions for your business! BrickRed Systems’ global service offers full consultancy options for your real-time and strategic needs.</p>
              </div>              
            </div>

            <div className="approachLeftIcon">
              <div className="iconDiff"><i><img src={strategiesicon} alt="" /></i></div>
              <div className="textDiff">
                <h3>Strategies</h3>
                <p>Use our time to save your money! An effective strategy will contribute to the efficiency, profitability and growth of your organization</p>
              </div>              
            </div>

            <div className="approachLeftIcon">
              <div className="iconDiff"><i><img src={integrationicon} alt="" /></i></div>
              <div className="textDiff">
                <h3>Integration</h3>
                <p>Ideas for growing your business! Successful integration happens when all individual parts are formed into a whole BrickRed Systems.</p>
              </div>              
            </div>

        </div>

        <div className="col-md-6">
         <img src={differentapproach} alt="" />
        </div>

      </div>
    </div>
  </section>



        </div>
    )
}

export default Approach;