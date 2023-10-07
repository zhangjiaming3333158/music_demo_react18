import { useState, ReactNode, FC, memo } from 'react'
import { shallowEqualMusic, useMusicSelector } from '@/store'

import './style.ts'
import { BannerWrapper } from './style.ts'
interface IProps {
  children?: ReactNode
}

const TopBanners: FC<IProps> = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const { banners } = useMusicSelector(
    (state: any) => ({
      banners: state.recommend.banners,
    }),
    shallowEqualMusic,
  )
  console.log(banners)
  return (
    <BannerWrapper>
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
    </BannerWrapper>
  )
}

export default memo(TopBanners)
