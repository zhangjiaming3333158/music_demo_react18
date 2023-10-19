import styled from 'styled-components'

export const TopRankingWrapper = styled.div`
  display: flex;
  height: 22px;
  width: 200px;
  .left {
    flex: 1;
    //单行文本溢出显示省略号
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    .span3 {
      color: #c10d0c;
    }

    .span10 {
      color: ${({ theme }) => theme.palette.color.middle};
    }

    a {
      margin-left: 10px;
      color: ${({ theme }) => theme.palette.color.middle};
    }
  }
  .right {
    display: flex;
    align-items: center;
    display: none;
    width: 82px;
    .btn {
      width: 17px;
      height: 17px;
      margin-left: 8px;
      cursor: pointer;
    }

    .play {
      background-position: -267px -268px;
    }

    .add {
      position: relative;
      top: 2px;
      background-position: 0 -700px;
    }

    .favor {
      background-position: -297px -268px;
    }
  }
  &:hover {
    .right {
      display: block;
    }
  }
`
