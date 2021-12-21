import { Route, Redirect } from "react-router";
import {  useEffect, useState, useContext } from "react";
import { UserContext } from "../context/user-context/user-context";
import { NotificationContext } from "../context/notification-context/notification-context";



export default function PrivateRoute({ children, ...rest }) {

    const [status, setStatus] = useState(null);
    const [, updateUserData] = useContext(UserContext);
    const [, updateNotification] = useContext(NotificationContext)
    
    useEffect(()=>{
      async function getStatus(){
        const r = await fetch('http://localhost:4567/user/', {
            headers: {
                "Authorization": sessionStorage.getItem('token')??localStorage.getItem('token'),
            }
        })
        if(r.ok){
          const d = await r.json();
          updateUserData(d);
          updateNotification(d.mentions)
        }
        
        return r.status
    }
      const fetchFunction = async()=>{  
        const data = await getStatus();
         setStatus(data);
      };
      fetchFunction();
    
    },[updateUserData, updateNotification])


    return (
        status && (
          <Route
            {...rest}
            render={() => (status !== 200 ? <Redirect to="/login" /> : children)}
          />
        )
      );
    
}


