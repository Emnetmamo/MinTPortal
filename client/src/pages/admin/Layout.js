import { Outlet, Link, useLocation } from "react-router-dom";

const Layout = () => {

  const location = useLocation();
  //const {email} = location.state;
  let email = "";
  try{
    email = document.cookie.split(';')[0].split('=')[1].replaceAll('"','');
  }
  catch(err){

  }
  return (
    <>
     <br/> <br/> 
      <nav>

        <ul style={{backgroundColor:"#11676d"}}>
          <li style={{display:"inline", marginRight:"30px", color: "orange"}}>Quick Links: </li>
          <li style={{display:"inline", marginRight:"950px"}}>
            <Link to="/admin" style={{color: "orange"}} state={{email:email}}>Admin</Link>
          </li>
          <li style={{display:"inline"}}>
          <Link to="/" style={{ backgroundColor:"orange", color: "black"}}
          className="btn btn-primary">Back to Home</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;