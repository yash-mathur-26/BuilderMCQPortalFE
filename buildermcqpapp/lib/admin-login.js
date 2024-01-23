'use server';
import { cookies } from 'next/headers';

export async function sendUserLoginData(loginDetails){
    const response = await fetch('http://localhost:8000/api/users/login',{
        method: 'POST',
        body: JSON.stringify(loginDetails),
        headers:{
            'Content-Type': 'application/json',
        }
    });
    const data = await response.json();
    console.log(data.data);
    cookies().set('sessionToken',data.data.token);
    if(!response.ok){
        throw new Error(data.message || 'Something went wrong!');
    } else {
        
    }
}

export async function checkLogin(){
    const token = cookies().get('sessionToken');
    console.log("Check Server tokens",token);
    return token;

}

export async function removeToken(){
    cookies().delete('sessionToken');
}