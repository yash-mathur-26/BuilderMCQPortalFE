"use client";
import { useFormState, useFormStatus } from "react-dom";
import { addTechnology } from "@/lib/technology";
export default function TechnologyAddition() {
  const durations = Array.from({ length: 121 }, (_, i) => i);
  const [state, formAction] = useFormState(addTechnology, null);
  return (
    <div className="bg-gray-900 bg-opacity-20 rounded-lg p-6 shadow-md">
      <h3 className="text-2xl font-bold text-gray-200 text-left p-14">
        Add Technologies for Exams
      </h3>
      <form className="bg-white p-8 rounded-md shadow-md" action={formAction}>
        <div className="mb-4">
          <label
            htmlFor="Technology"
            className="block text-sm font-medium text-gray-600"
          >
            Technology Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="questions"
            className="block text-sm font-medium text-gray-600"
          >
            No. of Questions
          </label>
          <input
            type="text"
            id="noOfQuestions"
            name="noOfQuestions"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="cutOff"
            className="block text-sm font-medium text-gray-600"
          >
            Cut off
          </label>
          <input
            type="text"
            id="cutOff"
            name="cutOff"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="examTime"
            className="block text-sm font-medium text-gray-600"
          >
            Exam Time (Minutes)
          </label>
          <select
            id="duration"
            name="duration"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          >
            <option value="">Select Minutes</option>
            {durations.map((min) => (
              <option key={min} value={min}>
                {min} {min === 1 ? "min" : "mins"}
              </option>
            ))}
          </select>
        </div>
        <AddTechButton />
      </form>
    </div>
  );
}
function AddTechButton() {
  const { pending } = useFormStatus();
  return (
    <div>
      <button
        aria-disabled={pending}
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Add Technology
      </button>
    </div>
  );
}
