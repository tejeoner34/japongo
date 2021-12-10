import { Route, Redirect } from "react-router";
import { useContext, useEffect, useState } from "react";
import {userContext} from '../context/user-context/user-context.js'



export default function PrivateRoute({ children, ...rest }) {

  async function getStatus(){
    const r = await fetch('http://localhost:4567/user/', {
        headers: {
            "Authorization": sessionStorage.getItem('token'),
        }
    })
    if(r.ok){
      const d = await r.json();
      updateUserData(d)
      sessionStorage.setItem('mail', d.email);
      sessionStorage.setItem('name', d.name);
    }
    
    return r.status
}

    const [status, setStatus] = useState(null);
    const [userData, updateUserData] = useContext(userContext);

    

    useEffect(async()=>{
        setStatus(await getStatus());
    },[])

   

    return (
        status && (
          <Route
            {...rest}
            render={() => (status !== 200 ? <Redirect to="/login" /> : children)}
          />
        )
      );
    
}


