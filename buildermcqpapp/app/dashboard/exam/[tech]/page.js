import UserExam from "@/components/user-exam/user-exam";
import { getExamQuestions, getExamNameTechnologies } from "@/lib/exam";
import React from "react";

async function page() {
  const examName = await getExamNameTechnologies();
  const questions = await getExamQuestions();
  return <UserExam data={questions} examName={examName}/>;
}

export default page;
