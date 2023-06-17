import { Link } from "react-router-dom";

const HomePage = () => {

    return ( 
    <div className="homepage">
        <div className="homewelcome">
    <h1>Welcome to Éclat University. </h1>
    <h5>Where Failure is Illegal</h5>
    </div>
    <br /> <br /> <br />

    <div id = "homeClickHere"> <Link to={"/join"} id = "hometext" > <h5>Click here to join us</h5> </Link> </div>
    
    <br /> <br /> <br />

<div className="homenoteformorebeauty">

<p >We are still adding some beauty to our homepage: Hold Up: </p>

<h5>At Éclat, Boredom will be punished </h5> </div>
    
    </div> );
}
 
export default HomePage;