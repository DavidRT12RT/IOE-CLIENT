import { Button, Checkbox, Input } from "@nextui-org/react";

import LoginInfo from "./components/LoginInfo";
import LoginForm from "./components/LoginForm";

import "./assets/Login.css";

export default function Login(){

    return (
        <section className="loginContainer">

            <LoginForm/>
            <LoginInfo/>

        </section>
    );

}