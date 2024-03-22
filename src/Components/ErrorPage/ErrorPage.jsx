import { Link, useRouteError } from "react-router-dom";


const ErrorPage = () => {
    const error=useRouteError();
    console.log(error)
    return (
        <div>
<h2>Opps Server Are Not Found</h2>


<p>{error.statuscode}</p>

<Link to="/"> <button>Go Back</button> </Link>
 <br /><br /><br />
 <p>Hacked By Jisan</p>

        </div>
    );
};

export default ErrorPage;