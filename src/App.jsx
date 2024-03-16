import { useState } from "react"
import Banner from "./assets/Components/Banner/Banner"
import CartTop from "./assets/Components/CartTop/CartTop"
import Navbar from "./assets/Components/Navbar/Navbar"
import Recipes from "./assets/Components/Recipes/Recipes"
import { useEffect } from "react"
import CartBottom from "./assets/Components/CartBottom/CartBottom"
import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [items, setItems] = useState([])

  const [clickedItems, setClickedItems] = useState([])
  const [clickCount, setClickCount] = useState(0)

  const [preparingItem, setPreparingItem] = useState([])
  const[preparingCount, setPreparingCount] = useState(0)

  const [time,setTime] = useState(0)
  const [calories,setCalories] =useState(0)


  const handleCookClick = (item) => {

    const alreadyExist = clickedItems.find(topCartClickedItem => topCartClickedItem.recipe_id === item.recipe_id)
    const alreadyPreparing = preparingItem.find(itemPreparing =>itemPreparing.recipe_id === item.recipe_id )
    if (!alreadyExist && !alreadyPreparing) {
      setClickCount(clickCount + 1)
      const newSet = [...clickedItems, item];
      setClickedItems(newSet);
      toast.success("Item Is Ready For Cooking!")
    }
    else if(alreadyPreparing){
      toast.success(`Item Is Cooking! Wait ${time} Min ! `)
    }
    else{
      toast.warning("Item Is Already Added !")
    }

  }
  const handlePreparingButton = (clickedItem) => {
    toast.success("Cooking Started !")
    const newClicked = [...preparingItem, clickedItem]
    setPreparingItem(newClicked)
    setClickCount(clickCount - 1)
    setPreparingCount(preparingCount + 1)
    const newCart = clickedItems.filter(item => clickedItem.recipe_id !== item.recipe_id);
    setClickedItems(newCart)
    setTime(time + JSON.parse(clickedItem.preparing_time))
    setCalories(calories +  JSON.parse(clickedItem.calories))
  }
  console.log(time)

  useEffect(() => {
    fetch('items.json')
      .then(res => res.json())
      .then(data => setItems(data))
  }, [])
 
  return (
    <>
      <div className="container mx-auto">
        <Navbar></Navbar>
        <Banner></Banner>
        <div className="mx-4">
          <h1 className="text-2xl lg:text-4xl font-bold  text-center">Our Recipes</h1>
          <div className="flex justify-center items-center mt-6 text-center">
            <p className="max-w-[800px] mb-12 lg:text-xl">Explore our Recipe section, a culinary treasure trove where flavors mingle and inspiration thrives. Discover a world of gastronomic delight and unleash your inner chef with our diverse array of mouthwatering recipes.</p>
          </div>
          <div className="lg:flex gap-6 space-y-3 lg:space-y-0 mb-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:w-[60%] p-5 border-2 rounded-xl">
              <Recipes items={items} handleCookClick={handleCookClick}></Recipes>
            </div>
            <div className="lg:w-[60%] flex flex-col item-center border-2 p-6 rounded-xl">
              <h1 className="font-bold text-xl lg:text-2xl text-center lg:mb-6">Want to Cook : {clickCount}</h1>
              <hr className="mb-8" />
              <table className="table-auto">
                <thead className="border-b-2">
                  <tr className="">
                    <th className=" px-2 text-xs lg:text-lg"></th>
                    <th className="px-2 py-2 text-xs lg:text-lg">Name</th>
                    <th className="px-2 py-2 text-xs lg:text-lg">Time</th>
                    <th className="px-2 py-2 text-xs lg:text-lg">Calories</th>
                    <th className="px-2 py-2 text-xs lg:text-lg"></th>
                  </tr> 
                </thead> 
                {
                  clickedItems.map((clickedItem, index) => <CartTop index={index + 1} key={clickedItem.recipe_id} clickedItem={clickedItem} handlePreparingButton={handlePreparingButton}></CartTop>)
                }

              </table>
              <div className="mt-12">
                <h1 className="font-bold text-xl lg:text-2xl text-center lg:mb-6">Currently Cooking : {preparingCount}</h1> <hr className="mb-8" />
                <table className="table-auto w-full text-center ">
                  <thead className="">
                    <tr>
                      <th className="text-xs lg:text-lg"></th>
                      <th className="px-2 py-2 text-xs lg:text-lg">Name</th>
                      <th className="px-2 py-2 text-xs lg:text-lg">Time</th>
                      <th className="px-2 py-2 text-xs lg:text-lg">Calories</th>
                      <th className="px-2 py-2 text-xs lg:text-lg"></th>
                    </tr>
                  </thead>
                  <tbody className="text-center bg-[#28282808] rounded-xl">
                    {
                      preparingItem.map((item,index)=><CartBottom key={index} item={item} index={index+1}></CartBottom>)
                    }
                  </tbody>
                </table> <hr className="mt-2 lg:mt-6" />
                <div className="mt-7 text-center lg:text-right lg:pr-14">
                  <br />
                  <h1 className="lg:text-lg font-bold"> Total Time: {time} Minutes </h1> <br />
                  <h1 className="lg:text-lg font-bold"> Total Calories: {calories} Calories</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div><ToastContainer />
    </>
  )
}

export default App
