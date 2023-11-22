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
                    <div style={{width:"100%", height:"100%"}}>
            <div className="card rounded shadow grow-on-hover">
              <img
                className="news"
                style={{width:"100%", height:"30%"}}
                src={news[i].imagePath}
                alt={news[i].title}
              />
              <div className="card-body text-center">
                <h4 style={{fontSize:"40px"}}>{news[i].title}</h4>
              </div>
              <p className="card-text text-muted" 
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
            <br />
            <br />
            {loaded && findNewsById(id)}
            <br />
        </div>
    );
}
export default ViewNews;