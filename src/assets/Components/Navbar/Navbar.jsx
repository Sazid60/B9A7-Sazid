import { CiSearch } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
    return (
        <div className="mt-6 lg:flex justify-between items-center space-y-3 lg:space-y-0 mx-4">
            <h1 className="text-4xl font-bold text-center lg:text-left">Recipe Calories</h1>
            <div className="flex font-semibold justify-center lg:justify-start text-xl ">
                <button className="btn bg-transparent text-black text-xl rounded-full border-0 ">Home</button>
                <button className="btn bg-transparent text-black text-xl rounded-full border-0 ">Recipes</button>
                <button className="btn bg-transparent text-black text-xl rounded-full border-0 ">About</button>
                <button className="btn bg-transparent text-black text-xl rounded-full border-0 ">Search</button>
            </div>
            <div className="flex justify-center items-center gap-4">
                <div className="bg-[#150B2D0D] rounded-full shadow-xl p-3 flex gap-4 justify-center items-center">
                    <CiSearch />
                    <input className="bg-transparent text-xl" type="text" name="" id="" placeholder="Search" />
                </div>
                <div className="bg-green-400 rounded-full h-9 w-9 flex justify-center items-center">
                    <CgProfile />
                </div>
            </div>

        </div>
    );
};

export default Navbar;