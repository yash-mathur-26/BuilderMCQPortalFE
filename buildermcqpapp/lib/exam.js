'use server';
import { cookies } from "next/headers";

export async function getExamQuestions(id) {
  const response = await fetch(
    `http://localhost:8000/api/questions/generate-test?technology=${id}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        token: cookies().get("userSession")?.value,
      },
    }
  );
  const data = await response.json();
  return data.data;
}

export async function getExams(){
  'use server';
  const techId = cookies().get("userDataCookie")?.value?.technology?.id;
  const userId = cookies().get("userDataCookie")?.value?.id;
  const response = await fetch(
    `http://localhost:8000/api/tests?technology=${techId}&userId=${userId}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        token: cookies().get("userSession")?.value,
      },
    }
  );
  const data = await response.json();
  console.log("Exam Data",data)
  return data.data;
}