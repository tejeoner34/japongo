import { Route, Redirect } from "react-router";
import {  useState } from "react";



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
    const isAuth = sessionStorage.getItem('token')??localStorage.getItem('token')??null;
    

    // const fetchFunction = async()=>{
    //   setStatus(await getStatus());
    // };
    // fetchFunction();
    
if(isAuth !== null){
  
    const fetchFunction = async()=>{
      const data = await getStatus();
       setStatus(data);
    };
    fetchFunction();
    
 
}else{
  window.location.href= process.env.PUBLIC_URL + '/login'
}
    


    

   

    return (
        status && (
          <Route
            {...rest}
            render={() => (status !== 200 ? <Redirect to="/login" /> : children)}
          />
        )
      );
    
}


