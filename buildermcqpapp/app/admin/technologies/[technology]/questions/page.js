import NavBarLinks from "@/components/admin-nav-bar/admin-nav-bar"
import QuestionAddition from "@/components/question-addition/question-addition"
export default function Questions({params:technology}){
    return(
        <>
        <NavBarLinks/>  
        <QuestionAddition technology={technology}/>
        </>
    )
}