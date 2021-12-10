import { useState } from "react";
import { userContext } from './user-context.js'

function UserProvider({value, children}){
    const [userData, updateUserData] = useState(value);
    return(
        <userContext.Provider value={[userData, updateUserData]}>
            {children}
        </userContext.Provider>
    )
}

export default UserProvider;