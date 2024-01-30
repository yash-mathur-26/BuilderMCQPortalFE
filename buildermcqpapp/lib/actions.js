'use server';
// import { signIn } from '@/auth';
import { sendUserLoginData } from './admin-login';
import { cookies } from 'next/headers';
export async function authentication(formData){
    console.log("Logging Form",formData);
    try{
        // await sendUserLoginData('credentials',formData)
    } catch (error){
        if(error){
            switch(error.type){
                case 'CredentialsSignin':
                    return 'Invalid credentials.'
                default:
                    return 'Something went wrong.'
                }
        }
        throw error;
    }
}

export async function handleLoginSession(sessionData){
    const encryptedSessionData = encrypt(sessionData)
    coookies().set('session',encryptedSessionData,{
        httpOnly:true,
        secure:process.env.NODE_ENV === 'production',
        maxAge: 60*60*2,
        path:'/admin'
    })
}

export async function getSessionData(req){
    const encryptedSessionData = cookies.get('session')?.value
    return encryptedSessionData ? JSON.parse(decrypt(encryptedSessionData)) : null
}