import styled from 'styled-components'
import { Hero, Contact, FeaturedProducts, Services } from '../components'
const HomePage = () => {
  return (
    <HomeWrapper>
      <Hero />
      <FeaturedProducts />
      <Services />
      <Contact />
    </HomeWrapper>
  )
}

const HomeWrapper = styled.main``
export default HomePage
