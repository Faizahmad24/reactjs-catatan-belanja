import { useState } from "react";

export default function Form(props) {
    const {onAddItem} = props
    const [name, setName] = useState('')
  
    // for set default value options
    const quantityNum = [...Array(20)].map((_, i) => (
      <option value={i + 1} key={i + 1}>{i + 1}</option>
    ));
  
    // For set quantity
    const [quantity, setQuantity] = useState(1);
  
    function handleSubmit(e) {
      // validation if name is empty
      if(!name) {
        return
      }
      e.preventDefault();
  
      const newItem = {
        id: Date.now(),
        name: name,
        quantity: quantity,
        checked : false
      }
  
      onAddItem(newItem)
  
      setName('');
      setQuantity(1);
  
    }
  
    return (
      <form className="add-form" onSubmit={handleSubmit}>
      <h3>Hari ini belanja apa kita?</h3>
      <div>
        {/* For parsing data value quantity */}
        <select value={quantity} onChange={(e) => setQuantity(parseInt(e.target.value))}>
          {quantityNum}
        </select>
        {/* For parsing data value input text */}
        <input type="text" placeholder="nama barang..."  value={name} onChange={(e) => setName(e.target.value)}/>
      </div>
      <button>Tambah</button>
    </form>
    )
  }

  