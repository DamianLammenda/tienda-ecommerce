import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemCards from './components/ItemCards';

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting={"Laptops"} />
      <ItemCards />
    </div>
  );
}

export default App;
