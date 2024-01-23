'use server';
import { cookies } from "next/headers";
export async function getTechnologies(){
    const response = await fetch('http://localhost:8000/api/technologies',{
        method: 'GET',
        headers:{
            'Content-Type': 'application/json',
            'token': cookies().get('sessionToken').value
        }
    });
    const data = await response.json();
    return data;  
    
}