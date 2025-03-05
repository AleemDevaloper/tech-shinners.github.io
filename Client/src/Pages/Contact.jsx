
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import '../styles/Ui/contact.scss';
import sflife from '../images/Contact/software-life.png';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';


function Contact() {
    const form = useRef();
  const sendmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm('service_b8alxza', 'template_giqbtkw', form.current,{
        publicKey: 'DOgF6PAVVJLBatZSZ',
      })
      .then(
        () => {
            alert("messsage send successfully");
        },() => {
            alert("messsage send failed");
        }
      );}


  return (
    <div>
        <div className="contact">
            <div className="contact-img">
                
            </div>
            <div className="container mt-5 mb-3">
               <div className="row border">
                <div className="col-lg-4 py-4">
                   <div className="row my-2 ps-2 mt-3">
                    <div className="col-12">
                        <div className="text-start">
                        <h1>Contact us <span>Now</span></h1>
                        <h3>to turn your idea into reality</h3> 
                        </div>
                    </div>
                   </div>

                   <div className="row ps-2">
                    <h2 className='my-3'>What to Expect Next:</h2>
                    <ul>
                        <li><i className="fa fa-arrow-right"></i>Well arrange a call as per your preference</li>
                        <li><i className="fa fa-arrow-right"></i>Well hold a meeting to understand your needs.</li>
                    </ul>
                   </div>
                </div>
                <div className="col-lg-8">
                    <div className="d-flex justify-conter-center align-items-center flex-column w-100">
                    <div className="row w-100">
                        <div className="col-12">
                            <div className="text-center">
                            <h2 className='my-3'>Lets Start Your <span>Project</span></h2>
                            </div>
                        </div>
                    </div>
                    <div className="form px-3 w-100">
                        <form onSubmit={sendmail} ref={form}>
                        <input type="text" name='name' placeholder='Name'/>
                        <input type="email" name='email' placeholder='Email'/>
                        <input type="text" name='number' placeholder='Phone Number'/>
                        <input type="text" name='address' placeholder='Your Address'/>
                        <textarea rows="5" placeholder='Message' name='message'></textarea>
                        <button type="submit" className='my-2 mb-4'>Send Message</button>
                        </form>
                     </div>
                    </div>
                </div>
               </div>
            </div>
        </div> 


        <div className="my-5 py-3 bg-grey">
            <div className="container">
                <div className="row">
                <div className="col-lg-6">
                    <h2>Dive deeper with us - Subscribe to our newsletter for more.</h2>
                </div>
                <div className="col-lg-6">
                    <div className="sub">
                        <input type="email" id="" placeholder='abc@example.com' className='mx-2'/>
                        <button type='submit'>Subscribe</button>
                    </div>    
                </div>
                </div> 
            </div>
        </div>

        <div className="row mt-4 c-bg">
            <div className="col-12">
                <div className="text-center">
                    <img src={sflife} alt="img" loading='lazy'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact
