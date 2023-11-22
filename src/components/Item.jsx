export default function Items(props) {
    const {item, onDelleteitem, onToggleItem} = props
    return (
      <li key={item.id}>
      <input type="checkbox" checked={item.checked} onChange={() => onToggleItem(item.id)}/>
      <span style={item.checked ? { textDecoration: 'line-through' } : {}}>{item.quantity} {item.name}</span>
      <button onClick={() => onDelleteitem(item.id)}>&times;</button>
    </li>
    )
  }