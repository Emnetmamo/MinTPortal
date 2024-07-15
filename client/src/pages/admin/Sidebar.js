import { Link } from 'react-router-dom';
import '../../images/assets/css/admin.css';
import { useLocation } from 'react-router-dom';

function Sidebar(props){
    const {email} = props;
    //console.log(email);
    return(
        <ul class="list-group text-center fs-5 display-6">
        <br />
        <li
          class="list-group-item"
          style={{
            backgroundColor: "#ffa525",
            border: "none",
            borderRadius: "10px",
          }}
        >
          <Link
            className="links"
            to="/admin/appointments/add-appointment"
          >
            Set Appointment Date{" "}
          </Link>
        </li>
        <br />
        <li
          class="list-group-item "
          style={{
            backgroundColor: "#ffa525",
            border: "none",
            borderRadius: "10px",
          }}
        >
          <Link className="links" to="/admin/user-status/add-user-status">
            Update User Status
          </Link>
        </li>
        <br />
        <li
          class="list-group-item "
          style={{
            backgroundColor: "#ffa525",
            border: "none",
            borderRadius: "10px",
          }}
        >
          <Link
            className="links"
            to="/admin/viewFeedback/view-feedback"
          >
           View feedback
          </Link>
        </li>
        <li
          class="list-group-item "
          style={{
            backgroundColor: "#ffa525",
            border: "none",
            borderRadius: "10px",
            marginTop: "20px"
          }}
        >
          <Link
            className="links"
            to="/admin/viewReports"
          >
          View Reports
          </Link>
        </li>
      </ul>
    );
}
export default Sidebar;