import NavBarLinks from "@/components/admin-nav-bar/admin-nav-bar";
import EditTechnologyForm from "@/components/edit-technology-form/edit-technology-form";
import { getTechnologyExam } from "@/lib/technology"; 
export default async function EditExam({params:technology}){
    const technologyData = await getTechnologyExam(technology.technology).then((data)=>data);
    return (
        <>
            <NavBarLinks/>
            <EditTechnologyForm technologyData={technologyData}/>
        </>
    )
}