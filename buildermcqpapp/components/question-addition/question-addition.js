'use client';
import { useState } from "react"
import { useRouter } from "next/navigation"; 
import { getTechnologyId } from "@/lib/technology";
export default function QuestionAddition({technology}){
    const [ question, setQuestion ] = useState('');
    const [answers,setAnswers] = useState([
        { text:'', isCorrect:false },
        { text:'', isCorrect:false },
        { text:'', isCorrect:false },
        { text:'', isCorrect:false }
    ]);
    const [correctAnswer,setCorrectAnswer] = useState(['']);
    const [options,setOptions] = useState(['']);
    const handleAnswerChange = (index,text)=>{
        const newAnswers = [...answers];
        newAnswers[index].text = text;
        setAnswers(newAnswers);
    }
    const getTechId = getTechnologyId(technology);
    console.log(getTechId);
    const handleIsCorrectChange = (index)=>{
        const newAnswers = [...answers];
        newAnswers.forEach((answers,i)=>{
            if(i===index){
                answers.isCorrect = true;
            }
        })
    }
    const handleSubmitQnA= async (e)=>{
        e.preventDefault();
        setOptions(answers.map((e)=>e.text));
        setCorrectAnswer(answers.filter((e)=>e.isCorrect===true).map((e)=>e.text));
        console.log("Question",question);
        console.log("Answer",answers);
        console.log("Options",options);
        console.log("Correct",correctAnswer);
        console.log("TechnologyID",getTechId);
        setQuestion('');
        setAnswers(['','','','']);
        
        setCorrectAnswer([]);
    }
    return(
        <div className="max-w-md mx-auto bg-white p-8 mt-10 rounded-md shadow-md">
            <h2 className="text-2xl font-bold mb-6">Submit Question</h2>
            <form onSubmit={(e)=>handleSubmitQnA(e)}>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-600">
                        Question
                    </label>
                    <textarea className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                        row="4"
                        value={question}
                        onChange={(e)=>setQuestion(e.target.value)}
                        required
                    >
                    </textarea>
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-600">
                        Answers
                    </label>
                    {answers.map((answer,index)=>(
                        <div key={index} className="flex items-center mb-2">
                            <input
                                type="checkbox"
                                name="correctAnswer"
                                className="mr-2"
                                checked={answer.isCorrect}
                                onChange={()=>handleIsCorrectChange(index)}
                                />
                            <input
                                type="text"
                                className="w-4/5 p-2 border border-gray-300 rounded-md"
                                onChange={(e)=>handleAnswerChange(index,e.target.value)}
                                value={answer.text}
                                required
                            />
                        </div>
                    ))}
                    <button
                        type="submit"
                        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
                    >
                        Submit
                    </button>
                </div>
            </form>
            
        </div>
    )
}