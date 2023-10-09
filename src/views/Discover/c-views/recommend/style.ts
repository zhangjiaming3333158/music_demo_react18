import styled from "styled-components";
// import wrap_bg from '@/assets/img/wrap-bg.png'
/* background-image: url(${wrap_bg}); */

export const RecommendWrapper = styled.div`
  > .content {
    display: flex;

    > .left {
      margin: 20px 0 40px 0;
      padding: 0 10px;
      width: 729px;
    }

    > .right {
      margin: 20px 0 40px 0;
      width: 250px;
    }
  }
`