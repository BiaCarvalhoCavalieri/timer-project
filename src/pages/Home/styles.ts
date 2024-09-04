import { styled } from 'styled-components'

export const HomeContainer = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.5rem;
  }

  @media screen and (max-width: 48rem) {
    max-width: 100%;
    form {
      width: 100%;
    }
  }
`

export const BaseCountdownButton = styled.button`
  height: 3rem;
  border: 0;
  width: 100%;
  border-radius: 0.5rem;
  padding: 1rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  cursor: pointer;
  color: ${(props) => props.theme['gray-100']};
  font-weight: bold;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`
export const StartCountdownButton = styled(BaseCountdownButton)`
  background-color: ${(props) => props.theme['green-500']};

  &:not(:disabled):hover {
    background-color: ${(props) => props.theme['green-700']};
  }
`
export const StopCountdownButton = styled(BaseCountdownButton)`
  background-color: ${(props) => props.theme['red-500']};

  &:not(:disabled):hover {
    background-color: ${(props) => props.theme['red-700']};
  }
`
