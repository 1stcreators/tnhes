import React from 'react'
import servicerightarrow from '../../assets/images/service_right_arrow.svg';

function Services() {


    return (
        <div>
            
            <section className="serviceBlog darkBg relative">
                <div className="serviceTitle">
                <div className="headingTitle text-end"><span className="borderV"></span>Services </div>
                </div>
                <div className="container ml-30">
                <div className="row">
                    <div className="col-md-5">          
                    <h2>Services we can help you with.</h2>
                    <p>A UI UX design company that is transforming and scaling businesses successfully through its services</p>          
                    </div>
                    <div className="col-md-6">
                        <a href="#" className="serviceBox greenBg">
                            <p>IT Services <span><img src={servicerightarrow} alt=""/></span></p>
                        </a>
                        <a href="#" className="serviceBox blueBg">
                            <p>Mechanical Services <span><img src={servicerightarrow} alt=""/></span></p>
                        </a>
                        <a href="#"  className="serviceBox orgBg">
                            <p>Staffing Services <span><img src={servicerightarrow} alt=""/></span></p>
                        </a>
                    </div>
                </div>
                </div>
            </section>


        </div>
    )
}

export default Services;