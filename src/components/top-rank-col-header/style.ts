import styled from 'styled-components'

export const TopRankingWrapper = styled.div`
  .image {
    box-shadow: '0 4px 10px rgba(0, 0, 0, 0.5)';
  }
  .btn {
    display: inline-block;
    text-indent: -9999px;
    width: 22px;
    height: 22px;
    margin: 8px 10px 0 0;
    cursor: pointer;
  }

  .name{
    color: ${({ theme }) => theme.palette.color.middle};
  }

  .play {
    background-position: -267px -205px;

    &:hover {
      background-position: -267px -235px;
    }
  }

  .favor {
    background-position: -300px -205px;

    &:hover {
      background-position: -300px -235px;
    }
  }
`
