import styled from 'styled-components'

export const SongListWrapper = styled.div`
  height: 100%;
  width: 100%;
  .container {
    display: flex;
    flex-direction: column;
    height: 100%;
    .header {
      box-sizing: border-box;
      padding: 10px 10px;
      width: 100%;
      height: 60px;
      border-bottom: 1px solid
        ${(props) => props.theme.palette.background.border};
      .current {
        float: left;
        margin-left: 10px;
        font-size: 30px;
        color: ${(props) => props.theme.palette.color.middle};
      }
      .total {
        float: right;
        margin-right: 10px;
        font-size: 16px;
        text-align: center;
        line-height: 60px;
        color: ${(props) => props.theme.palette.color.middle};
      }
    }
    .content {
      height: 240px; /* 你想要的高度 */
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: start;
      overflow-y: auto;
      .song {
        box-sizing: border-box;
        padding: 0 30px;
        min-height: 30px;
        width: 100%;
        display: flex;
        align-items: center;
        .song-name {
          flex: 1;
        }
        .singer-name {
          flex: 1;
        }
        .total-time {
          width: 90px;
        }
        .song-name,
        .singer-name,
        .total-time {
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          font-size: 14px;
          color: ${(props) => props.theme.palette.color.default};
          p {
            float: left;
          }
        }
        &:hover {
          background-color: ${(props) => props.theme.palette.background.hover};
        }
      }
    }
  }
`
