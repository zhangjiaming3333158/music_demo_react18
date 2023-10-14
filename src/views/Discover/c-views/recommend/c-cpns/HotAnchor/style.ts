import styled from 'styled-components'

export const AnchorWrapper = styled.div`
  .artists {
    margin-left: -15px;
    width: 230px;
    .item {
      display: flex;
      height: 65px;
      margin-bottom: 20px;
      background-color: #fafafa;
      text-decoration: none;

      :hover {
        background-color: #f4f4f4;
      }

      .rank {
        width: 20px;
        font-size: 16px;
        text-align: center;
        line-height: 65px;
        background-color: #fff;
      }

      img {
        width: 62px;
        height: 62px;
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
        /* object-fit: cover; */
      }

      .info {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        padding: 3px 12px;
        border: 1px solid #e9e9e9;
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
        border-left: none;
        overflow: hidden;

        .name {
          font-size: 14px;
          font-weight: 700;
          color: #000;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }

        .alia {
          font-size: 12px;
          color: #666;
        }
      }
    }
  }
`
