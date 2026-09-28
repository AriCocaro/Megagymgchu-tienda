import { Link } from 'react-router-dom'
import ItemCount from './ItemCount'
import { useCart } from '../context/CartContext'
import { useState } from 'react'

const ItemDetail = ({ product }) => {
  const { addItem } = useCart()
  const [added, setAdded] = useState(false)

  const handleAdd = (quantity) => {
    addItem(product, quantity)
    setAdded(true)
  }

  return (
    <article className="item-detail">
      <img src={product.image} alt={product.name} />
      <div className="item-detail__info">
        <h1>{product.name}</h1>
        <p className="price">${product.price.toLocaleString('es-AR')}</p>
        <p>{product.description}</p>
        {added ? (
          <div className="item-detail__actions">
            <Link to="/cart" className="btn">Ir al carrito</Link>
            <Link to="/" className="btn btn--outline">Seguir comprando</Link>
          </div>
        ) : (
          <ItemCount stock={product.stock} onAdd={handleAdd} />
        )}
      </div>
    </article>
  )
}

export default ItemDetail
