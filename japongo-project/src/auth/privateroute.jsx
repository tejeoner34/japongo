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

    useEffect(()=>{
        (async ()=>setStatus(await getStatus()))();
    },[])

    //  function useAuth() {
    //     fetch('http://localhost:4567/user/', {
    //         headers: {
    //             "Authorization": localStorage.getItem('token'),
    //         }
    //     }).then(r => {
    //         r.json()
    //         console.log(r.ok)
    //     }).then(d => console.log(d))
    // }

    // useAuth();

    // const checkAuth = ()=>useAuth().then(()=>setIsValidated(true)).catch(()=>setIsValidated(false))

    
    // console.log(useAuth().then((r)=>r===200? setIsValidated(true): setIsValidated(false)))



    // return (//devolvemos el componente Route del react-router-dom. 
    //     <Route
    //         {...rest}// le pasamos todas las props que habian pasado a nuestro componente (path... entre cualquier otra que le queramos pasar)
    //         render={({ location }) => // la prop render nos permite hacer rederizado condicional. Acepta una funcion que tiene las propiedades de la ruta como parametro de entrada. En este caso cogemos el location (deconstruccion).
    //             isValidated ? ( // si estamos logados pintamos el DOM que tengamos como hijo en el componente <PrivateRoute> dentro del Switch.
    //                 children
    //             ) : ( // si no estamos logados rederigimos a la página del login pasandole la localizacion de la que veniamos. 
    //                 <Redirect // este componente se importa de react-router-dom
    //                     to={{
    //                         pathname: "/login", // a la ruta a la que queremos redirigir
    //                         state: { from: location }// pasandole la localizacion de la que venimos, podemos hacer que una vez nos mande al login y nos autentiquemos, nos vuelva a rederigir a la página a la que estabamos intentando entrar.
    //                     }}
    //                 />
    //             )
    //         }
    //     />
    // );

    return (
        status && (
          <Route
            {...rest}
            render={() => (status !== 200 ? <Redirect to="/login" /> : children)}
          />
        )
      );
    
}


