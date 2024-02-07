'use server';

import axios from "axios";

export async function sendUserLoginData(loginDetails){
    const response = await fetch('http://localhost:8000/api/users/login',{
        cache: 'no-store', 
        method: 'POST',
        headers:{
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginDetails),
    }).then((res)=>res).then(data=>data);
    // const response = await axios.post('http://localhost:8000/api/users/login',loginDetails)
    const data = await response.json();
    console.log("New Data",data);
    if(!response.ok){
        return new Error(data.message || 'Something went wrong!');
    } else {
        console.log("Got data",data); 
        return data;
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

export async function getToken(){
    console.log(cookies().get('session'));
    return cookies().get('session');
}