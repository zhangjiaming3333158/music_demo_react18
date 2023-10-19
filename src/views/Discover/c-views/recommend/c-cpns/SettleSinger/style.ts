import styled from 'styled-components'

export const CardWrapper = styled.div`
  .card {
    background-color: ${({ theme }) => theme.palette.background.paper};
  }
`

export const SingerWrapper = styled.div`
  margin-top: -20px;
  .artists {
    .item {
      display: flex;
      height: 63px;
      margin-top: 15px;
      background-color: ${({ theme }) => theme.palette.background.paper};
      text-decoration: none;

      :hover {
        background-color: ${({ theme }) => theme.palette.background.hover};
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
        border: 1px solid ${({ theme }) => theme.palette.background.border};
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
        border-left: none;
        overflow: hidden;

        .name {
          font-size: 14px;
          font-weight: 700;
          color: ${({ theme }) => theme.palette.color.default};
        }

        .alia {
          font-size: 12px;
          color: ${({ theme }) => theme.palette.color.secondary};
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
      color: ${({ theme }) => theme.palette.color.secondary};
      font-weight: 700;
      text-align: center;
      display: block;
      height: 31px;
      line-height: 31px;
      border-radius: 4px;
      background-color: ${({ theme }) => theme.palette.background.default};
      border: 1px solid ${({ theme }) => theme.palette.background.border};
      text-decoration: none;
      &:hover {
        background-color: ${({ theme }) => theme.palette.background.hover};
      }
    }
  }
`
