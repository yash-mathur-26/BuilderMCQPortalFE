import { createExamStat, getUserTest, updateTestDetails } from "@/lib/exam";

export const submitExamStat = async (body, setAnswerResponse) => {
  const testDetails = await getUserTest();
  body.testId = testDetails.data[0].id;
  const data = await createExamStat(body);
  setAnswerResponse(data, testDetails.data[0].id);
  return data;
};

export const updateTestData = async (body, testId, setUpdateResponse) => {
  const response = await updateTestDetails(body, testId);
  setUpdateResponse(response);
  return response;
};
