import { Outlet, Link } from "react-router-dom";


const Layout = () => {
  return (
    <>
     <br/> <br/> 
      <nav>

        <ul style={{backgroundColor:"#11676d"}}>
          <li style={{display:"inline", marginRight:"50px", color: "orange"}}>Quick Links: </li>
          <li style={{display:"inline", marginRight:"50px"}}>
            <Link to="/admin" style={{color: "orange"}}>Admin</Link>
          </li>
          <li style={{display:"inline"}}>
            <Link to="/admin/news/add-news" style={{color: "orange"}}>Add News</Link>
          </li>
         
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;