import styled from 'styled-components'
import Filters from '../components/Filters'
import PageHero from '../components/PageHero'
import ProductList from '../components/ProductList'
import Sort from '../components/Sort'

const ProductsPage = () => {
  return (
    <main>
      <PageHero title="products" />
      <ProductsPageWrapper className="page">
        <div className="section-center products">
          <Filters />
          <div>
            <Sort />
            <ProductList />
          </div>
        </div>
      </ProductsPageWrapper>
    </main>
  )
}

const ProductsPageWrapper = styled.div`
  .products {
    display: grid;
    gap: 3rem 1.5rem;
    margin: 4rem auto;
  }
  @media (min-width: 768px) {
    .products {
      grid-template-columns: 200px 1fr;
    }
  }
`
export default ProductsPage
