import { styled } from 'styled-components'

export const HistoryContainer = styled.div`
  flex: 1;
  padding: 1.5rem;

  display: flex;
  flex-direction: column;

  h1 {
    font-size: 1.5rem;
    color: ${(props) => props.theme['gray-100']};
  }
  @media screen and (max-width: 48rem) {
    padding: 0;
    h1 {
      font-size: 1rem;
      margin-top: 2rem;
    }
  }
`

export const HistoryList = styled.div`
  flex: 1;
  overflow: auto;
  margin-top: 2rem;

  table {
    width: 100%;
    border-collapse: collapse;
    min-width: 37.5rem;

    th {
      background-color: ${(props) => props.theme['gray-600']};
      padding: 1rem;
      text-align: left;
      color: ${(props) => props.theme['gray-100']};
      font-size: 0.875rem;
      line-height: 1.6;

      &:first-child {
        border-top-left-radius: 0.5rem;
        padding-left: 1.5rem;
      }
      &:last-child {
        border-top-right-radius: 0.5rem;
        padding-right: 1.5rem;
      }
    }

    td {
      background-color: ${(props) => props.theme['gray-700']};
      border-top: 4px solid ${(props) => props.theme['gray-800']};
      padding: 1rem;
      font-size: 0.875rem;
      line-height: 1.6;
      &:first-child {
        padding-left: 1.5rem;
      }
      &:last-child {
        padding-right: 1.5rem;
      }
    }
  }
  @media screen and (max-width: 48rem) {
    table {
      min-width: fit-content;
      th,
      td {
        padding: 1rem 0.5rem;
        font-size: 0.75rem;
        line-height: 1;
        white-space: nowrap;
      }
    }
  }
`
const STATUS_COLORS = {
  yellow: 'yellow-500',
  green: 'green-500',
  red: 'red-500',
} as const

interface StatusProps {
  statuscolor: keyof typeof STATUS_COLORS
}

export const Status = styled.span<StatusProps>`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::before {
    content: '';
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    background: ${(props) => props.theme[STATUS_COLORS[props.statuscolor]]};
  }
`
