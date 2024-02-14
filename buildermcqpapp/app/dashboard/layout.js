"use client";
import React from "react";
import Logo from "../../components/logo/logo";
import Link from "next/link";
import { useEffect } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

function Layout({ children }) {
  const router = useRouter();
  useEffect(() => {
    const sessionToken = Cookies.get("sessionToken");
    if (!sessionToken) {
      router.push("/");
    }
  });
  const handleLogout = () => {
    Cookies.remove("sessionToken");
    router.push("/");
  };
  return (
    <>
      <header className="w-[100%] h-4 bg-[var(--color-grey-900)] flex justify-between items-center py-[5%]">
        <Link href="/dashboard">
          <Logo />
        </Link>
        <nav>
          <ul className="list-none flex items-baseline m-0 pl-1">
            <li className="pr-4">
              <Link
                href="/exams"
                className="hover:text-gray-400 active:text-gray-400"
              >
                Exams
              </Link>
            </li>
            <li className="pr-4">
              <Link
                href="/profile"
                className="hover:text-gray-400 active:text-gray-400"
              >
                Profile
              </Link>
            </li>
            <li className="pr-4">
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white p-2 rounded-md w-full"
              >
                Logout
              </button>
            </li>
          </ul>
        </nav>
      </header>
      {children}
    </>
  );
}

export default Layout;
