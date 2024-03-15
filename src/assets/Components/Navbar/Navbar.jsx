import { CiSearch } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
    return (
        <div className="mt-6 md:flex lg:flex justify-between items-center space-y-3 md:space-y-0 lg:space-y-0">
            <h1 className="text-4xl font-bold text-center md:text-left lg:text-left">Recipe Calories</h1>
            <div className="flex font-semibold justify-center lg:justify-start text-xl gap-6">
                <p>Home</p>
                <p>Recipes</p>
                <p>About</p>
                <p>Search</p>
            </div>
            <div className="flex justify-center items-center gap-4">
                <div className="bg-[#150B2D0D] rounded-full shadow-xl p-3 flex gap-4 justify-center items-center">
                    <CiSearch />
                    <input className="bg-transparent" type="text" name="" id="" placeholder="Search" />
                </div>
                <div className="bg-green-400 rounded-full h-8 w-8 flex justify-center items-center">
                    <CgProfile />
                </div>
            </div>

        </div>
    );
};

export default Navbar;