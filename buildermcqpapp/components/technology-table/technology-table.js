import { FiEdit, FiDelete } from "react-icons/fi";
export default function TechnologyTable(){
    
    const data = [
        { sno: 1, techName: 'React', questions: 20, cutoff: 70, examTime: '90 mins' },
        { sno: 2, techName: 'Node.js', questions: 15, cutoff: 65, examTime: '75 mins' },
        { sno: 3, techName: 'JavaScript', questions: 25, cutoff: 75, examTime: '120 mins' },
        { sno: 4, techName: 'HTML', questions: 10, cutoff: 50, examTime: '45 mins' },
        { sno: 5, techName: 'CSS', questions: 15, cutoff: 60, examTime: '60 mins' },
        { sno: 6, techName: 'Next.js', questions: 18, cutoff: 68, examTime: '90 mins' },
    ]
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
                            <tr key={row.sno}>
                                <td className="py-2 px-4 border-b">{row.sno}</td>
                                <td className="py-2 px-4 border-b">{row.techName}</td>
                                <td className="py-2 px-4 border-b">{row.questions}</td>
                                <td className="py-2 px-4 border-b">{row.cutoff}</td>
                                <td className="py-2 px-4 border-b">{row.examTime}</td>
                                <td className="py-2 px-4 border-b">
                                    <button className="mr-2 text-blue-500 hover:text-blue-600">
                                        <FiEdit/>
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