import UserExam from "@/components/user-exam/user-exam";
import { getExamQuestions } from "@/lib/exam";
import React from "react";

async function page() {
  const questions = await getExamQuestions();
  return <UserExam data={questions} />;
}

export default page;
