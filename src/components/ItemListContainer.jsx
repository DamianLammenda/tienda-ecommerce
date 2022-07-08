import ItemCards from "./ItemCards";
import ItemCount from "./ItemCount";

const ItemListContainer = () => {
  const onAddItem = (count) => {
    alert(`${count} items will be added to the cart!`);
  };
  return (
    <>
    <ItemCards />
    <ItemCount stock={5} initial={0} onAdd={onAddItem}></ItemCount>;
    </>
  ) 
  
};

export default ItemListContainer;
















// import ItemCards from './ItemCards';
// const onAddItem = (count) => {
//   console.log(count)
//   }
// const ItemListContainer = () => {
//   <>
//   <ItemCards />
//       <ItemCount stock={5} initial={0} onAdd={onAddItem} />
//   </>
// };

// export default ItemListContainer;
