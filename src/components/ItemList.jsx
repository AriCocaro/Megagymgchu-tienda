import Item from './Item'

const ItemList = ({ products }) => (
  <div className="item-list">
    {products.map((product) => (
      <Item key={product.id} {...product} />
    ))}
  </div>
)

export default ItemList
