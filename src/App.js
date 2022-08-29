import './App.css'
import { ItemListContainer } from './components/ItemListContainer';
import { Navbar } from './components/Navbar';



const App = () => {
  return (

    <div>
      <Navbar/>

      <ItemListContainer hola={'soy leandro'}/>
    </div>
      );
} 

export default App;