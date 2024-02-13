import NavBarLinks from "@/components/admin-nav-bar/admin-nav-bar";
import QuestionAddition from "@/components/question-addition/question-addition";
import React from "react";

function AddQuestion() {
  return (
    <div className="min-h-screen">
      <NavBarLinks />
      <QuestionAddition />
    </div>
  );
}

export default AddQuestion;
