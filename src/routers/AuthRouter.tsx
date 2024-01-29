import { Route, Routes } from "react-router-dom";

//Page's
import Login from "../views/auth/login/Login";

export default function AuthRouter(){

    return (
        <Routes>
            <Route path="/login" element={<Login/>}></Route>
        </Routes>
    );

}