import { Routes,Route, Navigate } from "react-router-dom";
import Login from "../pages/user/Login";
import SignUp from "../pages/user/Signup";
import Home from "../pages/user/Home";



const UserRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to='/user/login' />} />

            <Route path="/login" element={<Login/>} />
            <Route path="/signup" element={<SignUp/>} />
            <Route path="/home" element={<Home />} />

        </Routes>
    )
}

export default UserRoutes