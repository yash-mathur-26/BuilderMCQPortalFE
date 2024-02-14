'use client';
import { useState } from 'react'
import { useFormStatus } from 'react-dom';
import { updateTechnology } from '@/lib/technology';
import { techSchema } from './edit-technology';
import { useRouter } from 'next/navigation'; 
export default function EditTechnologyForm({technologyData}){
    const durations = Array.from({ length: 121 }, (_, i) => i); 
    const [noOfQuestions,setNoOfQuestions] = useState('');
    const [cutOff,setCutOff] = useState('');
    const [minutes,setMinutes] = useState('');
    const router = useRouter();
    const submitForUpdate=async(e)=>{
        e.preventDefault();
        const payload = await techSchema.validate({
            noOfQuestions:noOfQuestions,
            cutOff:cutOff,
            minutes:minutes
        });
        try {
        await updateTechnology(payload,technologyData.id);
        } catch (error) {
        console.log("Error", error);
        }
        router.push("/admin/technologies");
        
    }
    return(
        <div className="bg-gray-900 bg-opacity-20 rounded-lg p-6 shadow-md">
            <h3 className="text-2xl font-bold text-gray-200 text-left p-14">
                Update Exam for Technology
            </h3>
            <form className="bg-white p-8 rounded-md shadow-md" onSubmit={submitForUpdate}>
                <div className="mb-4">
                    <label htmlFor="Technology" className="block text-sm font-medium text-gray-600">
                        Technology Name
                    </label>
                    <input
                        type="text"
                        id="technologyName"
                        name="technologyName"
                        defaultValue={technologyData.name}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                        disabled
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="questions" className="block text-sm font-medium text-gray-600">
                        No. of Questions
                    </label>
                    <input
                        type="text"
                        id="noOfQuestions"
                        name="noOfQuestions"
                        defaultValue={technologyData.noOfQuestions}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                        onChange={(e) => setNoOfQuestions(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="cutOff" className="block text-sm font-medium text-gray-600">
                        Cut off
                    </label>
                    <input
                        type="text"
                        id="cutOff"
                        name="cutOff"
                        defaultValue={technologyData.cutOff}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                        onChange={(e) => setCutOff(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="examTime" className="block text-sm font-medium text-gray-600">
                        Exam Time (Minutes)
                    </label>
                    <select
                        id="minutes"
                        name="minutes"
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                        defaultValue={technologyData.duration}
                        onChange={(e) => setMinutes(e.target.value)}
                    >
                        <option value="">Select Minutes</option>
                        {durations.map((min)=>(
                            <option key={min} value={min}>
                                {min} { min===1 ? 'min':'mins' }
                            </option>
                        ))}
                    </select>
                </div>
                <UpdateTechButton/>
            </form>
        </div>
    )
}
function UpdateTechButton() {
    const { pending } = useFormStatus();
    return (
        <div>
        <button
            aria-disabled={pending}
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
            Update Technology
        </button>
        </div>
    );
}