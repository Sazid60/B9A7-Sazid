import PropTypes from 'prop-types';

const CartBottom = ({item,index}) => {
    const {recipe_name,preparing_time,calories} = item;

    return (
        <>
            <tr>
                <td className="text-xs lg:text-xl">{index}</td>
                <td className="text-xs lg:text-xl"> {recipe_name}</td>
                <td className="text-xs lg:text-xl">{preparing_time} Minutes</td>
                <td className="text-xs lg:text-xl">{calories} Calories </td>
            </tr>
        </>
    );
};

CartBottom.propTypes = {
    item: PropTypes.object, 
    index: PropTypes.number
}
export default CartBottom;