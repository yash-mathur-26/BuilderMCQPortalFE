"use server";
import { cookies } from "next/headers";

export async function getExamQuestions() {
  const techId = JSON.parse(cookies().get("userDataCookie").value)?.technology
    ?.id;
  const response = await fetch(
    `http://localhost:8000/api/questions/generate-test?technology=${techId}`,
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

export async function getExams() {
  "use server";
  const techId = JSON.parse(cookies().get("userDataCookie").value)?.technology
    ?.id;
  const response = await fetch(
    `http://localhost:8000/api/tests?technology=${techId}`,
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

export async function createExamStat(body) {
  body.userId = JSON.parse(cookies().get("userDataCookie")?.value).id;
  const response = await fetch(`http://localhost:8000/api/exam`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      token: cookies().get("userSession")?.value,
    },
    body: JSON.stringify(body),
  });
  return await response.json();
}

export async function getUserTest() {
  const technology = JSON.parse(cookies().get("userDataCookie")?.value)
    .technology.id;
  const userId = JSON.parse(cookies().get("userDataCookie")?.value).id;
  const response = await fetch(
    `http://localhost:8000/api/tests?technology=${technology}&userId=${userId}&isCompleted=${false}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        token: cookies().get("userSession")?.value,
      },
    }
  );
  return await response.json();
}

export async function getExamNameTechnologies() {
  const response = await fetch("http://localhost:8000/api/technologies", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      token: cookies().get("userSession")?.value,
    },
  });
  const data = await response.json();
  const techData = data.data;
  const techId = JSON.parse(cookies().get("userDataCookie").value)?.technology
    ?.id;
  const idData = techData.filter((row) => {
    if (row.id == techId) return row;
  });
  return idData[0].name;
}

export async function updateTestDetails(body, id) {
  body.userId = JSON.parse(cookies().get("userDataCookie")?.value).id;
  const response = await fetch(`http://localhost:8000/api/tests?id=${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      token: cookies().get("userSession")?.value,
    },
    body: JSON.stringify(body),
  });
  return await response.json();
}
