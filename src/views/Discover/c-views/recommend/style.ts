import styled from 'styled-components'
// import wrap_bg from '@/assets/img/wrap-bg.png'
/* background-image: url(${wrap_bg}); */

export const RecommendWrapper = styled.div`
  > .content {
    display: flex;
    padding: 0 0 0 2px;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.palette.background.default};

    > .left {
      margin: 20px 0 40px 0;
      /* padding: 0 10px; */
      width: 729px;
    }

    > .right {
      /* position: fixed; */
      margin: 20px 0 40px 0;
      width: 250px;
    }
  }
`
