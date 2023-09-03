import { useContext } from 'react';

import MealItemForm from './MealItemForm';
import s from './MealItem.module.sass';
import CartContext from '../../../store/cart-context';

const MealItem = (props) => {
  const cartCtx = useContext(CartContext);

  const price = `$${props.price.toFixed(2)}`;

  const addToCartHandler = amount => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price
    });
  };

  return (
    <li className={s.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={s.description}>{props.description}</div>
        <div className={s.price}>{price}</div>
      </div>
      <div>
        <MealItemForm onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
