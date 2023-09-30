import { memo, useEffect, useState } from 'react'
import type { ReactNode, FC } from 'react'
import request from '@/service'

interface IProps {
  children?: ReactNode
}
const album: FC<IProps> = () => {
  let [banners, setBanners] = useState<any[]>([])
  useEffect(() => {
    request
      .get({
        url: '/banner',
      })
      .then((res) => {
        setBanners(res.banners)
      })
  }, [])
  return (
    <div>
      <h1>专辑</h1>
      <ul>
        {banners.map((item) => {
          return (
            <li key={item.targetId}>
              <img src={item.imageUrl} alt="" />
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default memo(album)
