import AdminImageContainer from '../../components/admin-image-container/admin-image-container';
import AdminLoginForm  from '../../components/admin-login-form/admin-login-form';
export default function Admin(){
    return (
        <div className="min-h-screen">
            <div className="grid grid-cols-2 gap-4">
                <div className="col-span-1 bg-transparent p-4">
                    <AdminImageContainer />
                </div>
                <div className="col-span-1 bg-transparent p-4">
                    <AdminLoginForm />
                </div>
            </div>
        </div>
    )
}