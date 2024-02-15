"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { sendUserLoginData } from '@/lib/user-login'; 
export default function UserLogin(){
    const [enteredEmail, setEnteredEmail] = useState('');
    const [enteredPassword, setEnteredPassword] = useState('');
    const router = useRouter();
    async function handleLogin(event){
        event.preventDefault();
        try{
            await sendUserLoginData({
                email:enteredEmail,
                password:enteredPassword
            })
        }catch(error){
            console.log("Error",error);
        }
        setEnteredEmail('');
        setEnteredPassword('');
        router.push('/dashboard');
    }

    return (
        <>
        <div className="flex-1 flex justify-center items-center">
        <div className="bg-white p-8 rounded-md shadow-md w-96">
            <h2 className="text-2xl font-bold mb-6">Login</h2>
            <form className="space-y-4">
            <div>
                <label className="block text-sm font-medium text-gray-600">Username</label>
                <input
                type="text"
                className="mt-1 p-2 w-full border rounded-md"
                placeholder="Enter your username"
                value={enteredEmail}
                onChange={(e) => setEnteredEmail(e.target.value)}
                />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-600">Password</label>
                <input
                type="password"
                className="mt-1 p-2 w-full border rounded-md"
                placeholder="Enter your password"
                value={enteredPassword}
                onChange={(e) => setEnteredPassword(e.target.value)}
                />
            </div>
            <button
                type="button"
                className="bg-blue-500 text-white p-2 rounded-md w-full"
                onClick={handleLogin}>   
                Login
            </button>
            </form>
        </div>
        </div>
        </>
    ) 
}