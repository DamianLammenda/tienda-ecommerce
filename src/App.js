import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemCards from './components/ItemCards';
import ItemCount from './components/ItemCount';

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting={"Laptops"} />
      
    </div>
  );
}

export default App;
