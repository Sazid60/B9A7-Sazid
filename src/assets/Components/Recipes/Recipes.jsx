import Recipe from "../Recipe/Recipe";
import PropTypes from 'prop-types';


const Recipes = ({items}) => {
    return (
        <>
        {
            items.map(item=><Recipe key={item.recipe_id} item={item}></Recipe>)
        }
            
        </>


    );
};
Recipes.propTypes = {
    items: PropTypes.array,
}
export default Recipes;