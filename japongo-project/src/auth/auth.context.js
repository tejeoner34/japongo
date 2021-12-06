import {createContext} from "react";


export const AuthContext = createContext(localStorage.getItem('isAuth')??false);
