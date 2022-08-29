import { Carrito } from "./CartWidget";
import './Navbar.css'

export const Navbar = () => {
    return (
      <div>
        <header className='barraNavegacion'>
  
        <nav className='Nav'>
  
          <h1 className='titulo-P'>Tienda Tec</h1>
          
          <ul className='nav-menu'>
            <li className='nav-menu-item'>
              <a className=' nav-menu-link nav-Link' href='/'>Contacto</a>
            </li>

            <li className='nav-menu-item'>
              <a className=' nav-menu-link nav-Link' href='/'>Imagenes</a>
            </li>
  
            <li className='nav-menu-item'>
              <a className=' nav-menu-link nav-Link' href='/'>Ventas</a>
            </li>
          
          <Carrito/>

          </ul>
        </nav>
      </header>

  
  
  
      </div>
    );
}
export default Navbar