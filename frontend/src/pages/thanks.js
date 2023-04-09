import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const Thanks = () => {
    return ( 
<div className="thanks">

   <h5>You've done a good thing. We have saved your info successfully.</h5> 

   <Link to={"/students/"}> <Button variant="dark" className="thanksBtn">
          View other enrolled students
        </Button></Link>   
    
</div>

     );
}
 
export default Thanks;