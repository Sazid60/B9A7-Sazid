import { CiClock2 } from "react-icons/ci";
import { SlFire } from "react-icons/sl";
import PropTypes from 'prop-types';

const Recipe = ({item,handleCookClick}) => {
    const {  recipe_image, recipe_name,short_description,ingredients,preparing_time,calories} = item

    return (
            <div className="bg-base-100 shadow-xl p-3 rounded xl">
                <figure><img className="rounded-xl h-40 w-full" src={recipe_image} alt="n/a" /></figure>
                <div className="mt-4 space-y-4 px-2">
                    <h2 className="text-lg lg:text-xl font-bold">{recipe_name}</h2>
                    <p className="text-[#878787] text-sm lg:text-lg">{short_description}</p>
                    <h1 className="font-bold text-sm lg:text-lg">Ingredients : {ingredients.length}</h1>
                    <ul className="list-disc pl-4 text-sm lg:text-lg">
                        {
                            ingredients.map(ingredient=><li key={ingredient}>{ingredient}</li>)
                        }
                    </ul>
                    <div className="flex justify-around gap-2">
                        <div className="flex justify-center items-center gap-2">
                            <CiClock2 />
                            <p className="text-sm lg:text-lg">{preparing_time} minutes</p>
                        </div>
                        <div className="flex justify-center items-center gap-1">
                        <SlFire />
                            <p className="text-sm lg:text-lg">{calories} Calories</p>
                        </div>
                    </div>
                    <div className="card-actions justify-start">
                        <button onClick={()=>handleCookClick(item)} className="btn bg-green-400 text-sm lg:text-lg rounded-full text-white shadow-xl">Want to Cook</button>
                    </div>
                </div>
            </div>
    );
};
Recipe.propTypes = {
    item: PropTypes.object,
    handleCookClick: PropTypes.func

}
export default Recipe;