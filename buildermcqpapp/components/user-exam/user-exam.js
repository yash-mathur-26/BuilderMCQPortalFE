"use client";
import React, { useState } from "react";
import Timer from "../timer/timer";

function UserExam({ data }) {
  const questions = data.questions.map((question, index) => {
    return { ...question, status: "not-attempted", index };
  });
  console.log("QUESTIONS =====> ", questions);
  const [options, setOptions] = useState(questions[0].options.split(" | "));
  const [optionType, setOptionType] = useState(questions[0].optionType);
  const [question, setQuestion] = useState(questions[0].question);
  const [questionObject, setQuestionObject] = useState(questions[0]);

  const setQuestionsToState = (index) => {
    setQuestion(questions[index].question);
    setOptions(questions[index].options.split(" | "));
    setQuestionObject(questions[index]);
  };

  const handleChangeQuestion = (index) => {
    setQuestionsToState(index);
    console.log("INDEX =====> ", index);
  };

  const handlePreviousQuestion = () => {
    if (questionObject.index > 0) {
      setQuestionsToState(questionObject.index - 1);
    }
  };

  const handleNextQuestion = () => {
    console.log(" NEXT ", question);
    console.log("INDEX ====> ", questionObject.index);
    if (questionObject.index < questions.length - 1) {
      setQuestionsToState(questionObject.index + 1);
    }
  };

  return (
    <div className="relative h-auto min-h-dvh w-full flex flex-col">
      <div className="bg-slate-400 font-black text-4xl h-12">
        <h1 className="text-center"> Builder MCQ Mock Test - ReactJS</h1>
      </div>
      <div className="flex justify-between min-h-dvh">
        <div className="flex flex-col justify-between w-full">
          <div className="m-10">
            <div>
              <h1 className="font-bold text-2xl">{question}</h1>
            </div>
            <div className="mt-8">
              {options.map((option) => {
                return (
                  <div className="h-8">
                    <input
                      type={optionType === "radio" ? "radio" : "checkbox"}
                      name="answer"
                      value={option}
                      className="mr-4"
                    />
                    <label className="text-xl">{option}</label>
                    <br />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="h-20 bg-gray-400 mt-auto">
            <div className="flex justify-between">
              <div>
                <button className="m-4 ml-10 focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
                  Mark for review
                </button>
                <button
                  onClick={() => handlePreviousQuestion()}
                  className="w-24 m-4 ml-10 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-l-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                >
                  Previous
                </button>
                <button
                  onClick={() => handleNextQuestion()}
                  className="w-24 m-4 ml-1 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-r-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                >
                  Next
                </button>
              </div>
              <div>
                <button className="m-4 mr-10 focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                  Submit Test
                </button>
              </div>
            </div>
          </div>
        </div>

        {/** Right navbar */}
        <div className="inset-y-12 text-center bg-slate-500 w-[300px]">
          <h1 className="bg-slate-600 text-2xl font-bold py-2">Time Left</h1>
          <Timer />
          <h1 className="bg-slate-600 text-2xl font-bold">Questions</h1>
          <div className="grid grid-cols-4 gap-2 mt-4">
            {questions.map((question, index) => {
              return (
                <div className="h-12">
                  <button
                    onClick={() => handleChangeQuestion(index)}
                    className={`${
                      question.status === "not-attempted"
                        ? "bg-[#E9ECEF]"
                        : "bg-green-400"
                    } w-9 h-9 rounded-tl-xl`}
                  >
                    {index + 1}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserExam;
