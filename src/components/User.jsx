
import { FaUser } from "react-icons/fa";
function User() {
    return (
        <>
            <div className="flex flex-row">
                <div className="w-10 h-10 mr-2  p-1 border-2 border-black dark:border-white text-black dark:text-white ">
                    {image || <FaUser className="w-full h-full" />}
                </div>
                <h4 className="text-black dark:text-white">{name}</h4>
            </div>
        </>
    );
}

export default User;