import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import { ReactNode, FC, memo } from 'react'
import NavBar from './c-cpns/nav-bar'
import { ContentWarpper } from './style'

interface IProps {
  children?: ReactNode
}
const Discover: FC<IProps> = () => {
  return (
    <div className="discover">
      <NavBar />
      <ContentWarpper>
        <div className="content" style={{ backgroundColor: '#000' }}>
          <Suspense fallback="loading">
            <Outlet />
          </Suspense>
        </div>
      </ContentWarpper>
    </div>
  )
}

export default memo(Discover)
