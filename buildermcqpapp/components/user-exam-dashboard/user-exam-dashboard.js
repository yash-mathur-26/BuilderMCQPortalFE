import { getExams } from "@/lib/exam";

export default async function UserExamDashboard(){
    const examData = await getExams();
    console.log("Exam Data on PAge", examData);
    const exams = [
        { id: 'technology1', title: 'Technology 1', questions: 20, status: 'idle' },
        { id: 'technology2', title: 'Technology 2', questions: 15, status: 'completed' },
        // Add more exams as needed
        ];
    return (
            <div className="flex flex-wrap justify-around">
            {exams.map((exam) => (
            <div key={exam.id} className="w-64 h-48 m-4 p-4 rounded-md shadow-md transition-transform transform bg-white hover:bg-gray-200">
                <h2 className="text-xl font-bold mb-2">{exam.title}</h2>
                <p className="text-gray-600 mb-2">Number of Questions: {exam.questions}</p>
                {exam.status === 'idle' && (
                <button
                    className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer"
                >
                    Start Exam
                </button>
                )}
                {exam.status === 'completed' && (
                <button
                    className="bg-gray-400 text-gray-700 px-4 py-2 rounded cursor-not-allowed"
                    disabled
                >
                    Completed
                </button>
                )}
            </div>
            ))}
        </div>
    )
}