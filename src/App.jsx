import { useState } from "react"
import Banner from "./assets/Components/Banner/Banner"
import CartTop from "./assets/Components/CartTop/CartTop"
import Navbar from "./assets/Components/Navbar/Navbar"
import Recipes from "./assets/Components/Recipes/Recipes"
import { useEffect } from "react"
import CartBottom from "./assets/Components/CartBottom/CartBottom"

function App() {
  const [items, setItems] = useState([])

  const [clickedItems, setClickedItems] = useState([])
  const [clickCount,setClickCount] = useState(0)


  const handleCookClick = (item) => {
    setClickCount(clickCount+1)
    const newSet = [...clickedItems, item];
    setClickedItems(newSet);
    
  }
  // console.log(clickedItems)

  useEffect(() => {
    fetch('items.json')
      .then(res => res.json())
      .then(data => setItems(data))
  }, [])
  // console.log(item)

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
          <div className="lg:flex gap-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:w-[60%] p-5 border-2 rounded-xl">
              <Recipes items={items} handleCookClick={handleCookClick}></Recipes>
            </div>
            <div className="lg:w-[60%] flex flex-col item-center border-2 p-6 rounded-xl">
              <h1 className="font-bold text-xl lg:text-2xl text-center lg:mb-6">Want to Cook : {clickCount}</h1>
              <hr className="mb-8" />
              <table className="table-auto ">
                <thead>
                  <tr className="">
                    <th className="text-xs lg:text-xl"></th>
                    <th className="px-2 py-2 text-xs lg:text-xl">Name</th>
                    <th className="px-2 py-2 text-xs lg:text-xl">Time</th>
                    <th className="px-4 py-2 text-xs lg:text-xl">Calories</th>
                    <th className="px-4 py-2 text-xs lg:text-xl"></th>
                  </tr>
                </thead>
                {
                  clickedItems.map((clickedItem,index) => <CartTop index={index+1} key={clickedItem.recipe_id} clickedItem={clickedItem}></CartTop>)
                }

              </table>
              <div className="mt-12">
                <h1 className="font-bold text-xl lg:text-2xl text-center lg:mb-6">Currently Cooking : {0}</h1> <hr className="mb-8" />
                <table className="table-auto w-full text-center ">
                  <thead>
                    <tr>
                      <th className="text-xs lg:text-xl"></th>
                      <th className="px-4 py-2 text-xs lg:text-xl">Name</th>
                      <th className="px-4 py-2 text-xs lg:text-xl">Time</th>
                      <th className="px-4 py-2 text-xs lg:text-xl">Calories</th>
                      <th className="px-4 py-2 text-xs lg:text-xl"></th>
                    </tr>
                  </thead>
                  <tbody className="text-center">
                    <CartBottom></CartBottom>
                  </tbody>
                </table> <hr className="mt-6" />
                <div className="mt-7 text-center lg:text-right lg:jpr-14">
                  <br />
                  <h1 className="lg:text-xl font-bold"> Total Time: {45} Minutes </h1> <br />
                  <h1 className="lg:text-xl font-bold"> Total Calories: {240} Calories</h1>
                </div>
              </div>
            </div>
          </div>

        </div>


      </div>
    </>
  )
}

export default App
