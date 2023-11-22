export default function Footer(props) {
    const {items} = props
  
    if(items.length === 0) {
      return (
        <footer className="stats">Daftar belanjaan anda masih kosong cuy !!!</footer>
      )
    }
    const totalItems = items.length;
    const checkedItems = items.filter((item) => item.checked === true).length;
    const percentage = Math.round((checkedItems / totalItems) * 100);
    return (
      <footer className="stats">Ada {totalItems} barang di daftar belanjaan, {checkedItems} barang sudah dibeli ({percentage}%)</footer>
  
    )
  }