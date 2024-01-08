import { Navigate, Route,Routes } from "react-router-dom";
import Login from "../pages/admin/Login";
import Home from "../pages/admin/Home";


const AdminRoutes = () => {
    return(
        <Routes>
            <Route path="/" element={<Navigate to="/admin/login"/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/home" element={<Home />} />
        </Routes> 
    )
}

export default AdminRoutes