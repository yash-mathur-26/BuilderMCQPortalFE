'use server';
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
export async function getTechnologies(){
    const response = await fetch('http://localhost:8000/api/technologies',{
        method: 'GET',
        headers:{
            'Content-Type': 'application/json',
            'token': cookies().get('session')?.value
        }
    });
    const data = await response.json();
    return data.data;  
}
export async function getTechnologyId(techName){
    const data = await getTechnologies();
    const idData = data.filter((row)=>{ if(row.name === techName.technology) return row.id});
    return idData[0].id;
}
function isInvalidText(text){
    return !text || text.trim() === '';
}
export async function addTechnology(prevState,formData){
    const technology = {
        name: formData.get('name'),
        duration: formData.get('duration'),
        noOfQuestions: formData.get('noOfQuestions'),
        cutOff: formData.get('cutOff')
    }
    if(
        isInvalidText(technology.name) || 
        isInvalidText(technology.duration) || 
        isInvalidText(technology.noOfQuestions) ||
        isInvalidText(technology.cutOff)
        ) {
            return {
                message: 'Invalid Input.'
            };
        }
    const response = await fetch('http://localhost:8000/api/technologies',{
        cache:'no-store',
        method: 'POST',
        body: JSON.stringify(technology),
        headers:{
            'Content-Type': 'application/json',
            'token': cookies().get('session')?.value
        }
    });
    if(!response.ok){
        throw new Error(data.message || 'Something went wrong!');
    } else {
        console.log("Added Tech",response.json());
        revalidatePath('/admin/technologies');
    }
}