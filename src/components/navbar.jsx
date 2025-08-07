import { Link } from 'react-router-dom';
import CartWidget from './cartwidget';

const NavBar = () => {
  return (
    <nav id='navbar'>
      <Link to="/">Inicio</Link>
      <Link to="/categoria/audio">audio</Link>
      <Link to="/categoria/perifericos">perifericos</Link>
      <CartWidget />
    </nav>
  );
};

export default NavBar;


