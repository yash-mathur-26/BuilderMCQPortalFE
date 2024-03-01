import { createExamStat, getUserTest, updateTestDetails,getExamResult,getTest } from "@/lib/exam";

export const submitExamStat = async (body, setAnswerResponse) => {
  const testDetails = await getUserTest();
  console.log("Test",testDetails)
  body.testId = testDetails.data[0].id;
  console.log("Test",testDetails)
  const data = await createExamStat(body);
  setAnswerResponse(data, testDetails.data[0].id);
  return data;
};

export const updateTestData = async (body,testId) => {
  const response = await updateTestDetails(body,testId);
  return response;
};

export const getExamResults = async(body,testId)=>{
  const response = await getExamResult(body,testId);
  // console.log("Response",response);
  return response;
}
export const getTestResults = async()=>{
  const response = await getTest();
  console.log("Response",response[0].technology.cutOff);
  return response[0].technology.cutOff;
}