import React from "react";
import { getUserSessionData } from "../../lib/user-login";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";
async function Layout({ children }) {
  const getSession = await getUserSessionData();
  if(getSession===null){
    console.log("get",getSession);
    redirect('/');
  } 
  return <>{children}</>;
}

export default Layout;
