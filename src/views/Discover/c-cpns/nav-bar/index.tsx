import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { NavWrapper } from './style'
import routes from '@/router'
import { NavLink, Path } from 'react-router-dom'
const res = routes.filter((item: { children: any }) => item.children) // 过滤出有children的路由
const navRoute = res[0].children.filter((item: { title: any }) => item.title) //第一个有children的路由（Discover）的children标题
interface IProps {
  children?: ReactNode
}

const NavBar: FC<IProps> = () => {
  return (
    <NavWrapper>
      <div className="nav wrap-v1">
        {navRoute.map(
          (item: {
            path: string | number | Partial<Path> | null | undefined
            title:
              | string
              | number
              | boolean
              | React.ReactElement<
                  any,
                  string | React.JSXElementConstructor<any>
                >
              | React.ReactFragment
              | React.ReactPortal
              | ((props: {
                  isActive: boolean
                  isPending: boolean
                }) => React.ReactNode)
              | null
              | undefined
          }) => {
            return (
              <div className="item" key={item.path?.toString()}>
                <NavLink to={item.path?.toString() ?? ''}>{item.title}</NavLink>
              </div>
            )
          },
        )}
      </div>
    </NavWrapper>
  )
}

export default memo(NavBar)
