
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "../../styles/Ui/Terms/privacy.scss";
import { NavLink } from 'react-router-dom';

function Privacypolicy() {
  return (
    <div>
      <div className="privacy">
       <div className="privacy-bg">

       </div>

       <div className="container my-5">
        <div className="row">
            <div className="col-12">
              <h1>General Principles:</h1>
            </div>
        </div>
        <div className="row my-2">
            <div className="col-12">
                <p>
                Tech Shinners understands that your privacy is important to you and that you
                 care about how your personal data is used and shared online. We respect and value the privacy of everyone
                  who visits this website, techshinners.com (“Our Site”) and will only collect and use personal
                   data in ways that are described here, 
                and in a manner that is consistent with our obligations and your rights under the law.</p>

                <p className='my-3'>Please read this Privacy Policy which constitutes part of this agreement carefully
                   and ensure that you understand it. Your acceptance of our Privacy Policy is deemed to occur upon your 
                   first use of Our Site. If you do not accept and agree with this 
                  Privacy Policy, you must stop using our Site immediately.</p>
            </div>
        </div>
       </div>

       <div className="container my-5">
        <div className="row">
            <div className="col-12">
              <h1>OUR ONLINE PRIVACY POLICY</h1>
            </div>
        </div>
        <div className="row my-2">
            <div className="col-12">
                <p>
                Tech Shinners is dedicated to protect privacy of individuals and securing the personal data made accessible to us when you come to techshinners.com.
                This privacy policy designates what information/data is made available to the Techshinners and other third parties when you visit techshinners.com, and how we use and stores that information.
                We may update or revise this online privacy policy if any change is made in it.
                You are encouraged to revisit our website to check if any change has been done in privacy policy.
                </p>
            </div>
        </div>
       </div>

       <div className="container my-5">
        <div className="row">
            <div className="col-12">
              <h1>Information received and stored when you visit TechShinners.com</h1>
            </div>
        </div>
        <div className="row my-2">
            <div className="col-12">
                <p>
                By visiting the TechShinners website, certain information, such as (IP) addresses,
                navigation trend on website, time spent, the software used, any other information will be stored in our server.
                The received information will only be utilized internally for traffic analysis on website.
                If you give any information such as name, your email address, postal address will only be used for enhancing our services.
                It will not be be made public, disclosed or sold elsewhere.
                </p>
            </div>
        </div>
       </div>

       <div className="container my-5">
        <div className="row">
            <div className="col-12">
              <h1>What Does This Policy Cover?</h1>
            </div>
        </div>
        <div className="row my-2">
            <div className="col-12">
                <p>
                This Privacy Policy applies only to your use of our site. 
                Our site may contain links to other websites.
                 Please note that we have no control over how your data is collected, 
                 stored, or used by other websites and we advise you to check the privacy policies
                  of any such websites before providing any data to them.</p>
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
  )
}

export default Privacypolicy
