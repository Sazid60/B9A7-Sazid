import PropTypes from 'prop-types';

const CartBottom = ({item,index}) => {
    const {recipe_name,preparing_time,calories} = item;

    return (
        <>
            <tr>
                <td className="text-xs lg:text-lg">{index}</td>
                <td className="text-xs lg:text-lg"> {recipe_name}</td>
                <td className="text-xs lg:text-lg">{preparing_time} Minutes</td>
                <td className="text-xs lg:text-lg">{calories} Calories </td>
            </tr>
        </>
    );
};

CartBottom.propTypes = {
    item: PropTypes.object, 
    index: PropTypes.number
}
export default CartBottom;