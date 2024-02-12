import { createSlice } from "@reduxjs/toolkit"
import moment from "moment";


export const authSlice = createSlice({
    name:"auth",
    initialState:{
        status:"not-authenticated",
        id:null,
        token:null,
        nombre:null,
        correo:null,
        activo:null,
        roles:[]
    },
    reducers:{
        login:(state,action) => {

            const { id,nombre,correo,activo,token,rememberMe,usuarioRoles }= action.payload;
            state.id = id;
            state.nombre = nombre;
            state.correo = correo;
            state.token = token;
            state.activo = activo;
            state.status = "authenticated";
            state.roles = usuarioRoles.map((usuarioRole:any) => usuarioRole.role);

            //Set token to localStorage if users marks this
            if(rememberMe){
                localStorage.setItem("token",token);
                localStorage.setItem("token-init",moment().format("DD/MM/YYYY HH:MM:SS"))
            }

        },
        logout:(state) => {
            localStorage.clear();
            state.nombre = null;
            state.token = null;
            state.activo = null;
            state.roles = [];
            state.id = null;
            state.status = "not-authenticated";
            localStorage.removeItem("token");
        },
        checkingCredentials:(state) => {
            state.status = "checking";
        },
        stopCheckingCredentials:(state) => {
            state.status = "not-authenticated";
        }
    }
});

export const { login,logout,checkingCredentials,stopCheckingCredentials } = authSlice.actions;
export default authSlice.reducer;