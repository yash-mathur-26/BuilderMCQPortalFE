import NavBarLinks from "@/components/admin-nav-bar/admin-nav-bar";
import AddUserForm from "@/components/admin-user-form/admin-user-form";
import UsersTable from "@/components/admin-users-table/admin-users-table";
import { getTechnologies } from "@/lib/technology"; 
export default async function Users() {
    const examTech = await getTechnologies();
    return (
        <div className="min-h-screen">
            <NavBarLinks />
            <AddUserForm examTech={examTech}/>        
            <UsersTable/>
        </div>
    );
}
