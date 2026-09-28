import { Link } from 'react-router-dom'

const Item = ({ id, name, price, image, stock }) => (
  <article className="item-card">
    <img src={image} alt={name} />
    <div className="item-card__body">
      <h3>{name}</h3>
      <p className="price">${price.toLocaleString('es-AR')}</p>
      {stock < 1 && <span className="tag">Sin stock</span>}
      <Link to={`/item/${id}`} className="btn btn--outline">Ver detalle</Link>
    </div>
  </article>
)

export default Item
