import '../styles/components/fotter.scss';
import { NavLink } from 'react-router-dom';
import logo from '../images/tech.png'
function Footer() {
  return (
    <div>
      <footer>
        <div className="footer-up">
          <div className="container-sm py-4">
            <div className="row my-4">
             {/* footer company detials section is this  */}
              <div className="col-lg-6">
                {/* footer logo  */}
                <div className="row">
                  <div className="col-12">
                    <img src={logo} alt="img logo" loading='lazy'/>
                  </div>
                </div>

                {/* company detials  */}
                <div className="row">
                  <div className="col-12">
                    <h5>WEBSITE DESIGN AND WEBSITE DEVELOPMENT IN LAHORE PAKISTAN</h5>
                    <p className='pf1 my-3'>
                    The Tech shinners is a leading Pakistan web design and web development company, 
                    helping businesses with elegant websites, apps, branding, online marketing and more.
                     We have developed more than 500 websites for our local clients across all verticals: 
                     retail, services, real estate, finance, fashion, media, tourism and more. 
                     We have a very diverse portfolio and have served companies all across Pakistan including major cities Lahore,
                      Islamabad, Karachi, Faisalabad, Rawalpindi, Peshawar and others. 
                      We also have dozens of satisfied overseas clients. We are distinct from our competitors 
                      because at The Tech Shinners we thrive on providing the best quality, from design to functionality, 
                      from navigation to formatting, and from content to graphics, on every web page,
                       that we design and develop. We will deliver you a designer product with perfect work! 
                       Let’s get it started.
                    </p>
                  </div>
                </div>
              </div>

              {/* footer sevices section  */}
              <div className="col-lg-6 py-3">
                <h5 className='my-2'>SERVICES :</h5>
                <div className="row">
                  <div className="col-sm-5">
                    <ol>
                      <li>1 - Website Design</li>
                      <li>2 - Web Development</li>   
                      <li>3 - ECommerce Websites</li>
                    </ol>
                  </div>
                  <div className="col-sm-7">
                    <ol>
                     <li>4 - Mobile App Development</li>
                     <li>5 - Dekstop App Development</li>
                     <li>6 - Search Engine Optimization (SEO)</li>
                   </ol>
                  </div>
                </div>
               
                <h5 className="mt-4 my-2"> Industries We Serve: </h5>
                <div className="row">
                  <div className="col-sm-5">
                    <ol>
                      <li>Health and Care</li>
                      <li>Banking</li>   
                      <li>Software as a Service (SASS)</li>
                    </ol>
                  </div>
                  <div className="col-sm-7">
                    <ol>
                    <li>E-commerce</li>
                     <li>Public Sector</li>
                     <li>Business</li>
                   </ol>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-6">
                <h5>Subscribe</h5>
                <p>Stay updated on how future of technology is shaping.</p>

                <div className="subcribe my-3">
                  <input type="email" placeholder="abc@gmail.com" className='rounded px-3 py-1 my-2 mx-2'/>
                  <button className='fbtn1 mx-2 py-1 px-4 rounded'>Subscribe</button>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="social-links my-1">
                  <div className="row">
                    <div className="col-12">
                      <h5>Connect with Us:</h5>
                    </div>
                  </div>
                  {/* Social media icons */}
                  <div className="d-flex justify-content-start align-items-center my-3">
                  <ul>
                    <li><NavLink to='https://www.facebook.com/profile.php?id=61570456892259'><i className="fa fa-facebook"></i></NavLink></li>
                    <li><NavLink><i className="fa fa-linkedin"></i></NavLink></li>
                    <li><NavLink to='https://www.youtube.com/@TechShinners'><i className="fa fa-youtube"></i></NavLink></li>
                    <li><NavLink to='https://api.whatsapp.com/send?phone=+923224752036&text=Hi,%20I%20contacted%20you%20Through%20your%20website.'><i className="fa fa-whatsapp"></i></NavLink></li>
                  </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="row">
                  <div className="col-12">
                    <h5>Contact Us Today:</h5>
                    <p>DHA Phase III Lahore Pakistan
                    24/7 Helpline also Available on
                    <div className="d-flex justify-content-center align-items-start flex-column">
                    <div className="my-1">WhatsApp <NavLink to='https://api.whatsapp.com/send?phone=+923224752036&text=Hi,%20I%20contacted%20you%20Through%20your%20website.'><button>+92 322 475 2036</button></NavLink></div>
                    <div className="my-1">Email <button>techshinners@gmail.com</button></div>
                    </div>
                   </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-down">
          <div className="container-lg">
            <div className="row py-3">
              <div className="col-md-4 d-flex justify-content-center align-items-center">
                <h5>&copy; 2024 TECH SHINNERS All Rights Reserved.</h5>
                 </div>
              <div className="col-md-8">
                <ul className='d-flex justify-content-center align-items-center '>
                  <NavLink to='/'><li><button>Home</button></li> </NavLink> 
                  <NavLink to='/privacy-policy'><li><button>Privacy Policy</button></li> </NavLink> 
                  <NavLink to='/payment-terms'><li><button>Payment Terms</button></li> </NavLink> 
                  <NavLink to='/website-terms'><li><button>Website Terms</button></li> </NavLink> 
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer


