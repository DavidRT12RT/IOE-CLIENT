// Centro unico de la informacion de la aplicacion y su funcion reducer

import { configureStore } from "@reduxjs/toolkit"; 
import authSlice from "./authSlice";


const store = configureStore({
    reducer:{
        auth:authSlice
    }
});

export type RootState = ReturnType<typeof store.getState>;
export default store;

/* 
    Vamos a tener varios slides o porciones de la aplicacion que se encargaran de mini-estados
    1.-autenticacion
    2.-configuracion de la aplicacion
*/

