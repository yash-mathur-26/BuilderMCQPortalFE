import Link from "next/link";
import { FiEdit, FiDelete, FiPlus } from "react-icons/fi";
import { getTechnologies } from "@/lib/technology";
export default async function TechnologyTable(){
    
    const data = await getTechnologies();
    console.log("Technology Table",data);
    return(
        <>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-gray-100 border border-gray-300">
                    <thead className="text-left">
                        <tr>
                            <th className="py-2 px-4 border-b bg-gray-200">Sno</th>
                            <th className="py-2 px-4 border-b bg-gray-200">Technology Name</th>
                            <th className="py-2 px-4 border-b bg-gray-200">No. Of Questions</th>
                            <th className="py-2 px-4 border-b bg-gray-200">CutOff</th>
                            <th className="py-2 px-4 border-b bg-gray-200">Exam Time</th>
                            <th className="py-2 px-4 border-b bg-gray-200">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((row)=>(
                            <tr key={row.id}>
                                <td className="py-2 px-4 border-b">{row.id}</td>
                                <td className="py-2 px-4 border-b">{row.name}</td>
                                <td className="py-2 px-4 border-b">{row.noOfQuestions}</td>
                                <td className="py-2 px-4 border-b">{row.cutOff}</td>
                                <td className="py-2 px-4 border-b">{row.duration}</td>
                                <td className="py-2 px-4 border-b">
                                    <button className="mr-2 text-green-500 hover:text-green-600">
                                        <Link href={`/admin/technologies/${row.name}/questions`}>
                                            <FiPlus/>
                                        </Link>
                                    </button>
                                    <button className="mr-2 text-blue-500 hover:text-blue-600">
                                        <Link href={`/admin/technologies/${row.techName}/editexam`}>
                                            <FiEdit/>
                                        </Link>
                                    </button>
                                    <button className="text-red-500 hover:text-red-600">
                                        <FiDelete/>
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}