import { Suspense } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { ReactNode, FC, memo } from 'react'

interface IProps {
  children?: ReactNode
}
const Discover: FC<IProps> = () => {
  return (
    <div className='discover'>
      <div className="nav">
        <Link to="recommend">推荐</Link>
        <Link to="ranking">排行榜</Link>
        <Link to="songs">歌单</Link>
        <Link to="djradio">主播电台</Link>
        <Link to="artist">歌手</Link>
        <Link to="album">新碟上架</Link>
      </div>
      <div className="content">
        <Suspense fallback="loading">
          <Outlet />
        </Suspense>
      </div>
    </div>
  )
}

export default memo(Discover)
