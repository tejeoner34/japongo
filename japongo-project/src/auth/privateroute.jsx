import { Route, Redirect } from "react-router";
import {  useEffect, useState } from "react";



export default function PrivateRoute({ children, ...rest }) {

  async function getStatus(){
    const r = await fetch('http://localhost:4567/user/', {
        headers: {
            "Authorization": sessionStorage.getItem('token')??localStorage.getItem('token'),
        }
    })
    // if(r.ok){
    //   const d = await r.json();
    //   updateUserData(d)
    // }
    
    return r.status
}

    const [status, setStatus] = useState(null);
    // const [, updateUserData] = useContext(UserContext);

    

    // const fetchFunction = async()=>{
    //   setStatus(await getStatus());
    // };
    // fetchFunction();
    

    useEffect(()=>{
      const fetchFunction = async()=>{
        const data = await getStatus();
        setStatus(data);
      };
      fetchFunction();
      return ()=>setStatus(null) 
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


