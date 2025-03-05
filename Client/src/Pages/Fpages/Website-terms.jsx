
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "../../styles/Ui/Terms/website-terms.scss";
import { NavLink } from 'react-router-dom';
function Websiteterms() {
  return (
    <div>
      <div className="webterms">
       <div className="webterms-bg">

       </div>

       <div className="container my-5">
        <div className="row">
            <div className="col-12">
              <h1>WEBSITE TERMS OF USE</h1>
            </div>
        </div>
        <div className="row my-2">
            <div className="col-12">
                <p>
                We welcome you to Tech Shinners website. There are certain terms which
                 have to be accepted by the user and techshinners regarding the use Of this website. 
                These terms may be updated/amended when need arises.</p>
            </div>
        </div>
       </div>

       <div className="container my-5">
        <div className="row">
            <div className="col-12">
              <h1>INFORMATION USER MUST KNOW</h1>
            </div>
        </div>
        <div className="row my-2">
            <div className="col-12">
                <p>
                This website is designed to make users know about the services, products, 
                facilities. TechShinners does not deal with any kind of web development that is related 
                to Pornography, Dating and Alcholol</p>
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

       <div className="container my-5">
        <div className="row">
            <div className="col-12">
              <h1>PRIVACY</h1>
            </div>
        </div>
        <div className="row my-2">
            <div className="col-12">
                <p>The data which user provide on our website is subject to the Privacy Policy.
                   Please check our Privacy policy for information.</p>
            </div>
        </div>
       </div>

       <div className="container my-5">
        <div className="row">
            <div className="col-12">
              <h1>USER’S RESPONSIBILITIES</h1>
            </div>
        </div>
        <div className="row my-2">
            <div className="col-12">
                <p>Users are not allowed to use this website for any purpose that is illegal, unlawful or 
                  prohibited by the terms mentioned. 
                  If you violate any term them user may be terminated to use the website immediately.</p>
            </div>
        </div>
       </div>

       <div className="container my-5">
        <div className="row">
            <div className="col-12">
              <h1>PROHIBITED ACTIVITIES</h1>
            </div>
        </div>
        <div className="row my-2">
            <div className="col-12">
                <p>You are specifically prohibited from any misuse of this Web Site, and you agree not to use or permit others to use this Web Site, for any of the following:</p>

                <ul className='my-3'>
                  <li> 1 - It is highly prohibited to send or distribute any kind of spam or junk emails on the email ID mentioned.</li>
                  <li> 2 - Disrupting the normal flow of the website</li>
                  <li> 3 - Disclose, or share the information such as IDs, passwords, confirmation numbers to any third party</li>
                  <li> 4 - It is prohibited to access to any of the data of Techshinners.</li>
                  <li> 5 - An attempt to remover/reverse the codes making up this website. Moreover any king of deciphering, decompilation, or modification is also prohibited.</li>
                  <li> 6 - Using or attempting to use hacking tools, viruses, or malware to gain unauthorized access to this website or its servers</li>
                  <li> 7 - Sending unsolicited advertising or promotional materials to other users</li>
                  <li> 8 - Engaging in any other forms of unlawful or illegal activities</li>
                  <li> 9 - An attempt to interfere in network security is subject to punishment according to law.</li>
                  <li>10 - Use any intelligent agent, or spider or robot or other automotive device will be considered violation of Techshinners terms.</li>
                </ul>
            </div>
        </div>
       </div>

       <div className="container my-5">
        <div className="row">
            <div className="col-12">
              <h1>LINKS TO THIRD PARTY WEB SITES</h1>
            </div>
        </div>
        <div className="row my-2">
            <div className="col-12">
                <p>This website embeds links to many other websites as well. Techshinners gives the links just for your convenience. The material present on those sites is not our responsibility.</p>
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

export default Websiteterms
