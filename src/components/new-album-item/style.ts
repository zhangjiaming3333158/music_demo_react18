import styled from 'styled-components'

export const AlbumItemWrapper = styled.div`
  .top {
    position: relative;
    width: 130px;
    height: 130px;
    overflow: hidden;
    border-radius: 5px;

    img {
      width: 130px;
      height: 130px;
      border-radius: 5px;
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
