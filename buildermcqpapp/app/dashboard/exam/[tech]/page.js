import UserExam from "@/components/user-exam/user-exam";
import { getExamQuestions } from "@/lib/exam";
import React from "react";

async function page({ params }) {
  console.log("TECH ====> ", params.tech);
  const questions = await getExamQuestions(params.tech);
  return <UserExam data={questions} />;
}

export default page;
