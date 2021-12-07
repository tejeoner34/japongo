import { Route, Redirect } from "react-router";
import { useEffect, useState } from "react";

async function getStatus(){
    const r = await fetch('http://localhost:4567/user/', {
        headers: {
            "Authorization": localStorage.getItem('token'),
        }
    })
    return r.status
}

export default function PrivateRoute({ children, ...rest }) {

    const [status, setStatus] = useState(null);

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


