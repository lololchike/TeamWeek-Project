import { Link } from "react-router-dom";

const HomePage = () => {

    return ( 
    <div className="homepage">
        <div className="homewelcome">
    <h1>Welcome to Éclat University. </h1>
    <h5>Where Failure is Illegal</h5>
    </div>
    <br /> <br /> <br />

    <Link to={"/join"} className = "hometext" > <div className = "homeClickHere">  Click here to join us</div></Link>
    
    <br /> <br /> <br />

<div className="homenoteformorebeauty">

<p >We are still adding some beauty to our homepage: Hold Up: </p>

<h5>At Éclat, Boredom will be punished </h5> </div>
    
    </div> );
}
 
export default HomePage;