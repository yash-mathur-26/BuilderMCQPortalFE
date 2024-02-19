import { getExams,getExamNameTechnologies } from "@/lib/exam";
import Link from "next/link"; 
export default async function UserExamDashboard(){
    const exam = await getExams();
    const examName = await getExamNameTechnologies();
    
    return (
            <div className="flex flex-wrap justify-around">
            <div key={exam.id} className="w-64 h-48 m-4 p-4 rounded-md shadow-md transition-transform transform bg-white hover:bg-gray-200">
                <h2 className="text-xl font-bold mb-2">{examName}</h2>
                <p className="text-gray-600 mb-2">Number of Questions: {exam.score}</p>
                <p className="text-gray-600 mb-2">Exam duration: {exam.duration}</p>
                
                {exam.isActive === true && (
                        <Link href={`/dashboard/exam/${examName}`} className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer">
                            Start Exam
                        </Link>
                )}
                {exam.isActive === false && (
                <button
                    className="bg-gray-400 text-gray-700 px-4 py-2 rounded cursor-not-allowed"
                    disabled
                >
                    Completed
                </button>
                )}
            </div>
        </div>
    )
}