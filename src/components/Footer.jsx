import React from 'react'
import styled from 'styled-components'

const Footer = () => {
  return (
    <FooterWrapper>
      <h5>
        &copy; {new Date().getFullYear()}
        <span>ComfySloth</span>
      </h5>
      <h5>All rights reserved</h5>
    </FooterWrapper>
  )
}

const FooterWrapper = styled.div`
  height: 5rem;
  background: var(--clr-black);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  span {
    color: var(--clr-primary-5);
    margin-left: 3px;
  }

  h5 {
    color: var(--clr-white);
    margin: 0.1rem;
    font-weight: 400;
    text-transform: none;
    line-height: 1.25;
  }

  @media screen and (min-width: 776px) {
    flex-direction: row;
  }
`

export default Footer
