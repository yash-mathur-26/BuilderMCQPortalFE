'use client'
import { useState } from 'react';
export default function ExamScheduler(){
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [technology, setTechnology] = useState('');
    const [score, setScore] = useState('');
    const [duration, setDuration] = useState('');
    const [errors, setErrors] = useState({});
    const techOptions = [{id:1,name:"React"},{id:2,name:"Node JS"},{id:3,name:"ROR"},]
    const handleSubmit = (e) => {
        e.preventDefault();
    
        const validationErrors = {};
        if (!startDate) {
            validationErrors.startDate = 'Start date is required';
        }
        if (!endDate) {
            validationErrors.endDate = 'End date is required';
        }
        
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;  
        }
    
        console.log('Form submitted:', { startDate, endDate, technology, score, duration });
    
        setStartDate('');
        setEndDate('');
        setTechnology('');
        setScore('');
        setDuration('');
        setErrors({});
        };
    
    return(
        <div className="max-w-md mx-auto bg-white p-8 mt-10 rounded-md shadow-md">
        <h2 className="text-2xl font-bold mb-6">Exam Scheduler</h2>
        <form onSubmit={handleSubmit}>
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-600">Exam Start Date</label>
                <input
                type="date"
                className={`mt-1 block w-full p-2 border ${errors.startDate ? 'border-red-500' : 'border-gray-300'} rounded-md`}
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                required
                />
                {errors.startDate && <p className="text-red-500 text-sm mt-1">{errors.startDate}</p>}
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-600">Exam End Date</label>
                <input
                type="date"
                className={`mt-1 block w-full p-2 border ${errors.endDate ? 'border-red-500' : 'border-gray-300'} rounded-md`}
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                required
                />
                {errors.endDate && <p className="text-red-500 text-sm mt-1">{errors.endDate}</p>}
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-600">Exam Technology</label>
                <select
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                value={technology}
                onChange={(e) => setTechnology(e.target.value)}
                required
                >
                <option value="">Select an exam technology</option>
                {techOptions.map((tech) => (
                <option key={tech.id} value={tech.id}>
                    {tech.name}
                </option>
                ))}
            </select>
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-600">Exam Score</label>
                <input
                type="text"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                value={score}
                onChange={(e) => setScore(e.target.value)}
                required
                />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-600">Exam Duration</label>
                <input
                type="text"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                required
                />
            </div>
            <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
            >
                Schedule Exam
            </button>
            </form>
        </div>
    )
}