import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from './ItemList'
import Loader from './Loader'
import { getProducts } from '../firebase/services'
import { categories } from '../data/products'

const ItemListContainer = () => {
  const { categoryId } = useParams()
  // result guarda a qué categoría pertenece la respuesta: si no coincide con la actual, seguimos cargando
  const [result, setResult] = useState({ key: null, products: [], error: false })

  useEffect(() => {
    let active = true

    getProducts(categoryId)
      .then((products) => active && setResult({ key: categoryId ?? 'all', products, error: false }))
      .catch(() => active && setResult({ key: categoryId ?? 'all', products: [], error: true }))

    return () => {
      active = false
    }
  }, [categoryId])

  const loading = result.key !== (categoryId ?? 'all')
  const title = categories.find((c) => c.id === categoryId)?.label ?? 'Todos los productos'

  if (loading) return <Loader text="Cargando productos..." />
  if (result.error) return <p className="notice notice--error">No pudimos cargar los productos. Intentá nuevamente.</p>

  return (
    <section className="page">
      <h1>{title}</h1>
      {result.products.length === 0 ? (
        <p className="notice">No hay productos en esta categoría.</p>
      ) : (
        <ItemList products={result.products} />
      )}
    </section>
  )
}

export default ItemListContainer
