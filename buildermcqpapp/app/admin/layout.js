import React from "react";
import { getSessionData,removeSession } from "../../lib/actions";
import { redirect } from "next/navigation";
async function Layout({ children }) {
    const getSession = await getSessionData();
    if(getSession===null){
        console.log("get",getSession);
        removeSession()
        redirect('/admin');
    } 
    return <>{children}</>;
}

export default Layout;
