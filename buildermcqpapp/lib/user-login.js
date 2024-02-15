"use server";
import { cookies } from "next/headers"; 
export async function sendUserLoginData(loginDetails){
    console.log("login",loginDetails)
    const response = await fetch('http://localhost:8000/api/users/login',{
        cache: 'no-store', 
        method: 'POST',
        body: JSON.stringify(loginDetails),
        headers:{
            'Content-Type': 'application/json',
        }
    });
    const data = await response.json();
    console.log("User data",data)
    if(!response.ok){
        throw new Error(data.message || 'Something went wrong!');
    } else {
        handleUserLoginSession(data.data);
        return true;
    }
}

export async function handleUserLoginSession(sessionData) {
    const encryptedSessionData = sessionData?.token;
    cookies().set("userSession", encryptedSessionData, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 60 * 60 * 2,
        path: "/",
        });
    }
    
export async function getUserSessionData() {
    const encryptedSessionData = cookies().get("userSession")?.value;
    return encryptedSessionData ? encryptedSessionData : null;
}
