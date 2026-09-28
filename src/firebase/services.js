import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  serverTimestamp,
  where,
} from 'firebase/firestore'
import { db } from './config'

const productsRef = collection(db, 'products')

const mapDoc = (snapshot) => ({ id: snapshot.id, ...snapshot.data() })

export const getProducts = async (category) => {
  const q = category ? query(productsRef, where('category', '==', category)) : productsRef
  const snapshot = await getDocs(q)
  return snapshot.docs.map(mapDoc)
}

export const getProductById = async (id) => {
  const snapshot = await getDoc(doc(db, 'products', id))
  return snapshot.exists() ? mapDoc(snapshot) : null
}

export const createOrder = async ({ buyer, items, total }) => {
  const order = {
    buyer,
    items: items.map(({ id, name, price, quantity }) => ({ id, name, price, quantity })),
    total,
    date: serverTimestamp(),
  }
  const docRef = await addDoc(collection(db, 'orders'), order)
  return docRef.id
}
