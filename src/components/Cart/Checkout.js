import s from './Checkout.module.sass'

const Checkout = props => {
  return <form> 
      <div className={s.control}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name'/>
      </div>
      <div className={s.control}>
        <label htmlFor='street'>Street</label>
        <input type='text' id='street'/>
      </div>
      <div className={s.control}>
        <label htmlFor='postal'>Postal code</label>
        <input type='text' id='postal'/> {/*for preventing null value when it necessary*/} 
      </div>
      <div className={s.control}>
        <label htmlFor='city'>City</label>
        <input type='text' id='city'/>
      </div>
      <button>Confirm</button>
    </form>
}

export default Checkout;