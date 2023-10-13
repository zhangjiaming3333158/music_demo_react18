import styled from 'styled-components'

export const AlbumItemWrapper = styled.div`
  .top {
    position: relative;
    width: 130px;
    height: 120px;
    overflow: hidden;
    border-radius: 5px;

    img {
      width: 120px;
      height: 120px;
      border-radius: 5px;
    }

    .cover {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background-position: 0 -570px;
      text-indent: -9999px;
    }
  }

  .bottom {
    font-size: 12px;
    width: 100px;
    height: 40px;
    display: flex;
    flex-direction: column;
    .name {
      white-space: nowrap; //不换行
      overflow: hidden; //超出部分隐藏
      text-overflow: ellipsis; //文本溢出显示省略号
      height: 20px;
      color: #000;
      ${(props) => props.theme.mixin.textNowrap}
    }

    .artist {
      white-space: nowrap; //不换行
      overflow: hidden; //超出部分隐藏
      text-overflow: ellipsis; //文本溢出显示省略号
      height: 20px;
      color: #666;
      ${(props) => props.theme.mixin.textNowrap}
    }
  }
`
