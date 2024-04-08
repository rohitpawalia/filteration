
import Button from '../components/Button'
import './Recommended.css';


const Recommended = ({handleButton}) => {
  return (
  <div className="container">
    <h3 className="recommended-title">Recommended</h3>
    <div className="recommended-flex">
    <Button handleButton={handleButton}
      title="All Products"
      value="" />
     <Button handleButton={handleButton}
      title="Nike"
      value="Nike" />
      <Button handleButton={handleButton}
      title="Puma"
      value="Puma" />
      <Button handleButton={handleButton}
      title="Adidas"
      value="Adidas" />
      <Button handleButton={handleButton}
      title="Vans"
      value="Vans" />
      
     </div>
  </div>
  )
}

export default Recommended