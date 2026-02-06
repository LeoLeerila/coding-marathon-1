function Itemdata({items, delItem, id}){
    return(
    <li>
    <p>{items.name} ({items.brand}) / {items.quat} pcs </p>
    <p>Cost/Tax = {items.cost}€ / {items.tax}%</p>
    <button onClick={() => delItem(id)}>Delete</button>
    </li>)
}
export default Itemdata