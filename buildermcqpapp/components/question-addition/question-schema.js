import * as yup from "yup";

export const questionSchema = yup.object({
  question: yup.string().required(),
  technologyId: yup.number().required(),
  options: yup.string().required(),
  optionType: yup.string().required(),
  answer: yup.string().required(),
});
