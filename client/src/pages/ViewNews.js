import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
function ViewNews(){
    const location = useLocation();
    const {id} = location.state;
    const [news, setNews] = useState([]);
    const [loaded, setLoaded] = useState(false);
    useEffect(function(){
        axios.get('http://localhost:5001/news')
      .then((result)=>{
        setNews(result.data);
        setLoaded(true)
        console.log(result);
      })
      .catch(err=>console.log(err))
    },[])
    function findNewsById(id1){
        for (let i = 0; i < news.length; i++) {
            if(news[i]._id === id){
                return(
                    <div  style={{width:"85%", height:"80%",paddingLeft:"200px"}}>
            <div>
              <img
                className="news-fluid rounded "
                // style={{width:"100%", height:"20%",paddingBottom:"20px"}}
                style={{width:"100%", height:"400px",padding:"20px"}}
                src={news[i].imagePath}
                alt={news[i].title}
              />
              <div className=" text-center">
                <h4 style={{fontSize:"40px",paddingBottom:"15px"}}>{news[i].title}</h4>
              </div>
              <p className=" text-muted" 
              style={{height:"auto", paddingLeft:"40px", paddingRight:"40px", paddingBottom:"40px"}}>{news[i].content}</p>
              <div className="text-center">
                <div className="d-flex" style={{ justifyContent: 'center' }}>
                  <h6 style={{ color: '#ffa525', fontSize:"20px" }}>
                    {news[i].date && news[i].date.split('T')[0]}{' '}
                  </h6>
                  <h6>| </h6>
                  <h6 style={{ color: '#ffa525', fontSize:"20px" }}>
                    {news[i].category}
                  </h6>
                </div>
                <h6
                  className="mb-0"
                  style={{ color: '#11676d', fontSize: '20px' }}
                >
                  Author: {news[i].author}
                </h6>
              </div>
              <br />
              <br />
            </div>
            <br />
            <br />
          </div>
            );
            }
            
        }
        return(
            <div></div>
        );
    }
    return(
        <div>
            <br />
            <br />
            <Link to="/news" className="btn btn-primary" style={{marginLeft:"90%"}}>Back to News</Link>
            <h1  style={{marginRight:"100%",paddingLeft:"210px",fontSize:"40px"}}>News</h1>
            <br />
            <br />
            {loaded && findNewsById(id)}
            <br />
        </div>
    );
}
export default ViewNews;