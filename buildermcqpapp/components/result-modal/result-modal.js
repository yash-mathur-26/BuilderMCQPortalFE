// ResultModal.js
import { useState } from 'react';

const ResultModal = ({ isOpen, onClose, correctAnswers, wrongAnswers,result }) => {
    return (
        <div className={`fixed top-0 left-0 w-full h-full flex items-center justify-center ${isOpen ? '' : 'hidden'}`}>
        <div className="bg-white p-6 rounded-md shadow-md">
            <div className="mb-4">
            <h1 className="text-2xl font-bold mb-2">Exam Results</h1>
            <p>Correct Answers: {correctAnswers}</p>
            <p>Wrong Answers: {wrongAnswers}</p>
            <p>Result: {result}</p>
            </div>
            <div className="mt-4 flex justify-end">
            <button
                className="px-4 py-2 bg-blue-500 text-white rounded-md"
                onClick={onClose}
            >
                Close
            </button>
            </div>
        </div>
        </div>
    );
};

export default ResultModal;
