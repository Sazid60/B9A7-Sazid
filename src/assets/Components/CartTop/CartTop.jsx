import PropTypes from 'prop-types';

const CartTop = ({clickedItem,index,handlePreparingButton}) => {
    const {recipe_name,preparing_time,calories} = clickedItem
    return (
        <>
            <tbody className="text-center">
                <tr>
                    <td>{index}</td>
                    <td className="text-xs lg:text-lg">{recipe_name}</td>
                    <td className="text-xs lg:text-lg">{preparing_time} Minutes</td>
                    <td className="text-xs lg:text-lg">{calories} Calories</td>
                    <td><button onClick={()=>handlePreparingButton(clickedItem)} className="btn bg-green-400 p-2 lg:p-2 rounded-3xl text-white text-xs lg:text-sm w-auto shadow-xl">Preparing</button></td>
                </tr>
            </tbody>
        </>
    );
};
CartTop.propTypes = {
    clickedItem: PropTypes.object,
    index:PropTypes.number,
    handlePreparingButton:PropTypes.func
}
export default CartTop;