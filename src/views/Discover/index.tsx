import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import { ReactNode, FC, memo } from 'react'
import NavBar from './c-cpns/nav-bar'

interface IProps {
  children?: ReactNode
}
const Discover: FC<IProps> = () => {
  return (
    <div className="discover">
      <NavBar />
      <div className="content">
        <Suspense fallback="loading">
          <Outlet />
        </Suspense>
      </div>
    </div>
  )
}

export default memo(Discover)
