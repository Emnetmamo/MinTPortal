import { Outlet, Link } from "react-router-dom";


const Layout = () => {
  return (
    <>
     <br/> <br/> 
      <nav>

        <ul style={{backgroundColor:"#11676d"}}>
          <li style={{display:"inline", marginRight:"30px", color: "orange"}}>Quick Links: </li>
          <li style={{display:"inline", marginRight:"1100px"}}>
            <Link to="/admin" style={{color: "orange"}}>Admin</Link>
          </li>
          {/* <li style={{display:"inline", marginRight:"20px"}}>
            <Link to="/admin/news/add-news" style={{color: "orange"}}>Add News</Link>
          </li> */}
          {/* <li style={{display:"inline",marginRight:"800px"}}>
            <Link to="/admin/institutes/research-institutes" style={{color: "orange"}}>Post To Institutes</Link>
          </li> */}
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