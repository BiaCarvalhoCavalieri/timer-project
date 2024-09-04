import { styled } from 'styled-components'

export const CountdownContainer = styled.div`
  font-family: 'Roboto Mono', monospace;
  font-size: 10rem;
  line-height: 8rem;
  color: ${(props) => props.theme['gray-100']};

  display: flex;
  gap: 1rem;

  span {
    background: ${(props) => props.theme['gray-700']};
    padding: 2rem 1rem;
    border-radius: 0.5rem;
  }

  @media screen and (max-width: 48rem) {
    font-size: 4rem;
    line-height: 3rem;
    gap: 0.5rem;

    span {
      padding: 1rem 0.5rem;
    }
  }
`
export const Separator = styled.div`
  padding: 2rem 0;
  color: ${(props) => props.theme['green-500']};
  width: 4rem;
  overflow: hidden;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 48rem) {
    width: 2rem;
    padding: 1rem 0;
  }
`
