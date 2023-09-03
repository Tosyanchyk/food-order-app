import s from './Card.module.sass';

const Card = props => {
  return <div className={s.card}>{props.children}</div>
};

export default Card;