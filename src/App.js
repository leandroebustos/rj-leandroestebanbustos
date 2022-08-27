import './App.css'
import { Navbar } from './components/Navbar';
import { ItemListContainer } from './components/ItemListContainer';



const App = () => {
  return (

    <div>
      <Navbar/>

  <ItemListContainer hola={'soy Leandro'}/>
    </div>
      );
} 

export default App;