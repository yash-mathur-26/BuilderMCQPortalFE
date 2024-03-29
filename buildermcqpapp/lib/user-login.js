"use server";
import { revalidatePath } from "next/cache";
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
    const userData = sessionData?.user;
    cookies().set("userSession", encryptedSessionData, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 60 * 60 * 1,
        path: "/",
        });
    cookies().set("userDataCookie", JSON.stringify(userData) , {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 60 * 60 * 1,
        path: "/",
        });
    }
    
export async function getUserSessionData() {
    const encryptedSessionData = cookies().get("userSession")?.value;
    return encryptedSessionData ? encryptedSessionData : null;
}
export async function getUserCookieData(){
    const encryptedUserData = await cookies().get("userDataCookie")?.value;
    console.log(encryptedUserData);
    return encryptedUserData ? encryptedUserData : null;
}
export async function removeUserSession(){
    cookies().set("userSession","",{ expires:new Date(0) });
}