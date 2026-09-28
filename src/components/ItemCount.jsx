import { useState } from 'react'

const ItemCount = ({ stock, initial = 1, onAdd }) => {
  const [count, setCount] = useState(initial)

  const isOutOfStock = stock < 1
  const isInvalid = isOutOfStock || count < 1 || count > stock

  const handleIncrement = () => count < stock && setCount(count + 1)
  const handleDecrement = () => count > 1 && setCount(count - 1)

  if (isOutOfStock) return <p className="notice notice--error">Producto sin stock</p>

  return (
    <div className="item-count">
      <div className="item-count__controls">
        <button type="button" onClick={handleDecrement} disabled={count <= 1} aria-label="Restar una unidad">-</button>
        <span>{count}</span>
        <button type="button" onClick={handleIncrement} disabled={count >= stock} aria-label="Sumar una unidad">+</button>
      </div>
      <small>Stock disponible: {stock}</small>
      <button type="button" className="btn" onClick={() => onAdd(count)} disabled={isInvalid}>
        Agregar al carrito
      </button>
    </div>
  )
}

export default ItemCount
