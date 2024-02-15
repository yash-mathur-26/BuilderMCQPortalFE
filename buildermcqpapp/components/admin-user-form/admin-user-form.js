"use client";
import { addUser } from "@/lib/users";
import { useFormState, useFormStatus } from "react-dom";

export default function AddUserForm({examTech}) {
    const [state, formAction] = useFormState(addUser, undefined);
    return (
        <div className="bg-gray-800 bg-opacity-20 rounded-md p-6 grid-cols-6 shadow-md">
        <h2 className="text-2xl font-bold text-gray-200 text-center">
            Technology Experts
        </h2>
        <form className="space-y-4" action={formAction}>
            <div className="flex flex-col space-y-4">
            <label className="text-gray-200 font-bold">Name</label>
            <input
                type="name"
                className="border border-gray-300 p-2 rounded-md"
                placeholder="Enter Expert's Name"
                name="name"
                required
            />
            <label className="text-gray-200 font-bold">Username</label>
            <input
                type="email"
                className="border border-gray-300 p-2 rounded-md"
                placeholder="Enter your email"
                name="email"
                required
            />
            <label className="text-gray-200 font-bold">Password</label>
            <input
                type="password"
                name="password"
                className="border border-gray-300 p-2 rounded-md"
                placeholder="Enter your password"
                required
            />
            </div>
            <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">
                Exam Technology
            </label>
            <select
                name="examTech"
                id="examTech"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                placeholder="Select a Technology Exam"
                required
            >
                <option value="">Select an exam technology</option>
                {examTech.map((tech) => (
                <option key={tech.id} value={tech.id}>
                    {tech.name}
                </option>
                ))}
            </select>
        </div>
            <AddUserButton />
        </form>
        </div>
    );
}

function AddUserButton() {
    const { pending } = useFormStatus();
    return (
        <div>
        <button
            type="submit"
            aria-disabled={pending}
            className="bg-blue-500 text-white py-2 px-4 flex items-center space-x-2 rounded-md"
        >
            Add User
        </button>
        </div>
    );
}
