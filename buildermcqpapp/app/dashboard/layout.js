import React from "react";
import { getUserSessionData,removeUserSession } from "../../lib/user-login";
import { redirect } from "next/navigation";
async function Layout({ children }) {
  const getSession = await getUserSessionData();
  if(getSession===null){
    console.log("get",getSession);
    removeUserSession();
    redirect('/');
  } 
  return <>{children}</>;
}

export default Layout;
