
import Button from '../components/Button'



const Recommended = ({handleButton}) => {
  return (
   <div className='p-4 space-y-2'>
    <h3>Recommended</h3>
    
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
      
    
  )
}

export default Recommended