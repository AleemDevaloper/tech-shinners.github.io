import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import '../styles/Ui/prot.scss';
import { NavLink } from 'react-router-dom';
import prot from '../images/protfolio/prot (1).png';
import prot2 from '../images/protfolio/prot (2).png'
import prot3 from '../images/protfolio/prot (3).png'
import prot4 from '../images/protfolio/prot (4).png'
import prot5 from '../images/protfolio/prot (5).png'
import prot6 from '../images/protfolio/prot (6).png'
import prot7 from '../images/protfolio/prot (7).png'
import prot8 from '../images/protfolio/prot (8).png'
import prot9 from '../images/protfolio/prot (9).png'

function Protfolio() {
return(
    <> 
        <div className="prot">
        <div className="prot-bg">
                <div className="container py-5">
                    <div className="col-12 my-5">
                        <div className="text-center">
                        <h1>Our <span>Protfolio</span></h1>
                        <NavLink to='/contact'><button className='contact-btn'>Lets Get in Touch</button></NavLink>
                        </div>
                    </div>
                </div>
            </div>

          <div className="container">
            <div className="row my-4">
              <div className="col-12 text-center">
                <h3>Some of Our Work</h3>
              </div>
            </div>

            <div className="my-5">
              <div className="row">
                <div className="col-lg-4 my-5 m-lg-0">
                  <div className="card">
                      <div className="card-img-top">
                        <img src={prot} alt="img" loading='lazy'/>
                      </div>
                      <div className="card-body">
                        <NavLink to='https://pakpinksalt.com/'><button>View Website</button></NavLink>
                      </div>
                  </div>
                </div>
                <div className="col-lg-4 my-5 m-lg-0">
                  <div className="card">
                      <div className="card-img-top">
                        <img src={prot2} alt="img"  loading='lazy'/>
                      </div>
                      <div className="card-body">
                        <NavLink to='https://afsteel.pk/'><button>View Website</button></NavLink>
                      </div>
                  </div>
                </div>
                <div className="col-lg-4 my-5 m-lg-0">
                  <div className="card">
                      <div className="card-img-top">
                        <img src={prot3} alt="img"  loading='lazy'/>
                      </div>
                      <div className="card-body">
                        <NavLink to='https://alliedcablesestore.pk/'><button>View Website</button></NavLink>
                      </div>
                  </div>
                </div>
              </div>

              <div className="row my-4">
                <div className="col-lg-4 my-5 m-lg-0">
                  <div className="card">
                      <div className="card-img-top">
                        <img src={prot4} alt="img"  loading='lazy'/>
                      </div>
                      <div className="card-body">
                      <NavLink to='https://belgianjewels.com/'><button>View Website</button></NavLink>
                      </div>
                  </div>
                </div>
                <div className="col-lg-4 my-5 m-lg-0">
                  <div className="card">
                      <div className="card-img-top">
                        <img src={prot5} alt="img"  loading='lazy'/>
                      </div>
                      <div className="card-body">
                      <NavLink to='https://mashatastore.com/'><button>View Website</button></NavLink>
                      </div>
                  </div>
                </div>
                <div className="col-lg-4 my-5 m-lg-0">
                  <div className="card">
                      <div className="card-img-top">
                        <img src={prot6} alt="img"  loading='lazy'/>
                      </div>
                      <div className="card-body">
                      <NavLink to='https://starlet.pk/'><button>View Website</button></NavLink>
                      </div>
                  </div>
                </div>
              </div>

               <div className="row my-4">
                <div className="col-lg-4 my-5 m-lg-0">
                  <div className="card">
                      <div className="card-img-top">
                        <img src={prot7} alt="img"  loading='lazy'/>
                      </div>
                      <div className="card-body">
                      <NavLink to='https://v-lab.uk/'><button>View Website</button></NavLink>
                      </div>
                  </div>
                </div>
                <div className="col-lg-4 my-5 m-lg-0">
                  <div className="card">
                      <div className="card-img-top">
                        <img src={prot8} alt="img"  loading='lazy'/>
                      </div>
                      <div className="card-body">
                      <NavLink to='https://sunplayersolar.com/'><button>View Website</button></NavLink>
                      </div>
                  </div>
                </div>
                <div className="col-lg-4 my-5 m-lg-0">
                  <div className="card">
                      <div className="card-img-top">
                        <img src={prot9} alt="img"  loading='lazy'/>
                      </div>
                      <div className="card-body">
                      <NavLink to='https://aleemdevaloper.github.io/real-state.github.com/index-six.html'><button>View Website</button></NavLink>
                      </div>
                  </div>
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
    
    </>
);
}
export default Protfolio