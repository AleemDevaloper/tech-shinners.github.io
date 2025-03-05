import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "../styles/Ui/home.scss";
import { NavLink } from 'react-router-dom';
import img1 from '../images/icon.webp';
import img2 from '../images/icon2.webp';
import img3 from '../images/icon3.webp';
import img4 from '../images/icon4.webp';

import img from '../images/img.png'
import domain from '../images/domain1.webp'
import web from '../images/web.webp'
import writting from '../images/writting.webp'
import social from '../images/social1.webp'
import seo from '../images/seo1.webp'
import ecom from '../images/ecommerce.webp'
import mobile from '../images/mobile.png'
import app from '../images/app.jpg'

import project from '../images/project/project.png';
import project2 from '../images/project/project2.png';
import logo from '../images/project/projectlogo.png';
import logo2 from '../images/project/project2logo.png';

function Home(){
    return (
        <div className="home">
         
         <div className="main">
             <div className="container-md">
                <div className="row">
                    <div className="col-12">
                        <h1>We are Top Rated </h1>
                        <div className="type"><h1></h1></div>
                        <h1 className="mt-2 mb-3">Development company</h1>
                        <NavLink to="/contact" className="my-4"><button className="contact-btn">Contact Us</button> </NavLink>
                    </div>
                </div>
             </div>
         </div>


         <div className="container-md mt-5 my-4">
            <div className="row">
                <div className="col-12 text-center">
                    <h2>Why Choose The TechShinners</h2>
                </div>
            </div>

            <div className="row icons mt-5 mb-2">
                <div className="col-sm-3 my-4 m-sm-0">
                    <div className="d-flex flex-column justify-content-center align-items-center text-center">
                            <img src={img1} alt="" className="my-2" loading="lazy"/>
                            <h4>Cost Efficient</h4>
                    </div>
                </div>
                <div className="col-sm-3 my-4 m-sm-0">
                    <div className="d-flex flex-column justify-content-center align-items-center text-center">
                            <img src={img2} alt="img" className="my-2" loading="lazy"/>
                            <h4>Minimal Timilines</h4>
                    </div>
                </div>
                <div className="col-sm-3 my-4 m-sm-0">
                    <div className="d-flex flex-column justify-content-center align-items-center text-center">
                            <img src={img3} alt="img" className="my-2" loading="lazy"/>
                            <h4>Effective Communication</h4>
                    </div>
                </div>
                <div className="col-sm-3 my-4 m-sm-0">
                    <div className="d-flex flex-column justify-content-center align-items-center text-center">
                            <img src={img4} alt="img" className="my-2" loading="lazy"/>
                            <h4>Quality Standards
                            </h4>
                    </div>
                </div>
            </div>
         </div>
         
         <div className="container my-5 py-5">
            <div className="row">
                <div className="col-lg-6">
                    <h2>Website Development Company</h2>

                    <div className="my-2">
                        <p>As a top web design and development company in Pakistan, we offer our clients the best solutions to help them increase their market share
                             and accomplish their goals and objectives within the allotted time frame.
                      TechShinners is a leading web design firm in Pakistan, run by experts in their domains who are constantly working to give our esteemed clients innovative, custom-made solutions via creative problem-solving.
                     Our goal is to offer cutting-edge solutions for the creation of websites.</p>

                     <h4 className="mt-3 mb-1">Our Objective</h4>
                     <p>
                     As a forward-thinking web design company in Pakistan,
                      we support hand-coded websites with complete client customization.
                     </p>
                    </div>
                </div>
                <div className="col-lg-6 d-flex justify-content-center align-items-center">
                    <img src={img} alt="" loading="lazy"/>
                </div>
            </div>
         </div>

           <div className="container-lg my-3 idea">
            <div className="row my-5">
                <div className="col-12">
                    <div className="text-center">
                        <h2>Where Idea becomes Reality..</h2>
                    </div>
                </div>
            </div>

            <div className="row idea">
                <div className="col-md-3 my-4 my-md-0">
                    <div className="d-flex justify-content-center align-items-center flex-column">
                        <div className="d-flex justify-content-center align-items-center">
                        <img src={domain} alt="img" loading="lazy"/>
                        </div>
                       
                        <h4 className='my-3'>Domain & Hosting</h4>
                    </div>
                </div>
                <div className="col-md-3 my-4 my-md-0">
                    <div className="d-flex justify-content-center align-items-center flex-column">
                        <div className="d-flex justify-content-center align-items-center">
                        <img src={web} alt="img" loading="lazy" />
                        </div>
                       
                        <h4 className='my-3'>Web Development</h4>
                    </div>
                </div>
                <div className="col-md-3 my-4 my-md-0">
                    <div className="d-flex justify-content-center align-items-center flex-column">
                        <div className="d-flex justify-content-center align-items-center">
                        <img src={writting} alt="img" loading="lazy" />
                        </div>
                       
                        <h4 className='my-3'>Content Writing</h4>
                    </div>
                </div>
                <div className="col-md-3 my-4 my-md-0">
                    <div className="d-flex justify-content-center align-items-center flex-column">
                        <div className="d-flex justify-content-center align-items-center">
                        <img src={social} alt="img" loading="lazy" />
                        </div>
                        
                        <h4 className='my-3'>Social Media Mkt.</h4>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-md-3 my-4 my-md-0">
                    <div className="d-flex justify-content-center align-items-center flex-column">
                        <div className="d-flex justify-content-center align-items-center">
                        <img src={seo} alt="img"  loading="lazy"/>
                        </div>
                        
                        <h4 className='my-3'>SEO</h4>
                    </div>
                </div>
                <div className="col-md-3 my-4 my-md-0">
                    <div className="d-flex justify-content-center align-items-center flex-column">
                        <div className="d-flex justify-content-center align-items-center">
                        <img src={mobile} alt="img" loading="lazy" />
                        </div>
                        
                        <h4 className='my-3'>Mobile Apps</h4>
                    </div>
                </div>
                <div className="col-md-3 my-4 my-md-0">
                    <div className="d-flex justify-content-center align-items-center flex-column">
                        <div className="d-flex justify-content-center align-items-center">
                        <img src={ecom} alt="img" loading="lazy" />
                        </div>
                       
                        <h4 className='my-3'>E-Commerce Solution</h4>
                    </div>
                </div>
                <div className="col-md-3 my-4 my-md-0">
                    <div className="d-flex justify-content-center align-items-center flex-column">
                        <div className="d-flex justify-content-center align-items-center">
                        <img src={app} alt="img" loading="lazy" />
                        </div>
                       
                        <h4 className='my-3'>Dekstop Apps</h4>
                    </div>
                </div>
            </div>
           </div>


        {/* Over Work section  */}
        <div className="works py-5">
        <div className="container-lg">
            <div className="row">
                <div className="col-12">
                    <div className="text-center">
                        <h2>Our Latest Work</h2>
                    </div>
                </div>
            </div>
            <div className="row my-5 work py-5 px-0 px-md-4">
                <div className="col-md-7 d-flex justify-content-center align-items-start flex-column">
                <img src={logo} alt="img"  className='my-2' loading="lazy"/>
                <h3 className="my-2">UI/UX Design</h3>
                <h3>Web Development</h3>
                <h2 className="my-2">Shoes Web</h2>
                <p className="me-md-5 my-2 mb-4">A beautifull website for shoes company which contain multiple features
                    ordering system , shop , product , cart , wish list.
                </p>
                 <NavLink to='https://aleemdevaloper.github.io/shoes.github.com/index.html '><button className='contact-btn'>View Website</button></NavLink>
                </div>
                <div className="col-md-5 d-flex justify-content-center align-items-center ">
                <img src={project} alt="img"  className='my-2' loading="lazy"/>
                </div>
            </div>

            <div className="row my-5 work py-5 px-0 px-md-4">
                <div className="col-md-7 d-flex justify-content-center align-items-start flex-column">
                <img src={logo2} alt="img"  className='my-2' loading="lazy"/>
                <h3 className="my-2">UI/UX Design</h3>
                <h3>Web Development</h3>
                <h2 className="my-2">Real State Web</h2>
                <p className="me-md-5 my-2 mb-4">Discover Over work, the ultimate app for all your property buying and selling needs.</p>
                <NavLink to='https://aleemdevaloper.github.io/real-state.github.com/index.html'><button className='contact-btn'>View Website</button></NavLink>
                </div>
                <div className="col-md-5 d-flex justify-content-center align-items-center ">
                <img src={project2} alt="img"  className='my-2' loading="lazy"/>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-12">
                    <div className="text-center">
                        <NavLink to='/contact'><button className="contact-btn">Let's Work Together</button></NavLink>
                    </div>    
                </div>
            </div>
           </div>
        </div>
          


           {/* Achive ments section  */}
           <div className="container my-5 achive">
               <div className="row">
                <div className="col-12">
                    <div className="text-center">
                        <h2>Our Achievements</h2>
                    </div>
                </div>

                <div className="col-12 my-3">
                    <div className="text-center">
                        <h3>Our work in numbers</h3>
                        <p className="my-2 mx-md-5 mx-0">
                        With the help of 100 plus highly trained professional Workers we're able to achieve these amazing 
                        numbers which is enough proof of our success.
                        We donot speak about our success, our work speaks about our success.
                        </p>
                    </div>
                </div>
               </div>

               <div className="row">
                <div className="col-md-3 my-3 my-md-0">
                    <div className="text-center">
                        <div className="d-flex justify-content-center align-items-center flex-column">
                            <h2>100%</h2>
                            <h4>Client Satisfaction</h4>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 my-3 my-md-0">
                    <div className="text-center">
                        <div className="d-flex justify-content-center align-items-center flex-column">
                            <h2>5+</h2>
                            <h4>Years in Market</h4>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 my-3 my-md-0">
                    <div className="text-center">
                        <div className="d-flex justify-content-center align-items-center flex-column">
                            <h2>1k+</h2>
                            <h4>Projects Delivered</h4>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 my-3 my-md-0">
                    <div className="text-center">
                        <div className="d-flex justify-content-center align-items-center flex-column">
                            <h2>350+</h2>
                            <h4>Successful implementation</h4>
                        </div>
                    </div>
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
    );
};
export default Home;