import React from 'react'
import styled from 'styled-components'
import { useProductsContext } from '../context/products_context'
import Error from './Error'
import Loading from './Loading'
import Product from './Product'
import { Link } from 'react-router-dom'

const FeaturedProducts = () => {
  const {
    featured_products: featured,
    products_loading: loading,
    products_error: error,
  } = useProductsContext()

  if (loading) {
    return <Loading />
  }

  if (error) {
    return <Error />
  }

  return (
    <FeaturedProductsWrapper className="section">
      <div className="title">
        <h2>featured products</h2>
        <div className="underline"></div>
      </div>
      <div className="section-center featured">
        {featured.map((product) => {
          return <Product key={product.id} {...product} />
        })}
      </div>
      <Link to="/products" className="btn">
        all products
      </Link>
    </FeaturedProductsWrapper>
  )
}

const FeaturedProductsWrapper = styled.section`
  background: var(--clr-grey-10);
  .featured {
    margin: 4rem auto;
    display: grid;
    gap: 2.5rem;
    img {
      height: 225px;
    }
  }

  .btn {
    display: block;
    width: 148px;
    margin: 0 auto;
    text-align: center;
  }
  @media (min-width: 576px) {
    .featured {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
`

export default FeaturedProducts
