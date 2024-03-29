"use client";
import Image from "next/image";
import Test from "../../assets/Test.jpg";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation"; 
import { removeAdminSession } from "@/lib/admin-login"; 
export default function NavBarLinks() {
  const [dropdown, setDropDown] = useState(false);
  const handleDropDown = () => {
    setDropDown(!dropdown);
  };
  const router = useRouter();
  const logout=()=>{
    removeAdminSession();
    router.push('/admin');
  }
  return (
    <div className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <div className="flex space-x-4">
        <Link href="/admin/dashboard" className="hover:text-gray-300">
          Home
        </Link>
        <Link href="/admin/technologies" className="hover:text-gray-300">
          Technologies
        </Link>
        <Link href="/admin/dashboard" className="hover:text-gray-300">
          Exam Scheduler
        </Link>
        <Link href="/admin/questions" className="hover:text-gray-300">
          Questions
        </Link>
        <Link href="/admin/users" className="hover:text-gray-300">
          Users
        </Link>
      </div>
      <div className="relative">
        <button
          className="flex items-center focus:outline-none"
          onClick={handleDropDown}
        >
          <Image src={Test} className="w-8 h-8 rounded-full mr-2" />
          <span className="hidden md:block">Yash Mathur</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-4 h-4 ml-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
        {dropdown && (
          <div className="hidden md:block absolute top-12 right-0 bg-white text-gray-800 p-2 rounded-md shadow-md">
            <Link
              href="/admin/profile"
              className="hover:text-gray-300 block py-2"
            >
              Profile
            </Link>
            <Link href="" className="hover:text-gray-300 block py-2" onClick={logout}>
              Logout
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
