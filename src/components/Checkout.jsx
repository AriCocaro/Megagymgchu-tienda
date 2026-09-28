import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { createOrder } from '../firebase/services'
import Loader from './Loader'

const initialForm = { name: '', phone: '', email: '', emailConfirm: '' }

const Checkout = () => {
  const { cart, totalPrice, clearCart } = useCart()
  const [form, setForm] = useState(initialForm)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [orderId, setOrderId] = useState(null)

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setError('')

    if (!form.name.trim() || !form.phone.trim() || !form.email.trim()) {
      return setError('Completá todos los campos.')
    }
    if (form.email !== form.emailConfirm) {
      return setError('Los emails no coinciden.')
    }

    try {
      setLoading(true)
      const { name, phone, email } = form
      const id = await createOrder({ buyer: { name, phone, email }, items: cart, total: totalPrice })
      setOrderId(id)
      clearCart()
    } catch {
      setError('No pudimos generar la orden. Intentá nuevamente.')
    } finally {
      setLoading(false)
    }
  }

  if (loading) return <Loader text="Generando tu orden..." />

  if (orderId) {
    return (
      <section className="page">
        <div className="order-success">
          <h1>¡Gracias por tu compra!</h1>
          <p>Tu número de orden es:</p>
          <code>{orderId}</code>
          <Link to="/" className="btn">Volver al inicio</Link>
        </div>
      </section>
    )
  }

  if (cart.length === 0) {
    return (
      <section className="page">
        <p className="notice">No hay productos para comprar.</p>
        <Link to="/" className="btn">Ver productos</Link>
      </section>
    )
  }

  return (
    <section className="page">
      <h1>Checkout</h1>
      <p>Total a pagar: <strong>${totalPrice.toLocaleString('es-AR')}</strong></p>
      <form className="checkout-form" onSubmit={handleSubmit}>
        <label>Nombre y apellido
          <input name="name" value={form.name} onChange={handleChange} />
        </label>
        <label>Teléfono
          <input name="phone" type="tel" value={form.phone} onChange={handleChange} />
        </label>
        <label>Email
          <input name="email" type="email" value={form.email} onChange={handleChange} />
        </label>
        <label>Confirmar email
          <input name="emailConfirm" type="email" value={form.emailConfirm} onChange={handleChange} />
        </label>
        {error && <p className="notice notice--error">{error}</p>}
        <button type="submit" className="btn">Confirmar compra</button>
      </form>
    </section>
  )
}

export default Checkout
