'use client'
import { authentication } from "@/lib/actions"
import { useFormState, useFormStatus } from 'react-dom';
export default function AdminLoginForm(){
    const [ errorMessage,dispatch ] = useFormState(authentication,undefined);
    return(
    <>
        <div className="bg-gray-800 bg-opacity-20 rounded-lg p-6 shadow-md">
            <h2 className="text-2xl font-bold text-gray-200 text-center">Admin Login</h2>
                <form className="space-y-4" action={authentication}>
                    <div className="flex flex-col space-y-4">
                        <label className="text-gray-200 font-bold">Username</label>
                        <input 
                            type="email"
                            className="border border-gray-300 p-2 rounded-md"
                            placeholder="Enter your email"
                            name="email"
                            required
                        />
                        <label className="text-gray-200 font-bold">Password</label>
                        <input
                            type="password"
                            name="password"
                            className="border border-gray-300 p-2 rounded-md"
                            placeholder="Enter your password"
                            required
                        />
                    </div>
                    <div className="bg-red-100 border border-red-400text-red-700 px-4 py-2 rounded-md">
                        {errorMessage && <p className="text-sm">{errorMessage}</p>}
                    </div>
                    <LoginButton/>
                </form>
        </div>
    </>
    )
}

function LoginButton(){
    const {pending} = useFormStatus();
    return (
        <div>
            <button type="submit" aria-disabled={pending} className="bg-blue-500 text-white py-2 px-4 flex items-center space-x-2 rounded-md">
                Login
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 517 7-7 7"></path>
                </svg>   
            </button>    
        </div>
    )
}