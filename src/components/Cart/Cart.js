import { useContext } from 'react';

import Modal from '../UI/Modal';
import CartItem from './CartItem';
import s from './Cart.module.sass';
import CartContext from '../../store/cart-context';
import Checkout from './Checkout';

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem(item);
  };

  const cartItems = (
    <ul className={s.cartItems}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={s.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {hasItems && <Checkout />}
      <div className={s.actions}>
        <button className={s.buttonAlt} onClick={props.onClose}>
          Close
        </button>
        {hasItems && <button className={s.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
