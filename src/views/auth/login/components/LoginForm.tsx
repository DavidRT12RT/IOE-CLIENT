import { Button, Checkbox, Input } from "@nextui-org/react";

import grupoIOELogo from "../../../../assets/images/LogoGrupoIOE-ColorPrincipal_350px.png";
import { useDispatch } from "react-redux";
import { useForm } from "../../../../hooks/useForm";
import fetchAdapter from "../../../../helpers/fetch";
import { message } from "antd";
import { login } from "../../../../redux/authSlice";
import { loginToServer } from "../../../../redux/thunks";

export default function LoginForm(){
    
    const dispatch = useDispatch();

    const initialStateFormLogin = {
        correo:"",
        password:"",
        rememberMe:false
    };

    const {
        values,
        setValues,
        handleChange
    } = useForm(initialStateFormLogin);

    const handleLogin = async() => {
        //@ts-ignore
        dispatch(loginToServer(values));
    }


    return (            
        <section className="loginFormContainer text-sm md:text-base">
            <div className="logo">
                <img src={grupoIOELogo} style={{height:40}}/>
            </div>
            <div>
                <h1 className="text-3xl lg:text-6xl font-extrabold">Bienvenido de vuelta</h1>
                <p className="text-gray-500">Ingresa tu correo y contrasena para acceder a tu cuenta</p>
            </div>
            <Input
                size="sm"
                label="Correo"
                placeholder="Ingresa tu correo"
                type="email"
                name="correo"
                value={values.correo}
                onChange={handleChange}
            />
            <Input
                size="sm"
                label="Password"
                placeholder="Ingresa tu password"
                type="password"
                name="password"
                value={values.password}
                onChange={handleChange}
            />
            <div className="flex justify-between">
                <Checkbox 
                    isSelected={values.rememberMe}
                    onValueChange={() => setValues({...values,rememberMe:!values.rememberMe})}
                >
                    <p>Recuerdame</p>
                </Checkbox>
                <span className="font-bold text-red-500">Olvide mi password</span>
            </div>
            <Button color="primary" onClick={handleLogin}>Log in</Button>

            <div className="moreInfo">
                <p className="text-gray-500">No tienes una cuenta? <span className="text-red-500">Contacta a un administrador</span></p>
            </div>
        </section>
    );

}