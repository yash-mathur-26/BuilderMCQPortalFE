"use client";
import Link from 'next/link';
import classes from "./page.module.css";
import { useEffect } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { checkLogin,removeToken } from '@/lib/admin-login';
export default function AdminDashboard(){
    const router = useRouter();
    useEffect(()=>{
        const sessionToken = checkLogin();
        if(!sessionToken){
            router.push('/admin');
        }
    })
    const handleLogout=()=>{
        removeToken();
        router.push('/admin');
    }
    return(
        <>
            <div className="min-h-screen bg-gray-100 bg-opacity-50">
                <header className="bg-blue-500 p-4 text-white">
                    <nav className="container mx-auto flex justify-between items-center">
                    <Link href='/admin/adminDashboard'>
                        <p className="text-lg font-semibold">Admin Dashboard</p>
                    </Link>
                    <ul className="flex space-x-4">
                        <li>
                        <Link href="/admin/exams">
                            <p className="hover:underline">Exams</p>
                        </Link>
                        </li>
                        <li>
                        <Link href="/admin/profile">
                            <p className="hover:underline">Profile</p>
                        </Link>
                        </li>
                        <li>
                        <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded-md">
                            Logout
                        </button>
                        </li>
                    </ul>
                    </nav>
                </header>
            <main className="min-h-screen flex items-center m-0 justify-center">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    <div className="bg-white p-6 rounded shadow-md">
                    <Link href="/admin/technologies">
                        <p className="text-blue-500 hover:underline text-lg font-semibold block">
                        Technologies Page
                        </p>
                    </Link>
                    </div>

                    <div className="bg-white p-6 rounded shadow-md">
                    <Link href="/admin/AddQuestions">
                        <p className="text-blue-500 hover:underline text-lg font-semibold block">
                        Questions Page
                        </p>
                    </Link>
                    </div>

                    <div className="bg-white p-6 rounded shadow-md">
                    <Link href="/Exam">
                        <p className="text-blue-500 hover:underline text-lg font-semibold block">
                        Exam Page
                        </p>
                    </Link>
                    </div>
                </div>
            </main>
        </div>
        </>
    )
}