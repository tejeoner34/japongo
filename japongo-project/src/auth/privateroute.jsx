import { Route, Redirect } from "react-router";
import {  useEffect, useState, useContext } from "react";
import { UserContext } from "../context/user-context/user-context";
import { NotificationContext } from "../context/notification-context/notification-context";



export default function PrivateRoute({ children, ...rest }) {

 

    const [status, setStatus] = useState(null);
    const [, updateUserData] = useContext(UserContext);
    const [, updateNotification] = useContext(NotificationContext)
    // const isAuth = sessionStorage.getItem('token')??localStorage.getItem('token')??null;
    

    // const fetchFunction = async()=>{
    //   setStatus(await getStatus());
    // };
    // fetchFunction();

    useEffect(()=>{
      console.log('private route')
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
    
    },[updateUserData])

    
    
// if(isAuth !== null){
  
//     const fetchFunction = async()=>{
//       const data = await getStatus();
//        setStatus(data);
//     };
//     fetchFunction();
    
 
// }else{
//   window.location.href= process.env.PUBLIC_URL + '/login'
// }
    


    

   

    return (
        status && (
          <Route
            {...rest}
            render={() => (status !== 200 ? <Redirect to="/login" /> : children)}
          />
        )
      );
    
}


