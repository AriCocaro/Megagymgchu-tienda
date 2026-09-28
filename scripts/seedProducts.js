// Uso: npm run seed  (requiere Node 20+ y un archivo .env con las credenciales de Firebase)
// Borra los productos que hay en Firestore y carga los de src/data/products.js,
// así se puede ejecutar cuantas veces haga falta sin duplicar nada.
import process from 'node:process'
import { initializeApp } from 'firebase/app'
import { addDoc, collection, deleteDoc, getDocs, getFirestore } from 'firebase/firestore'
import { products } from '../src/data/products.js'

const app = initializeApp({
  apiKey: process.env.VITE_FIREBASE_API_KEY,
  authDomain: process.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.VITE_FIREBASE_APP_ID,
})
const db = getFirestore(app)
const productsRef = collection(db, 'products')

const existing = await getDocs(productsRef)
await Promise.all(existing.docs.map((snapshot) => deleteDoc(snapshot.ref)))
console.log(`🗑  ${existing.size} productos anteriores eliminados`)

for (const product of products) {
  const ref = await addDoc(productsRef, product)
  console.log(`✔ ${product.name} -> ${ref.id}`)
}
console.log(`Listo: ${products.length} productos cargados en Firestore.`)
process.exit(0)