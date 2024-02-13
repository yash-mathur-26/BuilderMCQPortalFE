"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { addQuestion } from "@/lib/questions";
import { questionSchema } from "./question-schema";

const QuestionAddition = ({ technology }) => {
  const router = useRouter();
  const [question, setQuestion] = useState("");
  const [answers, setAnswers] = useState([""]);
  const [correctAnswer, setCorrectAnswer] = useState(null);
  const [isMultipleChoice, setIsMultipleChoice] = useState(true);

  const addAnswer = () => {
    setAnswers([...answers, ""]);
  };

  const removeAnswer = (index) => {
    const updatedAnswers = [...answers];
    updatedAnswers.splice(index, 1);
    setAnswers(updatedAnswers);

    if (correctAnswer === index) {
      setCorrectAnswer(null);
    }
  };

  const handleAnswerChange = (index, value) => {
    const updatedAnswers = [...answers];
    updatedAnswers[index] = value;
    setAnswers(updatedAnswers);
  };

  const handleCorrectAnswerChange = (handleAnswer) => {
    if (isMultipleChoice) {
      const isChecked =
        correctAnswer === null ? true : !correctAnswer.includes(handleAnswer);

      if (isChecked) {
        setCorrectAnswer((prevCorrectAnswer) => [
          ...(prevCorrectAnswer || []),
          handleAnswer,
        ]);
      } else {
        setCorrectAnswer((prevCorrectAnswer) =>
          prevCorrectAnswer.filter((ans) => ans !== handleAnswer)
        );
      }
    } else {
      setCorrectAnswer(handleAnswer);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add your logic to submit the form data
    const payload = await questionSchema.validate({
      question,
      answer: correctAnswer?.join(" | "),
      options: answers?.join(" | "),
      optionType: isMultipleChoice ? "checkbox" : "radio",
      technologyId: technology.technology,
    });
    try {
      await addQuestion(payload);
    } catch (error) {
      console.log("Error", error);
    }
    router.push("/admin/technologies");
    // console.log({ question, answers, correctAnswer, isMultipleChoice });
  };

  return (
    <div className="h-dvh max-w-md mx-auto rounded-md shadow-md mb-[10px]">
      <form
        className="max-w-md mx-auto mt-8 p-4 border rounded shadow-lg bg-white"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold mb-6">Add Question</h2>
        <label className="block mb-2">
          Question:
          <input
            className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />
        </label>

        {answers.map((answer, index) => (
          <div key={index} className="mb-4">
            <label className="block mb-2">
              Option {index + 1}:
              <input
                className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
                type="text"
                value={answer}
                onChange={(e) => handleAnswerChange(index, e.target.value)}
              />
            </label>

            <label className="inline-block mr-4">
              <input
                type={isMultipleChoice ? "checkbox" : "radio"}
                checked={
                  isMultipleChoice
                    ? correctAnswer?.includes(answer)
                    : correctAnswer === answer
                }
                onChange={() => handleCorrectAnswerChange(answer)}
              />
              <span className="ml-2">Correct</span>
            </label>

            <button
              type="button"
              className="bg-red-500 text-white px-3 py-1 rounded"
              onClick={() => removeAnswer(index)}
            >
              Remove
            </button>
          </div>
        ))}

        <button
          type="button"
          className="bg-green-500 text-white px-3 py-1 rounded"
          onClick={addAnswer}
        >
          Add Option
        </button>

        <div className="mt-4">
          <label className="mr-4">
            <input
              type="radio"
              name="answerType"
              value="single"
              checked={!isMultipleChoice}
              onChange={() => setIsMultipleChoice(false)}
            />
            <span className="ml-2">Single Answer</span>
          </label>

          <label>
            <input
              type="radio"
              name="answerType"
              value="multiple"
              checked={isMultipleChoice}
              onChange={() => setIsMultipleChoice(true)}
            />
            <span className="ml-2">Multiple Answers</span>
          </label>
        </div>

        <button
          type="submit"
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default QuestionAddition;
