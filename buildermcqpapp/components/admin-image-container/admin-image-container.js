import Test from "../../assets/Test.jpg";
import Image from "next/image"
export default function AdminImageContainer(){
    return(
        <>
            <div className="bg-gray-800 bg-opacity-20 rounded-lg p-6 shadow-md text-center">
                <h2 className="text-2xl font-bold text-gray-200 text-center">Admin Panel</h2>
                <Image src={Test} alt="Test image"/>
            </div>
        </>
        )
}