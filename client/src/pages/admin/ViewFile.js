import { useLocation } from "react-router-dom";
import AdminHeader from "../../components/AdminComponents/AdminHeader";

function ViewFile(){
    try{
    const location = useLocation();
    const {filePath} = location.state;
    console.log(filePath);
    return(
        <div>
        <br />
        <br />
        <iframe
              src={'http:\\\\localhost:5001\\'+filePath}
              style={{width:"100%"}}
              height={800}
        />
        </div>
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