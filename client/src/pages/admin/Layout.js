import { Outlet, Link } from "react-router-dom";


const Layout = () => {
  return (
    <>
     <br/> <br/> <br/> 
      <nav>

        <ul>
          <li>
            <Link to="/admin">Admin</Link>
          </li>
          <li>
            <Link to="/admin/news/add-news">Add News</Link>
          </li>
         
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;