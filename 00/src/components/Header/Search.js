import { useParams } from 'react-router-dom'

//Components
import Home from '../../pages/Home/Home'

function Search(props) {
   let params = useParams()



   return (
      <>
         <Home
            products={props.products}
            loading={props.loading}
            totalProducts={props.totalProducts}
            currentPage={props.currentPage}
            productsPerPage={props.productsPerPage}
            paginate={props.paginate}
         />
      </>
   )
}

export default Search