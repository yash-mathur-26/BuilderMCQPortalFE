import SelectTechnology from "@/components/technology-form/select-technology";
import { getTechnologies } from "@/lib/technology";
import React from "react";

async function AddQuestion() {
  const data = await getTechnologies();
  return <SelectTechnology data={data} />;
}

export default AddQuestion;
