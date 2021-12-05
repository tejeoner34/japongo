import { useState } from "react";
import {AuthContext} from './auth.context.js';

function AuthProvider({value, children}){
    const [isAuth, updateIsAuth] = useState(value);
    return(
        <AuthContext.Provider value={[isAuth, updateIsAuth]}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;