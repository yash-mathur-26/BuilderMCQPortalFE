"use server";
import { sendUserLoginData } from "./admin-login";
import { cookies } from "next/headers";
export async function authentication(prevState, formData) {
  const loginDetails = {
    email: formData.get("email"),
    password: formData.get("password"),
  };
  try {
    const data = await sendUserLoginData(loginDetails);
    if (data) {
      handleLoginSession(data.data);
      return true;
    }
  } catch (error) {
    if (error) {
      return error.type === "CredentialsSignin"
        ? "Invalid credentials."
        : "Something went wrong.";
    }
    throw error;
  }
}

export async function handleLoginSession(sessionData) {
  const encryptedSessionData = sessionData?.token;
  cookies().set("session", encryptedSessionData, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 2,
    path: "/admin",
  });
}

export async function getSessionData() {
  const encryptedSessionData = cookies().get("session")?.value;
  return encryptedSessionData ? encryptedSessionData : null;
}
