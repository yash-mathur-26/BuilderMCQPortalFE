'use client';
import { useFormState,useFormStatus } from 'react-dom';
import { addTechnology } from "@/lib/technology";
export default function TechnologyForm(){
    const [state, formAction] = useFormState(addTechnology,null)
    const durations = Array.from({ length: 121 }, (_, i) => i); 
    return(
        <>
        <header>
            <div>
                <h1>Add the Technologies and it's required data for Exams</h1>
            </div>
        </header>
        <main>
        <div className="container mx-auto mt-8">
            
        <h1 className="text-2xl font-semibold mb-4">Technology Form</h1>
        <form className="max-w-lg mx-auto grid grid-cols-2 gap-4" method="post" action={formAction}>
            <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Name:
            </label>
            <input
                type="text"
                id="name"
                name="name"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            </div>
            <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="duration">
                Duration:
            </label>
            <select
                id="duration"
                name="duration"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            >
                {durations.map((min) => (
                <option key={min} value={min}>
                    {min} mins
                </option>
                ))}
            </select>
            </div>
            <div className="mb-4 col-span-2">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="numberOfQuestions">
                Number of Questions:
            </label>
            <input
                type="number"
                id="numberOfQuestions"
                name="numberOfQuestions"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            </div>
            <div className="mb-4 col-span-2">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cutoff">
                Cutoff:
            </label>
            <input
                type="number"
                id="cutOff"
                name="cutOff"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            </div>
            <div className="col-span-2 flex justify-center">
                <AddTechButton/>
            {state && <p>{state}</p> }
            
            </div>
        </form>
        </div>
        </main>
        </>
    )
}
function AddTechButton(){
    const {pending} = useFormStatus();
    return (
        <div>
            <button aria-disabled={pending} type='submit'
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Add Technology 
            </button>    
        </div>
    )
}