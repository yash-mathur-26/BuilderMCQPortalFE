'use server'
import { sendUserLoginData } from './admin-login';
import { cookies } from 'next/headers';
export async function authentication(prevState,formData){
    console.log("Logging Form",formData);
    const loginDetails = {
        email:formData.get('email'),
        password:formData.get('password')
    }
    try{
        const data = await sendUserLoginData(loginDetails)
        console.log("Error",data);
        if(data){
            handleLoginSession(data.data);
            return true;
        }
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
    const encryptedSessionData = sessionData?.token
    cookies().set('session',encryptedSessionData,{
        httpOnly:true,
        secure:process.env.NODE_ENV === 'production',
        maxAge: 60*60*2,
        path:'/admin'
    })
    console.log("Hello",cookies().get('session')?.value);
}

export async function getSessionData(){
    const encryptedSessionData = await cookies().get('session')?.value
    console.log("Sessions1",encryptedSessionData)
    return encryptedSessionData ? encryptedSessionData : null
}