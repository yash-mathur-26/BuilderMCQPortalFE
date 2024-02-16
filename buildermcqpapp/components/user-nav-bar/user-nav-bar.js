"use client";
import Image from "next/image";
import Test from "../../assets/Test.jpg";
import { useState } from "react";
import { useRouter } from "next/navigation"; 
import Link from "next/link";
import { removeSession } from "@/lib/user-login"; 
export default function NavBarLinks() {
  const [dropdown, setDropDown] = useState(false);
  const router = useRouter();
  const handleDropDown = () => {
    setDropDown(!dropdown);
  };
  const logout=()=>{
    removeSession();
    router.push('/');
  }
  return (
    <div className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <div className="flex space-x-4">
        <Link href="dashboard" className="hover:text-gray-300">
          Home
        </Link>
        <Link href="/dashboard/exam/React" className="hover:text-gray-300">
          Exams
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
              href="/dashboard/profile"
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
