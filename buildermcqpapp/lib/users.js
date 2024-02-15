"use server";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
export async function getUsers() {
    const response = await fetch(`http://localhost:8000/api/users`, {
        method: "GET",
        headers: {
        "Content-Type": "application/json",
        token: cookies().get("session")?.value,
        },
    });
    const data = await response.json();
    return data.data;
}

export async function addUser(prevState,formState) {
    const userDetails = {
        name:formState.get('name'),
        email:formState.get('email'),
        password:formState.get('password'),
        technologyId:parseInt(formState.get('examTech'))
    }
    console.log('Users',userDetails);
    const response = await fetch("http://localhost:8000/api/users", {
        cache: "no-store",
        method: "POST",
        body: JSON.stringify(userDetails),
        headers: {
        "Content-Type": "application/json",
        token: cookies().get("session")?.value,
        },
    });
    if (response.ok) {
        revalidatePath("/admin/users");
    } else {
    throw new Error( response.status ||"Something went wrong!! Please try again Later...");
    }
}
