"use client";
import React from "react";
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
      {children}
    </>
  );
}

export default Layout;
