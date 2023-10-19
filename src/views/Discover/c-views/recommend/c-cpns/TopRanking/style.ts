import styled from 'styled-components'
// import theme from '@/assets/theme'

export const TopRankingWrapper = styled.div`
  .card {
    background-color: ${({ theme }) => theme.palette.background.paper};
    .ant-card-body {
      border-radius: 0;
    }
  }
  .header {
    background-color: ${({ theme }) => theme.palette.background.base};
  }
  .even {
    background-color: ${({ theme }) => theme.palette.background.even};
  }
  .odd {
    background-color: ${({ theme }) => theme.palette.background.odd};
  }
  .test {
    box-shadow: 0 4px 10px rgba(256, 256, 256, 0.1);
  }
`
