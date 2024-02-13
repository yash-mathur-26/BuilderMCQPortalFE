"use server";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
export async function getQuestions() {
  const response = await fetch("http://localhost:8000/api/questions", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      token: cookies().get("session")?.value,
    },
  });
  const data = await response.json();
  return data.data;
}
function isInvalidText(text) {
  return !text || text.trim() === "";
}
export async function addQuestion(payload) {
  const response = await fetch("http://localhost:8000/api/questions", {
    cache: "no-store",
    method: "POST",
    body: JSON.stringify(payload),
    headers: {
      "Content-Type": "application/json",
      token: cookies().get("session")?.value,
    },
  });
  if (response.ok) {
    revalidatePath("/admin/questions");
  } else {
    throw new Error(data.message || "Something went wrong!");
  }
}
