import Recipe from "../Recipe/Recipe";
import PropTypes from 'prop-types';


const Recipes = ({ items, handleCookClick }) => {
    return (
        <>
            {
                items.map(item => <Recipe key={item.recipe_id} item={item} handleCookClick={handleCookClick}></Recipe>)
            }

        </>


    );
};
Recipes.propTypes = {
    items: PropTypes.array,
    handleCookClick: PropTypes.func
}
export default Recipes;