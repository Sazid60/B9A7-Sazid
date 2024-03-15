import { CiClock2 } from "react-icons/ci";
import { SlFire } from "react-icons/sl";
import PropTypes from 'prop-types';

const Recipe = ({item}) => {
    const {  recipe_image, recipe_name,short_description,ingredients,preparing_time,calories} = item

    return (
        <div>
            <div className="card bg-base-100 shadow-xl p-3">
                <figure><img className="rounded-xl h-48 w-full" src={recipe_image} alt="n/a" /></figure>
                <div className="mt-4 space-y-4 px-2">
                    <h2 className="text-xl font-bold">{recipe_name}</h2>
                    <p className="text-[#878787]">{short_description}</p>
                    <h1 className="font-bold text-xl">Ingredients : {ingredients.length}</h1>
                    <ul className="list-disc pl-4 text-lg">
                        {
                            ingredients.map(ingredient=><li key={ingredient}>{ingredient}</li>)
                        }
                    </ul>
                    <div className="flex justify-around text-lg gap-2">
                        <div className="flex justify-center items-center gap-2">
                            <CiClock2 />
                            <p>{preparing_time} minutes</p>
                        </div>
                        <div className="flex justify-center items-center gap-2">
                        <SlFire />
                            <p>{calories} Calories</p>
                        </div>
                    </div>
                    <div className="card-actions justify-start">
                        <button className="btn bg-green-400 p-4 rounded-full text-white shadow-xl">Want to Cook</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
Recipe.propTypes = {
    item: PropTypes.object
}
export default Recipe;