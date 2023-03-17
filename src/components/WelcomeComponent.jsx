import {Link, useParams} from "react-router-dom";

function WelcomeComponent() {
    // Returns an object of key/value pairs of the dynamic params from the current URL that were matched by the route path.
    const {username} = useParams() //get the parameter from the URL
    return (
        <>
            <div className={"welcome"}>
                <h1>Welcome {username}</h1>
                <div>
                    {/*Link doesn't refresh the page <a href=""></a> does refresh it, and we don't want to when we create SPA*/}
                    Your ToDo`s <Link to={"/todos"}>click here</Link>
                </div>
            </div>

        </>
    )
}
export default WelcomeComponent