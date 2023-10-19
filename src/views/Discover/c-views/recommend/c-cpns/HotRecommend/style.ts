import styled from 'styled-components'

export const CardWrapper = styled.div`
  .card {
    background-color: ${({ theme }) => theme.palette.background.paper};
  }
`

export const RecommendWrapper = styled.div`
  .recommend-list {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
`