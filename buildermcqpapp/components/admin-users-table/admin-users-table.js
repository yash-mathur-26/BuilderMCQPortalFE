import { getUsers } from "@/lib/users";
import { getTechnologies } from "@/lib/technology";
export default async function UsersTable() {
    const data = await getUsers();
    const techData = await getTechnologies();
    const getTechName =(techId)=>{
        return techData.filter((row)=>{ if(row.id == techId) return row.name})[0].name;
    }
    return (
        <div className="overflow-x-auto">
        <table className="min-w-full bg-gray-100 border border-gray-300">
            <thead className="text-left">
            <tr>
                <th className="py-2 px-4 border-b bg-gray-200">Sno</th>
                <th className="py-2 px-4 border-b bg-gray-200">Name</th>
                <th className="py-2 px-4 border-b bg-gray-200">Email</th>
                <th className="py-2 px-4 border-b bg-gray-200">Technology Expert</th>
            </tr>
            </thead>
            <tbody>
            {data.map((row) => (
                <tr key={row.id}>
                    <td className="py-2 px-4 border-b">{row.id}</td>
                    <td className="py-2 px-4 border-b">{row.name}</td>
                    <td className="py-2 px-4 border-b">{row.email}</td>
                    <td className="py-2 px-4 border-b">{getTechName(row.technologyId)}</td>
                </tr>
            ))}
            </tbody>
        </table>
        </div>
    );
}
