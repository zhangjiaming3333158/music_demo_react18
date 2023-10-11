import styled from 'styled-components'

export const MenuItemWrapper = styled.div`
  width: 140px;
  margin: 10px 0;

  .top {
    position: relative;
    cursor: pointer;
    border-radius: 5px;

    &:hover {
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
    }

    & > img {
      width: 140px;
      height: 140px;
      border-radius: 5px;
    }

    .cover {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-position: 0 0;

      .info {
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: absolute;
        padding: 0 10px;
        bottom: 0;
        left: 0;
        border-radius: 0 0 5px 5px;
        width: 100%;
        height: 27px;
        background-color: rgba(0, 0, 0, 0.4);

        .headset {
          margin-right: 5px;
          display: inline-block;
          width: 14px;
          height: 11px;
          background-position: 0 -24px;
        }

        .count {
          color: #fff;
          font-size: 13px;
        }

        .play {
          display: inline-block;
          width: 16px;
          height: 17px;
          background-position: 0 0;
        }
      }
    }
  }

  .bottom {
    font-size: 14px;
    color: #000;
    margin-top: 5px;
  }
`
