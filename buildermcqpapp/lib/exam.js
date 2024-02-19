'use server';
import { cookies } from "next/headers";

export async function getExamQuestions() {
  const techId = JSON.parse(cookies().get('userDataCookie').value)?.technology?.id;
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

export async function getExams(){
  'use server';
  const techId = JSON.parse(cookies().get('userDataCookie').value)?.technology?.id;
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
export async function getExamNameTechnologies(){
  const response = await fetch('http://localhost:8000/api/technologies',{
      method: 'GET',
      headers:{
          'Content-Type': 'application/json',
          'token': cookies().get('userSession')?.value
      }
  });
  const data = await response.json();
  const techData = data.data;  
  const techId = JSON.parse(cookies().get('userDataCookie').value)?.technology?.id;
  const idData = techData.filter((row)=>{ if(row.id == techId) return row});
  return idData[0].name;
}