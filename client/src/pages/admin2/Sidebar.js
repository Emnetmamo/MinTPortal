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
                class="list-group-item "
                style={{
                  backgroundColor: "#ffa525",
                  border: "none",
                  borderRadius: "10px",
                }}
              >
                <Link className="links" to="/admin2/projectFeedback"   state={{email:email}}>
                  Give Project Feedback
                </Link>
              </li>
              <br/>
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
                  to="/admin2/viewReports"
                  state={{email:email}}
                >
                View Reports
                </Link>
              </li>
              <br/>
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
                  to="/admin2/submitReport"
                  state={{email:email}}
                >
                Submit Report on Projects
                </Link>
              </li>
            </ul>
    );
}
export default Sidebar;