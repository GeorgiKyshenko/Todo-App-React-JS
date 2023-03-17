import './TodoApp.css'
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import LogoutComponent from "./LogoutComponent";
import FooterComponent from "./FooterComponent";
import HeaderComponent from "./HeaderComponent";
import ListTodoComponent from "./ListTodoComponent";
import ErrorComponent from "./ErrorComponent";
import WelcomeComponent from "./WelcomeComponent";
import LoginComponent from "./LoginComponent";
import AuthProvider, {useAuth} from "./security/AuthContex";


function AuthenticatedRout({children}) {
    const authContext = useAuth()
    //if user is authenticated - direct him to children page otherwise return to root page "/"
    if (authContext.isAuthenticated) {
        return children
    }
    return <Navigate to={"/"}/>
}

function TodoApp() {
    return (
        <>
            <div className={"todoApp"}></div>
            <AuthProvider>
                <BrowserRouter>
                    <HeaderComponent/>
                    <Routes>
                        <Route path={"/login"} element={<LoginComponent/>}/>
                        <Route path={"/"} element={<LoginComponent/>}/>
                        <Route path={"/welcome/:username"}
                               element={<AuthenticatedRout><WelcomeComponent/></AuthenticatedRout>}/>
                        <Route path={"/todos"} element={<AuthenticatedRout><ListTodoComponent/></AuthenticatedRout>}/>
                        <Route path={"/logout"} element={<AuthenticatedRout><LogoutComponent/></AuthenticatedRout>}/>
                        <Route path={"*"} element={<ErrorComponent/>}/>
                    </Routes>
                    {/*to use Link in components they must be in the BrowserRouter !!!*/}
                    <FooterComponent/>
                </BrowserRouter>
            </AuthProvider>
        </>
    )
}

export default TodoApp