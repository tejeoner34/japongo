import {createContext} from "react";


export const LangContext = createContext(localStorage.getItem('lang')??'en');