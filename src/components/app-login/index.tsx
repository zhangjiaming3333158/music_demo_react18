import { memo, useState } from 'react'
import type { ReactNode, FC } from 'react'
import { LoginWrapper, LoginDialogWrapper } from './style'
import { setLoginModal, setLoginData } from '@/store/modules/user'
import { useMusicDispatch } from '@/store'
import Button from '@mui/material/Button'
// import Avatar from '@mui/material/Avatar'
// import CircularProgress from '@mui/material/CircularProgress'
import Divider from '@mui/material/Divider'
import { TextField } from '@mui/material'
import { message } from 'antd'
import { phoneLogin } from '@/service/modules/login'

interface IProps {
  children?: ReactNode
}
const Login: FC<IProps> = () => {
  const dispatch = useMusicDispatch()
  // 登录窗口
  function Login() {
    dispatch(setLoginModal())
  }
  // 登录信息
  const [messageApi, contextHolder] = message.useMessage() //登录提示
  const [account, setAccount] = useState('')
  const [password, setPassword] = useState('')
  // 账号
  const handleAccountChange = (event: any) => {
    setAccount(event.target.value)
  }
  // 密码
  const handlePasswordChange = (event: any) => {
    setPassword(event.target.value)
  }
  // 登录
  const handleLoginClick = async () => {
    let res = await phoneLogin(account, password)
    if (res.code !== 200 && res.code !== 400) {
      messageApi.open({
        type: 'error',
        content: res.msg,
        className: 'custom-class',
        style: {
          position: 'absolute',
          top: '10px',
        },
      })
    } else if (res.code === 400) {
      messageApi.open({
        type: 'error',
        content: 'error400',
        className: 'custom-class',
        style: {
          marginTop: '0',
        },
      })
    } else {
      dispatch(setLoginModal())
      dispatch(setLoginData(true))
    }
    console.log(res)
  }
  return (
    <LoginWrapper>
      {contextHolder}
      <div className="container">
        <div className="header" onClick={Login}>
          <span>x</span>
        </div>
        <LoginDialogWrapper>
          <div className="top-container">
            <div className="left">
              <span>扫描二维码登录</span>
              <div className="code">
                <img src="" alt="" />
                {/* {nullObj(poilingData) ? (
                  <div className="codeDrop">
                    <Avatar
                      className="avatar"
                      src={poilingData?.avatarUrl}
                      sx={{ width: 86, height: 86 }}
                    />
                    <CircularProgress
                      size={100}
                      sx={{
                        position: 'absolute',
                        top: 40,
                        left: 40,
                        zIndex: 1,
                      }}
                    />
                  </div>
                ) : null} */}
              </div>
              {/* <span>{poilingInfo}</span> */}
            </div>
            <Divider orientation="vertical" flexItem></Divider>
            <div className="right">
              <div className="top">
                <span>手机登录</span>
              </div>
              <div className="content">
                <TextField
                  fullWidth
                  label="账号"
                  variant="outlined"
                  size="small"
                  value={account}
                  onChange={handleAccountChange}
                />
                <TextField
                  fullWidth
                  label="密码"
                  variant="outlined"
                  size="small"
                  value={password}
                  onChange={handlePasswordChange}
                />
                <Button
                  variant="contained"
                  fullWidth
                  onClick={handleLoginClick}
                >
                  登录
                </Button>
              </div>
              <div className="way">其他登录方式</div>
              <div className="bottom">
                <div className="loginType">
                  <div className="flex">
                    <div className="weixin"></div>
                    <span>微信登录</span>
                  </div>
                  <div className="flex">
                    <div className="weibo"></div>
                    <span>微博登录</span>
                  </div>
                  <div className="flex">
                    <div className="qq"></div>
                    <span>QQ登录</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </LoginDialogWrapper>
      </div>
    </LoginWrapper>
  )
}

export default memo(Login)
