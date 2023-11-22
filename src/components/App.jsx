// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'\

import { useState } from "react"
import Header from "./Header";
import Form from "./Form";
import GroseryList from "./GroceryList";
import Footer from "./Footer";

const groceryItems = [
  {
    id: 1,
    name: 'Kopi Bubuk',
    quantity: 2,
    checked: true,
  },
  {
    id: 2,
    name: 'Gula Pasir',
    quantity: 5,
    checked: false,
  },
  {
    id: 3,
    name: 'Air Mineral',
    quantity: 3,
    checked: false,
  },
];

function App() {
  // const [count, setCount] = useState(0)
  const [items, setItems] = useState(groceryItems)

  // menambahkan item baru
  function handleAddItem(item) {
    // membuat sebuah array baru yang persis seperti array items lalu diakhir akan ditambah satu item baru dibelakangnya
    // const test = items.slice()
    // setItems(test)
    setItems([...items, item])
  }

  // menghapus item
  function handleDeleteItem(id){
    
    // console.log(id)
    // setItems(items.filter((item) => item.id !== id) )
    setItems((items) => items.filter((item) => item.id !== id) )
    // setItems(items.splice(id, 1))
  }

  // console.log(items)


  // melakukan ceklis dan unceklis
  function handleToggleItem(id) {
    setItems(items.map((item) => item.id === id ? {...item, checked: !item.checked} : item))
  }

  function handleClearItems() {
    setItems([]);
  }

  return (
    <div className="app">
          <Header/>
          <Form onAddItem={handleAddItem} />
          <GroseryList items={items} onDelleteitem={handleDeleteItem} onToggleItem={handleToggleItem} onClearItems={handleClearItems}/>
          <Footer items={items}/>
  </div>
  )
}

export default App
