import './App.css';
import NavBar from './components/navBar/NavBar';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';



function App() {
  return (
    <div>
      <NavBar />
      {/* <ItemListContainer /> */}
      <ItemDetailContainer />
    </div>
  );
}

export default App;
