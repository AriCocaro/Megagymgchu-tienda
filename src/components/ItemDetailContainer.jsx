import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'
import Loader from './Loader'
import { getProductById } from '../firebase/services'

const ItemDetailContainer = () => {
  const { itemId } = useParams()
  const [result, setResult] = useState({ key: null, product: null, error: false })

  useEffect(() => {
    let active = true

    getProductById(itemId)
      .then((product) => active && setResult({ key: itemId, product, error: false }))
      .catch(() => active && setResult({ key: itemId, product: null, error: true }))

    return () => {
      active = false
    }
  }, [itemId])

  if (result.key !== itemId) return <Loader text="Cargando producto..." />
  if (result.error) return <p className="notice notice--error">No pudimos cargar el producto.</p>
  if (!result.product) return <p className="notice">El producto no existe.</p>

  return (
    <section className="page">
      <ItemDetail key={result.product.id} product={result.product} />
    </section>
  )
}

export default ItemDetailContainer
