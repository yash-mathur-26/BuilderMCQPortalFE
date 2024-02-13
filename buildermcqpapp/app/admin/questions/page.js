import NavBarLinks from "@/components/admin-nav-bar/admin-nav-bar";
import QuestionsTable from "@/components/questions-table/questions-table";
import { getQuestions } from "@/lib/questions";
import React from "react";

async function page() {
  const data = await getQuestions();
  return (
    <div className="min-h-screen">
      <NavBarLinks />
      <QuestionsTable data={data} />
    </div>
  );
}

export default page;
