import { ReactNode, FC, memo } from 'react'
import { NavLink } from 'react-router-dom'

import routes from '@/router'
import styles from './index.module.scss'

interface IProps {
  children?: ReactNode
}
const AppHeader: FC<IProps> = () => {
  return (
    <div className={styles.HeaderWrapper}>
      <div className={styles.content}>
      {/* <div className="content wrap-v1"> */}
        <div className={styles.HeaderLeft}>
          <a className={styles.logo} href="/">
          {/* <a className="logo sprite_01" href="/"> */}
            网易云音乐
          </a>
          <div className={styles.title_list}>
            {routes
              .filter((route: { title: any }) => route.title)
              .map(({ path, title }) => (
                <div className={styles.item} key={path}>
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
        </div>
        <div className='HeaderRight'>
          {/* <Search
            searchFlag={searchFlag}
            searchWord={handleSearchWord}
            searchFocus={searchFocus}
            searchBlur={searchBlur}
            searchClick={searchClick}
            ref={searchRef}
          />
          <span className="login">
            <Avatar>
              {nullObj(userInfo) ? (
                <img
                  style={{ width: '40px', height: '40px' }}
                  src={userInfo?.profile?.avatarUrl}
                  alt=""
                  onClick={handleTheme}
                />
              ) : (
                <MdiAccount />
              )}
            </Avatar>
          </span> */}
        </div>
      </div>
      <div className="divider"></div>
    </div>
  )
}

export default memo(AppHeader)
