
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "../../styles/Ui/Terms/payment.scss";
import { NavLink } from 'react-router-dom';
function Paymentterms() {
  return (
    <div>
      <div className="pay-bg">
        <div className="row">
          <div className="col-12"></div>
        </div>
      </div>

      <div className="pay-text">
        <div className="container my-5">
          <div className="row my-3">
            <div className="col-12">
              <h1>Payment Terms</h1>
            </div>
          </div>
          <div className="row">
            <ul>
              <li>Following are payment terms for our all the project.</li>
              <li>
                -50 % Advance is required to start the project. 50 percent after
                completion/deployment of the project.
              </li>
              <li>
                -All Advance payments are non refundable nor transferable.
              </li>
              <li>
                -Payment can be Made via Cross bank trasnfer or Cash in Office
              </li>
            </ul>
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
  );
}

export default Paymentterms;
