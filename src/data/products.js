// Catálogo mock de MEGAGYM. Se carga a Firestore con: npm run seed
const img = (text) => `https://placehold.co/600x600/111827/f97316?text=${encodeURIComponent(text)}`

export const products = [
  {  name: "Whey Protein Doypack 2 Lb",
  category: "suplementos",
  subcategory: "sabores",
  price: 91808,
  sabores: [
    "Pistacho",
    "Vainilla",
    "Chocolate",
    "Cookies & Cream",
    "Frutilla",
    "Banana"
  ],
  description: "Proteína de suero de leche (Whey Protein) pensada para acompañar los entrenamientos y complementar la alimentación diaria. Aporta proteínas de alto valor biológico.",
  stock:10,
  image: "https://www.demusculos.com/web/wp-content/uploads/2024/02/platinum-whey-2-lbs-star-6.jpg" },
  {  name: "Creatina Monohidrato 300g Doypack",
  category: "suplementos",
  subcategory: "sabores",
  price: 29840,
  sabores: [
    "Limón",
    "Grape",
    "Frutos Rojos"
  ],
  description: "Creatina micronizada de alta pureza y excelente solubilidad. 100% creatina micronizada pura, libre de gluten y sin maltodextrina.",
  stock:20,
  image: "https://starnutrition.com.ar/cdn/shop/files/Creatine_300.png?v=1719589258&width=1100"},
  {  name: "Mtor BCAA 270 Gr",
  category: "suplementos",
  subcategory: "sabores",
  price: 36019,
  sabores: [
    "Fruit Punch",
    "Strawberry Lime",
    "Green Lemonade",
    "Blue Raz",
    "Grape Attack"
  ],
  description: "Fórmula con aminoácidos de cadena ramificada (BCAA), pensada para acompañar los entrenamientos y objetivos de desarrollo muscular. Contiene Leucina, Isoleucina y Valina. Libre de gluten.",
  stock: 10,
  image: "https://starnutrition.com.ar/cdn/shop/products/mtor-L_2c4f6b5d-89a6-4c54-9ed3-a05e31d528d5.png?v=1693846983&width=1100" },
  
  { name: 'Megarun 5km', category: 'megarun', price: 35000, stock:300, description: 'Pase de 5km para la carrera nocturna de la ciudad de Gualeguaychu.', image: img('5K') },
  { name: 'Megarun 10 km', category: 'megarun', price: 35000, stock: 300, description: 'Pase de 10 km para la carrera nocturna de la ciudad de Gualeguaychu.', image: img('10K') },
  { name: 'Remera Megagym', category: 'accesorios', price: 20000, stock: 300, description: 'Remera dry fir Megagym.', image: '/images/productos/remera.jpeg' },
  { name: 'Botella termica', category: 'accesorios', price: 15000, stock: 300, description: 'Botella termica 500 ml.', image: '/images/productos/botellas.png' },
]

export const categories = [
  { id: 'suplementos', label: 'Suplementos' },
  { id: 'megarun', label: 'Megarun'},
  {id: 'accesorios', label: 'Accesorios'},
]
