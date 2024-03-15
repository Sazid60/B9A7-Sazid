import { useState } from "react"
import Banner from "./assets/Components/Banner/Banner"
import Cart from "./assets/Components/Cart/Cart"
import Navbar from "./assets/Components/Navbar/Navbar"
import Recipes from "./assets/Components/Recipes/Recipes"
import { useEffect } from "react"

function App() {
  const [item, setItem] = useState([])

  useEffect(() => {
    fetch('/public/items.json')
      .then(res => res.json())
      .then(data => setItem(data))
  }, [])
  console.log(item)

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Recipes></Recipes>
      <Cart></Cart>
    </>
  )
}

export default App
