
export async function useAuth() {

    const r = await fetch('http://localhost:4567/user/', {
        headers: {
            "Authorization": localStorage.getItem('token'),
        }
    })
 

    return r.status


}