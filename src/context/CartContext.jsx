import { createContext, useContext, useEffect, useState } from 'react'

const CartContext = createContext()

const STORAGE_KEY = 'megagym-cart'

// Lee el carrito guardado; si no hay nada o el JSON está dañado, arranca vacío
const loadCart = () => {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY))
    return Array.isArray(saved) ? saved : []
  } catch {
    return []
  }
}

// eslint-disable-next-line react-refresh/only-export-components
export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) throw new Error('useCart debe usarse dentro de un CartProvider')
  return context
}

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(loadCart)

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(cart))
    } catch {
      // si el navegador bloquea el almacenamiento, el carrito sigue funcionando en memoria
    }
  }, [cart])

  const isInCart = (id) => cart.some((item) => item.id === id)

  const addItem = (product, quantity) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id)
      if (existing) {
        const newQuantity = Math.min(existing.quantity + quantity, product.stock)
        return prev.map((item) => (item.id === product.id ? { ...item, quantity: newQuantity } : item))
      }
      return [...prev, { ...product, quantity }]
    })
  }

  const removeItem = (id) => setCart((prev) => prev.filter((item) => item.id !== id))

  const clearCart = () => setCart([])

  const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0)
  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0)

  return (
    <CartContext.Provider
      value={{ cart, addItem, removeItem, clearCart, isInCart, totalQuantity, totalPrice }}
    >
      {children}
    </CartContext.Provider>
  )
}
