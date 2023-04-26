import { Link } from 'react-router-dom'
import styled from 'styled-components'
import heroBcg from '../assets/hero-bcg.jpg'
import heroBcg2 from '../assets/hero-bcg-2.jpg'

const Hero = () => {
  return (
    <HeroWrapper className="section-center">
      <article className="content">
        <h1>
          we enjoy <br />
          our gadgets
        </h1>
        <p>
          Decorating and furnishing the home is an experimental fun way to give
          your space the personal flair that is required. But it can cost a lot
          of money if not properly planned. When your ceaseless googling is over
          at ComfySloth, it doesn’t mean that you landed with the furniture
          which is right for you. It’s obvious to get confused by the
          overwhelming and attractive options that go well in your latest needs
          without breaking a bank.
        </p>
        <Link to="/products" className="btn hero-btn">
          Shop Now
        </Link>
      </article>
      <article className="img-container">
        <img src={heroBcg} alt="nice table" className="main-img" />
        <img src={heroBcg2} alt="person working" className="accent-img" />
      </article>
    </HeroWrapper>
  )
}

const HeroWrapper = styled.section`
  min-height: 60vh;
  display: grid;
  place-items: center;

  .img-container {
    display: none;
  }

  p {
    line-height: 2;
    max-width: 45em;
    margin-bottom: 2rem;
    color: var(--clr-grey-5);
    font-size: 1rem;
  }

  @media screen and (min-width: 992px) {
    height: calc(100vh - 5rem);
    grid-template-columns: 1fr 1fr;
    gap: 8rem;

    h1 {
      margin-bottom: 2rem;
    }

    p {
      font-size: 1.25rem;
    }

    .hero-btn {
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
    }

    .img-container {
      position: relative;
      display: block;
    }

    .main-img {
      width: 100%;
      height: 550px;
      position: relative;
      border-radius: var(--radius);
      display: block;
      object-fit: cover;
    }

    .accent-img {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 250px;
      transform: translateX(-50%);
      border-radius: var(--radius);
    }

    .img-container:before {
      content: '';
      position: absolute;
      width: 10%;
      height: 80%;
      background: var(--clr-primary-9);
      bottom: 0%;
      left: -8%;
      border-radius: var(--radius);
    }
  }
`
export default Hero
