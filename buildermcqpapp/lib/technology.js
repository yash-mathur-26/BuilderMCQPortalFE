import Cookies from "js-cookie";

export async function getTechnologies(){
    const response = await fetch('http://localhost:8000/api/technologies',{
        method: 'GET',
        body: JSON.stringify(loginDetails),
        headers:{
            'Content-Type': 'application/json',
            'token':Cookies.get('sessionToken')
        }
    });
    const data = await response.json();
    if(!response.ok){
        throw new Error(data.message || 'Something went wrong!');
    } else {
        return 
    }
}