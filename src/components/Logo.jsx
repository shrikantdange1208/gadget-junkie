import styled from 'styled-components'

export const Logo = () => {
  return (
    <LogoWrapper>
      <span>Gadget</span>Junkie
    </LogoWrapper>
  )
}

const LogoWrapper = styled.h3`
  margin-bottom: 0;
  color: var(--clr-grey-1);
  span {
    color: var(--clr-primary-5);
  }
`
