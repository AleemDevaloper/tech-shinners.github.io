import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "../styles/Ui/about.scss";
import { NavLink } from 'react-router-dom';
import client1 from '../images/about/client (1).jpg'
import client2 from '../images/about/client (1).png'
import client3 from '../images/about/client (2).png'
import client4 from '../images/about/client (3).png'
import client5 from '../images/about/client (4).png'
import client6 from '../images/about/client (5).png'
import client7 from '../images/about/client (6).png'
import client8 from '../images/about/client (7).png'
function About() {
  return (
    <div>
      <div className="about">
         <div className="about-bg">
         <div className="container py-5">
                    <div className="col-12 my-5">
                        <div className="text-center">
                        <h1>About <span>Us</span></h1>
                        <NavLink to='/contact'><button className='contact-btn'>Let's Get in Touch</button></NavLink>
                        </div>
                    </div>
                </div>
         </div>
         <div className="container my-5">
        <div className="row">
            <div className="col-12">
              <h1>About Our Work</h1>
            </div>
        </div>
        <div className="row my-2">
            <div className="col-12">
                <p>
                We are living in the hyper modern world; the pace of change is hard-to-catch.
                 The constantly changing world has spurred the enormous growth in all shades of life.</p>
                <p className="my-3 mt-5">
                The internet has evolved as driving fuel of business and patronage.
                 The rapidity & global coverage has made it inevitable; so enterprise relies heavily 
                 on internet/e-commerce for projection and marketing of his goods & services. A 
                 fully loaded smart web site is the primary requirement to cast the solid image of the company and
                 its development calls for in depth knowledge and professional capability of designer.
                </p>
            </div>
        </div>
       </div>


       <div className="container my-5">
        <div className="row">
            <div className="col-12">
              <h1>Web Developers in Pakistan</h1>
            </div>
        </div>
        <div className="row my-2">
            <div className="col-12">
                <p>
                Market is densely mushroomed with web developers who claim to be market leaders,
                 creativity and uniqueness as their ethos. Have you ever noticed that the web is the first and 
                 foremost interaction of a customer to the company which makes this interaction highly persuasive 
                 to win the confidence of reader/visitor? The professional web developer creates that win-win situation 
                 \for both, the client & company. They can impart certain unique value propositions that make your business a unique
                  brand with strong impact.
                 Those unique value propositions may vary to:</p>
                <p className="my-3">
                Firstly, the professional web developer could be in a better position to tap the
                 prevailing trends or for that matter emerging trends. they create a best business bond by 
                 developing your web site on professional lines. 
                They make a website a place of junction for current and future demands.
                </p>
                
                <p className="my-3">
                Second important thing is their capability to grab the attention of visitors which move 
                like a flock of birds and website should have strong bonding power to transpose those visitors 
                into a regular (loyal) customers. 
                The professional web development tries to stamp a strong impression on the visitor.
                </p>

                <p className="my-3">
                Thirdly, web acts like a bridge between company and customer; so both ends could only be
                 bridged up when the sketch/lay out/structure of web site is smart enough.
                  The website should be properly backed up by 
                advance applications and techniques to come up with frugal solutions its valuable customers.
                </p>

                <p className="my-3">
                To be get noticed/roaring is yet another basic attribution of well-crafted website. 
                The low range of appearance would be like half-baked plan which relegates the status of business. 
                The charming and stand-apart appearance is yet another quality aspect, because the low appearance
                 would yield in low business. The blistering/top-up opening on search engine(s) 
                would make it a profiteering corridor for the enterprise.
                </p>

                <p className="my-3">
                he web should be capable enough to accommodate futuristic needs and demands; it requires 
                constant backs for improvements, information updates, maintenance schedules,
                 customer relationship management and keeping stand-apart status intact.
                </p>
            </div>
        </div>
       </div>

       <div className="container my-5">
        <div className="row">
            <div className="col-12 text-center">
              <h1>Our Clients</h1>
              <div className="my-2">
                <h3>We believe our biggest assets are none other than our clients.</h3>
              </div>
            </div>
        </div>
        <div className="row">
          <div className="col-md-3 my-2 d-flex justify-content-center align-items-center flex-column">
            <img src={client1} alt="img"  loading="lazy"/>
          </div>
          <div className="col-md-3 my-2 d-flex justify-content-center align-items-center flex-column">
            <img src={client2} alt="img" loading="lazy" />
          </div>
          <div className="col-md-3 my-2 d-flex justify-content-center align-items-center flex-column">
            <img src={client3} alt="img" loading="lazy" />
          </div>
          <div className="col-md-3 my-2 d-flex justify-content-center align-items-center flex-column">
            <img src={client4} alt="img"  loading="lazy"/>
          </div>
        </div>

        <div className="row">
          <div className="col-md-3 my-2 d-flex justify-content-center align-items-center flex-column">
            <img src={client5} alt="img" loading="lazy" />
          </div>
          <div className="col-md-3 my-2 d-flex justify-content-center align-items-center flex-column">
            <img src={client6} alt="img" loading="lazy" />
          </div>
          <div className="col-md-3 my-2 d-flex justify-content-center align-items-center flex-column">
            <img src={client7} alt="img" loading="lazy" />
          </div>
          <div className="col-md-3 my-2 d-flex justify-content-center align-items-center flex-column">
            <img src={client8} alt="img" loading="lazy" />
          </div>
        </div>
       </div>
       <div className="bg-grey my-5 py-5">
              <div className="container">
                <div className="row">
                  <div className="col-12 d-flex justify-content-center align-items-center flex-column">
                    <h1>Meet our creative and expert team to assist you.</h1>
                      <NavLink to='/contact'><button type="submit" className="my-2">Lets Connect</button></NavLink>
                  </div>
                </div>
            </div>
       </div>
      </div>
      
    </div>
  )
}

export default About
