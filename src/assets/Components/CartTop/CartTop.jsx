
const Cart = () => {
    return (
        <>
            <tbody className="text-center">
                <tr>
                    <td>{1}</td>
                    <td className="text-xs lg:text-xl">Spaghetti Bolognese</td>
                    <td className="text-xs lg:text-xl">{30} Minutes</td>
                    <td className="text-xs lg:text-xl">{350} Calories</td>
                    <td><button className="btn bg-green-400 p-2 lg:p-2 rounded-3xl text-white text-xs lg:text-sm w-auto shadow-xl">Preparing</button></td>
                </tr>
            </tbody>
        </>
    );
};

export default Cart;