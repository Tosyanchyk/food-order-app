import s from './CartItem.module.sass';

const CartItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  return (
    <li className={s.cartItem}>
      <div>
        <h2>{props.name}</h2>
        <div className={s.summary}>
          <span className={s.price}>{price}</span>
          <span className={s.amount}>x {props.amount}</span>
        </div>
      </div>
      <div className={s.actions}>
        <button onClick={props.onRemove}>−</button>
        <button onClick={props.onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
