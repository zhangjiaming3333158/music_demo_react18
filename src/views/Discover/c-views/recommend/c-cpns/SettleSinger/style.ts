import styled from 'styled-components'

export const SingerWrapper = styled.div`
  margin-top: -20px;
  .artists {
    .item {
      display: flex;
      height: 63px;
      margin-top: 15px;
      background-color: #fafafa;
      text-decoration: none;

      :hover {
        background-color: #f4f4f4;
      }

      img {
        width: 63px;
        height: 63px;
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
        }

        .alia {
          font-size: 12px;
          color: #666;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }
      }
    }
  }

  .apply-for {
    margin-top: 15px;
    a {
      color: #333;
      font-weight: 700;
      text-align: center;
      display: block;
      height: 31px;
      line-height: 31px;
      border-radius: 4px;
      background-color: #fafafa;
      border: 1px solid #c3c3c3;
      text-decoration: none;
    }
  }
`
