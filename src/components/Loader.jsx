const Loader = ({ text = 'Cargando...' }) => (
  <div className="loader" role="status">
    <div className="loader__spinner" />
    <p>{text}</p>
  </div>
)

export default Loader
