import { useLocation } from "react-router-dom";
import AdminHeader from "../../components/AdminComponents/AdminHeader";

function ViewFile(){
    try{
    const location = useLocation();
    const {filePath} = location.state;
    console.log(filePath);
    let isFullPath = false;
    if((filePath.indexOf('http') > -1) || (filePath.indexOf('data:application/pdf;base64') > -1)){
        isFullPath = true;
    }

    return(
        <>
        {isFullPath && <div>
       
        <iframe
            //   src={'http:\\\\https://research-portal-server-9.onrender.com\\'+filePath}
            src={filePath}
              style={{width:"100%"}}
              height={800}
        />
        </div>}

        {!isFullPath && <div>
       
        <iframe
            //   src={'http:\\\\https://research-portal-server-9.onrender.com\\'+filePath}
            src={process.env.REACT_APP_SERVER+filePath}
              style={{width:"100%"}}
              height={800}
        />
        </div>}
        </> 

    );
    }
    catch(err){
        return(
            <div>
                <h3>There was an error getting the file, try opening the file in the same tab</h3>
            </div>
        );
    }
}
export default ViewFile;