'use server';
import { revalidatePath } from "next/cache";
import { getTechnologyId } from "./technology"; 
import { cookies } from "next/headers"; 
function isInvalidText(text){
    return !text || text.trim() === '';
}
export async function scheduleExam(payload){
    const examData = {
        technology:payload.technology,
        score:payload.score,
        startDate:payload.startDate,
        endDate:payload.endDate,
        duration:payload.duration
    }
    if(
        isInvalidText(payload.technology) || 
        isInvalidText(payload.duration) || 
        isInvalidText(payload.score) ||
        isInvalidText(payload.startDate) ||
        isInvalidText(payload.endDate)
        ) {
            return {
                message: 'Invalid Input.'
            };
        }
    const response = await fetch('http://localhost:8000/api/tests',{
        cache:'no-store',
        method: 'POST',
        body: JSON.stringify(examData),
        headers:{
            'Content-Type': 'application/json',
            'token': cookies().get('session')?.value
        }
    });
    if(!response.ok){
        throw new Error(data.message || 'Something went wrong!');
    } else {
        revalidatePath('/admin/dashboard');
    }
}