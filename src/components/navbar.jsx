import { Link } from 'react-router-dom';
const NavBar = () => {
  return (
    <nav id='navbar'>
      <Link to="/">Inicio</Link>
      <Link to="/categoria/laptops">Laptops</Link>
      <Link to="/categoria/accesorios">Accesorios</Link>
      <Link to="/categoria/audio">Audio</Link>
      <Link to="/categoria/monitores">Monitores</Link>
    </nav>
  );
};

export default NavBar;


