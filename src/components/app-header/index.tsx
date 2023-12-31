import { ReactNode, FC, memo } from 'react'
import { NavLink } from 'react-router-dom'
import { Input } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import routes from '@/router'
import { useMusicDispatch, useMusicSelector, shallowEqualMusic } from '@/store'
import { changeTheme } from '@/store/modules/theme'
import { setLoginModal } from '@/store/modules/user'
import IconSun, { IconMoon } from '@/assets/icon/icon'
import { HeaderLeft, HeaderRight, HeaderWrapper } from './style'

interface IProps {
  children?: ReactNode
}
const AppHeader: FC<IProps> = () => {
  const dispatch = useMusicDispatch()
  function changeMode() {
    dispatch(changeTheme())
  }
  // 切换样式
  const { mode } = useMusicSelector(
    (state: any) => ({
      mode: state.theme.mode,
    }),
    shallowEqualMusic,
  )
  // 是否登录
  const { isLogin } = useMusicSelector(
    (state: any) => ({
      isLogin: state.user.isLogin,
    }),
    shallowEqualMusic,
  )
  //登录窗口
  function Login() {
    dispatch(setLoginModal())
  }
  return (
    <HeaderWrapper>
      <div className="content wrap-v1">
        <HeaderLeft>
          <a className="logo sprite_01" href="/">
            网易云音乐
          </a>
          <div className="title-list">
            {routes
              .filter((route: { title: any }) => route.title)
              .map(({ path, title }: { path: string; title: string }) => (
                <div className="item" key={path}>
                  <NavLink to={path}>
                    {title}
                    <i className="icon sprite_01"></i>
                  </NavLink>
                </div>
              ))}
          </div>
        </HeaderLeft>
        <HeaderRight>
          <Input
            className="search"
            placeholder="音乐/视频/播客"
            prefix={<SearchOutlined />}
          />
          {isLogin ? null : (
            <span className="login" onClick={Login}>
              登录
            </span>
          )}
          <button className="center" onClick={changeMode}>
            {mode === 'light' ? <IconSun /> : <IconMoon />}
          </button>
        </HeaderRight>
      </div>
      <div className="divider"></div>
    </HeaderWrapper>
  )
}

export default memo(AppHeader)
