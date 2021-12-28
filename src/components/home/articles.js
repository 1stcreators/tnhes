import React from 'react'
import art1 from '../../assets/images/a1.png';
import art2 from '../../assets/images/a2.png';
import Scrollbar from "react-scrollbars-custom";

function Articles() {


    return (
        <div>
       

            
            <section className="latestArticles articlesLightBg relative">
            <div className="articlesTitle">
              <div className="headingTitle text-end"><span className="borderV"></span>Latest Articles </div>
            </div>
            <Scrollbar className="scrollContainer" style={{height:650}} noScrollY={true} >
            <div className="scrollOuter">
              
              <div className="articleBox">
                <div className="latestArticlesBlog">
                  <div className="articlesgImg"><img src={art1} />
                    <a href="#" className="viewProject">View Project</a>
                  </div>
                  <p>Technology as a Catalyst for Empowering Communities</p>
                </div>
               </div>

               <div className="articleBox">
                <div className="latestArticlesBlog">
                  <div className="articlesgImg"><img src={art2} />
                    <a href="#" className="viewProject">View Project</a>
                  </div>
                  <p>The TnhesWay</p>
                </div>
               </div>

               <div className="articleBox">
                <div className="latestArticlesBlog">
                  <div className="articlesgImg"><img src={art1} />
                  <a href="#" className="viewProject">View Project</a>
                  </div>
                  <p>SBWS™: A New Work Order for the New World</p>
                </div>
               </div>

               <div className="articleBox">
                <div className="latestArticlesBlog">
                  <div className="articlesgImg"><img src={art1} />
                  <a href="#" className="viewProject">View Project</a>
                  </div>
                  <p>SBWS™: A New Work Order for the New World</p>
                </div>
               </div>

               <div className="articleBox">
                <div className="latestArticlesBlog">
                  <div className="articlesgImg"><img src={art1} />
                  <a href="#" className="viewProject">View Project</a>
                  </div>
                  <p>SBWS™: A New Work Order for the New World</p>
                </div>
               </div>
               
              </div>
          </Scrollbar>
              </section>



        </div>
    )
}

export default Articles;