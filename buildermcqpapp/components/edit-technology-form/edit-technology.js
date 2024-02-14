import * as yup from "yup";

export const techSchema = yup.object({
    noOfQuestions: yup.number().required(),
    cutOff: yup.number().required(),
    minutes: yup.number().required(),
});