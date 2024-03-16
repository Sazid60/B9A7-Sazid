import PropTypes from 'prop-types';

const CartBottom = ({item,index}) => {
    const {recipe_name,preparing_time,calories} = item;

    return (
        <>
            <tr className='rounded-xl'>
                <td className="text-xs lg:text-lg py-2 px-2 rounded-l-xl">{index}</td>
                <td className="text-xs lg:text-lg py-2"> {recipe_name}</td>
                <td className="text-xs lg:text-lg py-2">{preparing_time} Minutes</td>
                <td className="text-xs lg:text-lg py-2 rounded-r-xl">{calories} Calories </td>
            </tr>
        </>
    );
};

CartBottom.propTypes = {
    item: PropTypes.object, 
    index: PropTypes.number
}
export default CartBottom;