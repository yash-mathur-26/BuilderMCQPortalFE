export default function AdminLoginForm(){
    return(
    <>
        <div className="bg-gray-800 bg-opacity-20 rounded-lg p-6 shadow-md">
            <h2 className="text-2xl font-bold text-gray-200 text-center">Admin Login</h2>
                <form className="space-y-4">
                    <div className="flex flex-col space-y-4">
                        <label className="text-gray-200 font-bold">Username</label>
                        <input 
                            type="text"
                            className="border border-gray-300 p-2 rounded-md"
                            placeholder="Enter your username"
                        />
                        <label className="text-gray-200 font-bold">Password</label>
                        <input
                            type="password"
                            className="border border-gray-300 p-2 rounded-md"
                            placeholder="Enter your password"
                        />
                    </div>
                    <div>
                    <button className="bg-blue-500 text-white py-2 px-4 flex items-center space-x-2 rounded-md">
                        Login
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 517 7-7 7"
                            ></path>
                        </svg>   
                    </button>
                
                    </div>
                    </form>
        </div>
    </>
    )
}