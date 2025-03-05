import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import '../styles/Ui/service.scss';
import { NavLink } from 'react-router-dom';
import hosting from '../images/service/hosting.jpg'
import web from '../images/service/web.png'
import mdapp from '../images/service/md-app.jpg'
import social from '../images/service/social.png'

function Service() {
    return (
      <div>
        <div className="services">
            <div className="services-bg">
                <div className="container py-5">
                    <div className="col-12 my-5">
                        <div className="text-center">
                        <h1>Our <span>Services</span></h1>
                        <NavLink to='/contact'><button className='contact-btn'>Let's Get in Touch</button></NavLink>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
              <div className="my-5">
                <div className="row">
                  <div className="col-12">
                    <div className="text-center my-3">
                      <h1>Why Us?</h1>
                    </div>
                     <p>
                     Our clients don’t have to go anywhere for variety of the services as we at Tech Shinners
                     provide one stop solution under one roof. That’s why our projects take minimum time and cost.
                     Give us a call and you will get your work done from Web development, Mobile app development, Dekstop app development, domain hosting and registration,
                       to Sass software from our team of experts. Our range of quality services makes 
                      us distinguished from our companies as they may provide you one service but in the end your project
                       will not synchronized in terms of marketing strategy. The benefit of having all the services from us 
                       is you will get an integrated range of services giving one unified message. The best thing is that we 
                       don’t compromise on quality and try to be best in every aspect. Our clients are loyal to us 
                     as we understand their needs well and try to honor them with no delays and complaints.
                     </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="container">
              <div className="my-4">
                <div className="row">
                  <div className="col-lg-6 d-flex justify-content-center align-items-start flex-column my-3 my-lg-0">
                    <h1 className='my-3'>Domain and Hosting</h1>
                    <p>
                    If you are planning to start a new business, first step is to get your domain name registered with a 
                    name that corresponds with your business. Second, you require web server space, or to put it another way,
                     site hosting services. One kind of service that makes websites accessible to the public is web hosting.
                      We offer both web hosting as well as reliable domain name registration services. We assist you in obtaining 
                      both a place and a distinctive name. Affordable domain
                     registration and hosting services are available right here for you.
                    </p>
                  </div>
                  <div className="col-lg-6 d-flex justify-content-center align-items-center my-5 my-md-0">
                    <img src={hosting} alt="img" loading='lazy'/>
                  </div>
                </div>
              </div>
            </div>

              <div className="container my-5">
              <div className="row my-4">
                       <div className="text-center">
                       <h3 className='my-3'>Latest technologies offered in a web development</h3>
                     <p>
                      We are constantly exploring new technologies and frameworks to provide you with the best possible results. 
                      Some of the latest technologies we are using are Html, CSS, JavaScript, Sass, Bootstrap, React, Angular, Vue.js, Node.js,Express Js ,Mongo Db ,MySQL ,PHP , and python. We are also always updating our knowledge base with the latest trends and developments.
                     </p>
                       </div>
                  </div>
              </div>

            <div className="container my-5 desing">
              <div className="my-4">
                <div className="row">
                  <div className="col-lg-6 d-flex justify-content-center align-items-center my-5 my-md-0">
                    <img src={web} alt="img" loading='lazy'/>
                  </div>
                  <div className="col-lg-6 d-flex justify-content-center align-items-start flex-column">
                    <h1 className='my-3'>Web Design and Development</h1>
                    <p>
                    The most excellent website design and development are essential to any business’s success and gain
                     a success of high standards in a market. It has been entirely created to meet the company’s demands and 
                    advance in raising market value’s engagement with the intended audience. <br />
                    Having eye-catching and visually beautiful websites will impact your company’s brand engagement. 
                    Website creation will increase your income by creating a website as quickly as possible.
                     It adds a tons of vibrant,
                     user-friendly elements to your website, giving it an educational feel</p>
                   
                  </div>
                </div>
              </div>
            </div>
            
            
            <div className="container my-5">
              <div className="row my-4">
                       <div className="text-center">
                       <h3 className='my-3'>Technologies We Use for Designing</h3>
                     <p>
                     In today's digital age, designing a modern web mobile and dekstop application involves a blend of various 
                     technologies that work seamlessly together to create visually appealing, user-friendly,
                      and responsive interfaces. We use Figma, Adobe photoshop, Illustrator, Lightroom, XD, Dreamweaver and Nova for desing application.
                     </p> 
                       </div>
                  </div>
              </div>


            <div className="container mobile my-5">
              <div className="my-4">
                <div className="row">
                  <div className="col-lg-6 d-flex justify-content-center align-items-start flex-column my-3 my-lg-0">
                    <h1 className='my-3'>Mobile and Dekstop Apps</h1>
                    <p>
                      We Build Most excelent Dekstop and Mobile applications for over clients .We belive in quality work
                      client satisfaction. Knowing the challenges that your business faces, we offer custom mobile development services that provide you with solutions uniquely designed for your brand.
                      With a collective approach and strong teamwork, our skilled developers and strategists produce a mobile
                       app that is feature-rich yet user-friendly. We build highly impactful iOS and Android apps using 
                       cutting-edge agile methodologies and you can amplify the app’s performance
                       by leveraging our digital marketing solutions to connect with your desired audience!
                    </p>
                   
                  </div>
                  <div className="col-lg-6 d-flex justify-content-center align-items-center my-5 my-md-0">
                    <img src={mdapp} alt="img" loading='lazy'/>
                  </div>
                </div>
              </div>
            </div>



            <div className="container my-5">
              <div className="row my-4">
                       <div className="text-center">
                       <h3 className='my-3'>Social networking .</h3>
                     <p>
                     Social media use is growing in popularity as more people with internet connections
                      have access to it. Social networking helps in spreading brand awareness,
                       which improves an organization’s performance. It is advantageous to the organizations 
                       since it offers them a relatively low-cost means of promotion. It is more likely to be shared
                      on Facebook, or on Twitter, Google+ as well as some other platforms</p> 
                       </div>
                  </div>
              </div>



            <div className="container my-5">
              <div className="my-4">
                <div className="row">
                  <div className="col-lg-6 d-flex justify-content-center align-items-center my-5 my-md-0 social">
                    <img src={social} alt="img" loading='lazy'/>
                  </div>
                  <div className="col-lg-6 d-flex justify-content-center align-items-start flex-column">
                    <h1 className='my-3'>Social Media Markiting</h1>
                    <p>
                    In the world of marketing, social media marketing has created a newest buzzword. 
                    It refers to driving traffic to websites through social media. This new marketing approach is gaining a
                     lot of excitement because it can attract a sizable market with little effort.
                      We also provide Seo (Serch Engine Optamize) service so over clients can grow there business easily
                      Social media use is growing in popularity as more people with internet connections have access to it.
                       Social networking helps in spreading brand awareness, which improves an organization’s performance.
                       Marketers have realized how important it is as data indicates that it boosts website traffic.
                     </p>
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
      </div>
    )
  }
  
  export default Service;