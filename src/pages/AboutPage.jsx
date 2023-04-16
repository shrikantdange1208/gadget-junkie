import React from 'react'
import styled from 'styled-components'
import { PageHero } from '../components'
import aboutImg from '../assets/hero-bcg.jpeg'

const AboutPage = () => {
  return (
    <main>
      <PageHero title="about" />
      <AboutWrapper className="page section section-center">
        <img src={aboutImg} alt="About Image" />
        <article>
          <div className="title">
            <h2>Our Story</h2>
            <div className="underline"></div>
          </div>
          <p>
            In 2012, someone pioneered omni channel retail to launch ComfySloth,
            India’s leading e-commerce marketplace for furniture and home goods.
            In the last decade, ComfySloth has disrupted the tenets of classical
            retail by combining an online virtual catalogue, an extensive
            in-house supply chain, and a large omni channel footprint covering
            more than 100 cities in India. Life can be a ‘bed of roses’ (if the
            bed is from ComfySloth).
          </p>
        </article>
      </AboutWrapper>
    </main>
  )
}

const AboutWrapper = styled.section`
  display: grid;
  gap: 4rem;

  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }

  p {
    line-height: 2rem;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }

  .title {
    text-align: left;
  }

  .underline {
    margin-left: 0;
  }

  @media screen and (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`

export default AboutPage
