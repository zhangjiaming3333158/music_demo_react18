import React, { useState, ReactNode, FC, memo } from 'react'
import { shallowEqualMusic, useMusicSelector } from '@/store'
import { Carousel } from 'antd'

import User from '../user'
import {
  BannerWrapper,
  BannerLeft,
  BannerRight,
  BannerControl,
} from './style.ts'
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
  const bannerRef = React.useRef<any>(null)
  // 左切换
  const handleNextClick = () => {
    bannerRef.current.next()
  }
  // 右切换
  const handlePrevClick = () => {
    bannerRef.current.prev()
  }
  /** 获取背景图片 */
  let bgImageUrl = banners?.[currentIndex]?.imageUrl
  if (bgImageUrl) bgImageUrl = `${bgImageUrl}?imageView&blur=40x20`
  function handleAfterChange(current: number) {
    setCurrentIndex(current)
  }
  return (
    <BannerWrapper
      style={{
        background: `url('${bgImageUrl}') center center / 6000px`,
      }}
    >
      <div className="banner wrap-v2">
        <BannerLeft>
          <Carousel
            autoplay
            dots={true}
            autoplaySpeed={5000}
            effect="fade"
            ref={bannerRef}
            afterChange={handleAfterChange}
          >
            {banners.map((item: { imageUrl: string; typeTitle: string }) => {
              return (
                <div className="banner-item" key={item.imageUrl}>
                  <img
                    className="image"
                    src={item.imageUrl}
                    alt={item.typeTitle}
                  />
                </div>
              )
            })}
          </Carousel>
          {/* <ul className="dots">
            {banners.map(
              (
                item: { imageUrl: string; typeTitle: string },
                index: number,
              ) => {
                return (
                  <li key={item.imageUrl}>
                    <span
                      className={classNames('item', {
                        active: index === currentIndex,
                      })}
                    ></span>
                  </li>
                )
              },
            )}
          </ul> */}
        </BannerLeft>
        <BannerRight>
          <User />
        </BannerRight>
        <BannerControl>
          <button className="btn left" onClick={handlePrevClick}></button>
          <button className="btn right" onClick={handleNextClick}></button>
        </BannerControl>
      </div>
    </BannerWrapper>
  )
}

export default memo(TopBanners)
