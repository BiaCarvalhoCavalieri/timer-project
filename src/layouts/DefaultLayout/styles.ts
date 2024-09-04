import styled from 'styled-components'

export const LayoutContainer = styled.div`
  max-width: 74rem;
  width: calc(100% - 4rem);
  height: 100%;
  margin: 2.5rem auto;
  padding: 2.5rem;
  background-color: ${(props) => props.theme['gray-800']};
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 48rem) {
    padding: 1rem;
    min-height: calc(100vh - 14rem);
    height: 100%;
  }
`
