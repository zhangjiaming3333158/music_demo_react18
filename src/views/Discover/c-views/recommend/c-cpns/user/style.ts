import styled from 'styled-components'

export const UserWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
  font-size: 12px;
  padding: 10px 22.5px;
  backdrop-filter: blur(500px);
  color: #eee;
  .title {
    flex: 1;
    font-size: 15px;
    line-height: 19px;
  }
  .content {
    flex: 3;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    gap: 10px;
    .item {
      margin-left: 10px;
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

// export const SkeletonWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   gap: 30px;
// `

export const UserInfoWrapper = styled.div`
  display: flex;
  box-sizing: border-box;
  padding: 20px;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  background-color: ${({ theme }) => theme.palette.background.login};
  color: ${({ theme }) => theme.palette.color.middle};
  .avatar {
    border: 5px solid #eee;
  }
  .nickname {
    font-weight: bold;
    font-size: 18px;
  }
`
