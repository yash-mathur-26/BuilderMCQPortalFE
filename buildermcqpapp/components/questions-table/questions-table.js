"use client";
import { useRouter } from "next/navigation";
import { FiDelete } from "react-icons/fi";

export default function QuestionsTable({ data }) {
  const navigate = useRouter();
  return (
    <div className="overflow-x-auto">
      <div className="px-4 py-2 text-right">
        <button
          onClick={() => navigate.push("/admin/questions/add-question")}
          className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >
          Add Question
        </button>
      </div>
      <table className="min-w-full bg-gray-100 border border-gray-300">
        <thead className="text-left">
          <tr>
            <th className="py-2 px-4 border-b bg-gray-200">ID</th>
            <th className="py-2 px-4 border-b bg-gray-200">Question</th>
            <th className="py-2 px-4 border-b bg-gray-200">Technology</th>
            <th className="py-2 px-4 border-b bg-gray-200">Options</th>
            <th className="py-2 px-4 border-b bg-gray-200">Answer</th>
            <th className="py-2 px-4 border-b bg-gray-200">Option Type</th>
            <th className="py-2 px-4 w-[60px] border-b bg-gray-200">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id}>
              <td className="py-2 px-4 border-b">{row.id}</td>
              <td className="py-2 px-4 border-b">{row.question}</td>
              <td className="py-2 px-4 border-b">{row.technology.name}</td>
              <td className="py-2 px-4 border-b">{row.options}</td>
              <td className="py-2 px-4 border-b">{row.answer}</td>
              <td className="py-2 px-4 border-b">
                {row.optionType === "radio" ? "single" : "multiple"}
              </td>
              <td className="py-2 px-4 border-b">
                <button className="text-red-500 hover:text-red-600">
                  <FiDelete />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
