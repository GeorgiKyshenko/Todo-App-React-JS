import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {useAuth} from "./security/AuthContex";

function LoginComponent() {

    const [username, setUsername] = useState("Georgi")
    const [password, setPassword] = useState("") //we should set default empty if we don`t want any default value
    const [successMsg, setSuccessMsg] = useState(false)
    const [errorMsg, setErrorMsg] = useState(false)
    const navigate = useNavigate()
    const authContext = useAuth()

    function handleUsernameChange(event) {
        setUsername(event.target.value)

        /* we can see what is happening in the browser console. event.target.value holds the value in the input field,
        and we use it to set it to new value(username)
        console.log(event)
       console.log(event.target.value)
       */
    }

    function handlePasswordChange(event) {
        setPassword(event.target.value)
    }

    function handleSubmit() {
        if (authContext.login(username, password)) {
            console.log("Success")
            // setSuccessMsg(true)
            // setErrorMsg(false)
            navigate(`/welcome/${username}`) // we have to use ` ` specially to catch variable from the URL (JS)
        } else {
            console.log("Failed")
            setErrorMsg(true)
            // setSuccessMsg(false)
        }
    }

    // function SuccessMessageComponent() {
    //     if (successMsg) {
    //         return <div className={"errorMessage"}>Authenticated Successfully</div>
    //     } else {
    //         return null;
    //     }
    // }
    //
    // function ErrorMessageComponent() {
    //     if (errorMsg) {
    //         return <div className={"errorMessage"}>Authentication Failed</div>
    //     } else {
    //         return null;
    //     }
    // }

    return (
        <div className={"login"}>
            <h1>Enter your name and password</h1>

            {/*this is similar to the commented components below
             - if the successMsg is true it will return successMessage if false - return null
             - if the errorMsg is true it will return errorMessage if false - return null
             they are handled in handleSubmit function*/}
            {/*{successMsg && <div className={"successMessage"}>Authenticated Successfully</div>}*/}
            {errorMsg && <div className={"errorMessage"}>Authentication Failed</div>}

            {/*<SuccessMessageComponent/>*/}
            {/*<ErrorMessageComponent/>*/}
            <div className={"loginForm"}>
                <div>
                    <label>User Name</label>
                    <input type={"text"} name={"username"} value={username} onChange={handleUsernameChange}/>
                </div>
                <div>
                    <label>Password</label>
                    <input type={"password"} name={"password"} value={password} onChange={handlePasswordChange}/>
                </div>
                <div>
                    <button type={"button"} name={"login"} onClick={handleSubmit}>login</button>
                </div>
            </div>
        </div>
    )
}

export default LoginComponent