import { Button, Checkbox, Input } from "@nextui-org/react";

import grupoIOELogo from "../../../../assets/images/LogoGrupoIOE-ColorPrincipal_350px.png";

export default function LoginForm(){

    return (            
        <section className="loginFormContainer text-sm md:text-base">
            <div className="logo">
                <img src={grupoIOELogo} style={{height:40}}/>
            </div>
            <div>
                <h1 className="text-3xl lg:text-6xl font-extrabold font-playfair">Bienvenido de vuelta</h1>
                <p className="text-gray-500">Ingresa tu correo y contrasena para acceder a tu cuenta</p>
            </div>
            <Input
                size="sm"
                label="Correo"
                placeholder="Ingresa tu correo"
                type="email"
            />
            <Input
                size="sm"
                label="Password"
                placeholder="Ingresa tu password"
                type="password"
            />
            <div className="flex justify-between">
                <Checkbox>
                    <p>Recuerdame</p>
                </Checkbox>
                <span className="font-bold text-red-500">Olvide mi password</span>
            </div>
            <Button color="primary">Log in</Button>

            <div className="moreInfo">
                <p className="text-gray-500">No tienes una cuenta? <span className="text-red-500">Contacta a un administrador</span></p>
            </div>
        </section>
    );

}