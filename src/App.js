import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting={"Contenido del Item"} />
      <ItemCount />
    </div>
  );
}

export default App;
