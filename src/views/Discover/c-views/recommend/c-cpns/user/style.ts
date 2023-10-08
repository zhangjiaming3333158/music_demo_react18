import styled from 'styled-components'

export const UserWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
  font-size: 12px;
  padding: 16px 22.5px;
  background-color: #eeeeee30;
  backdrop-filter: blur(500px);
  color: #eee;
  .title {
    flex: 1;
    font-size: 12px;
    line-height: 19px;
  }
  .content {
    flex: 3;
    display: flex;
    flex-direction: column;
    gap: 10px;
    .item {
      flex: 1;
      display: flex;
      align-items: center;
    }
  }
  .button {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

export const SkeletonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`

export const UserInfoWrapper = styled.div`
  display: flex;
  width: 100%;
  /* justify-content: center; */
  flex-direction: column;
  align-items: center;
  gap: 20px;
  user-select: none;
  .avatar {
    border: 5px solid #eee;
  }
  .nickname {
    font-weight: bold;
    font-size: 18px;
  }
  .other {
    display: flex;
    gap: 30px;
    font-size: 13px;
    font-weight: bold;
    span {
      font-size: 12px;
    }
    div {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
`
