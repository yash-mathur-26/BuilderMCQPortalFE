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
