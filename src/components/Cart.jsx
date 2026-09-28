import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

const Cart = () => {
  const { cart, removeItem, clearCart, totalPrice } = useCart()

  if (cart.length === 0) {
    return (
      <section className="page">
        <p className="notice">Tu carrito está vacío.</p>
        <Link to="/" className="btn">Ver productos</Link>
      </section>
    )
  }

  return (
    <section className="page">
      <h1>Carrito</h1>
      <ul className="cart-list">
        {cart.map((item) => (
          <li key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} />
            <div className="cart-item__info">
              <h3>{item.name}</h3>
              <p>Precio: ${item.price.toLocaleString('es-AR')}</p>
              <p>Cantidad: {item.quantity}</p>
              <p><strong>Subtotal: ${(item.price * item.quantity).toLocaleString('es-AR')}</strong></p>
            </div>
            <button type="button" className="btn btn--danger" onClick={() => removeItem(item.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
      <div className="cart-summary">
        <h2>Total: ${totalPrice.toLocaleString('es-AR')}</h2>
        <div className="cart-summary__actions">
          <button type="button" className="btn btn--outline" onClick={clearCart}>Vaciar carrito</button>
          <Link to="/checkout" className="btn">Finalizar compra</Link>
        </div>
      </div>
    </section>
  )
}

export default Cart
