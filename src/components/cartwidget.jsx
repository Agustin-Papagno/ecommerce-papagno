import { useCart } from '../context/cartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {
  const { totalUnidades } = useCart();

  return (
    <Link to="/cart">
      <div className="cart-widget">
        🛒
        {totalUnidades() > 0 && <span>{totalUnidades()}</span>}
      </div>
    </Link>
  );
};

export default CartWidget;