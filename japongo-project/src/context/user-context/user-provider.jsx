import { useState } from "react";
import { UserContext } from './user-context.js'

function UserProvider({value, children}){
    const [userData, updateUserData] = useState(value);
    return(
        <UserContext.Provider value={[userData, updateUserData]}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider;