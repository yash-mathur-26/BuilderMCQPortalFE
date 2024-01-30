import NavBarLinks from "@/components/admin-nav-bar/admin-nav-bar";
import TechnologyAddition from "@/components/technology-addition-form/technology-addition-form";
import TechnologyTable from "@/components/technology-table/technology-table";
export default function Technologies(){
    return(
        <>
        <NavBarLinks/>  
        <TechnologyAddition/>
        <TechnologyTable/>
        </>
    )
}