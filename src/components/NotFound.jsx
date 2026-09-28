import { Link } from 'react-router-dom'

const NotFound = () => (
  <section className="page">
    <h1>404</h1>
    <p className="notice">La página que buscás no existe.</p>
    <Link to="/" className="btn">Volver al inicio</Link>
  </section>
)

export default NotFound
