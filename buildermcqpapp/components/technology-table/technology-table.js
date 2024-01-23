
export default function TechnologyTable({techs}) {
    return (
        <div className="container mx-auto mt-8">
            <h1 className="text-2xl font-semibold mb-4">Exam Information</h1>
            <table className="min-w-full border border-gray-300">
                <thead>
                <tr className="bg-gray-200">
                    <th className="border p-2">Name</th>
                    <th className="border p-2">Duration</th>
                    <th className="border p-2">Questions</th>
                    <th className="border p-2">Cutoff</th>
                </tr>
                </thead>
                <tbody>
                {techs.data.map((exam, index) => (
                    <tr key={index}>
                    <td className="border p-2">{exam.name}</td>
                    <td className="border p-2">{exam.duration}</td>
                    <td className="border p-2">{exam.noOfQuestions}</td>
                    <td className="border p-2">{exam.cutOff}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            </div>
    )
}
