import { ReactNode, FC, memo } from 'react'
import { NavLink } from 'react-router-dom'
import { Input } from 'antd'
import { SearchOutlined } from '@ant-design/icons'

import routes from '@/router'
import { HeaderLeft, HeaderRight, HeaderWrapper } from './style'

interface IProps {
  children?: ReactNode
}
const AppHeader: FC<IProps> = () => {
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
              .map(({ path, title }) => (
                <div className="item" key={path}>
                  <NavLink
                    to={path}
                    className={({ isActive }) => {
                      return isActive ? 'active' : undefined
                    }}
                  >
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
          <span className="center">创作者中心</span>
          <span className="login">登录</span>
        </HeaderRight>
      </div>
      <div className="divider"></div>
    </HeaderWrapper>
  )
}

export default memo(AppHeader)
