import styled from 'styled-components'

export const HeaderV1Wrapper = styled.div`
  height: 33px;
  padding: 0 10px 0 0;
  background-position: -225px -156px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  .left {
    display: flex;
    align-items: center;

    .title {
      font-size: 20px;
      font-family: 'Microsoft Yahei', Arial, Helvetica, sans-serif;
      margin-right: 20px;
      color: ${({ theme }) => theme.palette.color.middle};
    }

    .keywords {
      display: flex;
      align-items: center;

      .item {
        position: relative;
        top: 2px;

        .link {
          font-size: 12px;
          color: ${({ theme }) => theme.palette.color.secondary};
          &:hover {
            color: ${({ theme }) => theme.palette.color.default};
            cursor: pointer;
            text-decoration: underline;
          }
        }

        .divider {
          margin: 0 15px;
          color: ${({ theme }) => theme.palette.color.secondary};
        }

        &:last-child {
          .divider {
            display: none;
          }
        }
      }
    }
  }

  .right {
    display: flex;
    align-items: center;
    .more {
      color: ${({ theme }) => theme.palette.color.secondary};
      &:hover {
        text-decoration: none;
        color: ${({ theme }) => theme.palette.color.default};
      }
    }

    .icon {
      display: inline-block;
      width: 12px;
      height: 12px;
      margin-left: 4px;
      background-position: 0 -240px;
    }
  }
`
