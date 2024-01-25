
import Cookies  from "js-cookie";

export async function sendUserLoginData(loginDetails){
    const response = await fetch('http://localhost:8000/api/users/login',{
        method: 'POST',
        body: JSON.stringify(loginDetails),
        headers:{
            'Content-Type': 'application/json',
        }
    });
    const data = await response.json();
        
    if(!response.ok){
        throw new Error(data.message || 'Something went wrong!');
    } else {
        console.log("Got data",data);
        Cookies.set('sessionToken',data.data.token);
    }
}

export async function checkLogin(){
    const token = await Cookies.get('sessionToken');
    console.log("Check Server tokens",token);
    console.log("All cookies", Cookies.get('sessionToken'));
    return token;

}

export async function removeToken(){
    await Cookies.remove('sessionToken');
}

export function getToken(){
    console.log(Cookies.get('sessionToken'));
    return Cookies.get('sessionToken');
}