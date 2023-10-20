import styled from 'styled-components'

export const CardWrapper = styled.div`
  .card {
    background-color: ${({ theme }) => theme.palette.background.paper};
  }
`

export const AnchorWrapper = styled.div`
  .artists {
    margin-left: -15px;
    width: 230px;
    .item {
      display: flex;
      height: 65px;
      margin-bottom: 18px;
      border: 1px solid ${({ theme }) => theme.palette.background.border};
      background-color: ${({ theme }) => theme.palette.background.paper};
      text-decoration: none;

      :hover,
      .rank {
        background-color: ${({ theme }) => theme.palette.background.hover};
      }

      .rank {
        width: 20px;
        font-size: 16px;
        text-align: center;
        line-height: 65px;
        background-color: ${({ theme }) => theme.palette.background.paper};
        color: ${({ theme }) => theme.palette.color.default};
      }

      img {
        width: 65px;
        height: 65px;
        border-radius: 5px;
      }

      .info {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        padding: 3px 12px;

        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
        border-left: none;
        overflow: hidden;

        .name {
          font-size: 14px;
          font-weight: 700;
          color: ${({ theme }) => theme.palette.color.default};
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }

        .alia {
          font-size: 12px;
          color: ${({ theme }) => theme.palette.color.default};
        }
      }
    }
  }
`
