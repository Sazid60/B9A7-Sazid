import PropTypes from 'prop-types';

const CartTop = ({clickedItem,index}) => {
    const {recipe_name,preparing_time,calories} = clickedItem
    return (
        <>
            <tbody className="text-center">
                <tr>
                    <td>{index}</td>
                    <td className="text-xs lg:text-xl">{recipe_name}</td>
                    <td className="text-xs lg:text-xl">{preparing_time} Minutes</td>
                    <td className="text-xs lg:text-xl">{calories} Calories</td>
                    <td><button className="btn bg-green-400 p-2 lg:p-2 rounded-3xl text-white text-xs lg:text-sm w-auto shadow-xl">Preparing</button></td>
                </tr>
            </tbody>
        </>
    );
};
CartTop.propTypes = {
    clickedItem: PropTypes.object,
    index:PropTypes.number
}
export default CartTop;