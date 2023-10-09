import { ReactNode, FC, memo } from 'react'
import { useEffect } from 'react'
import { useMusicDispatch } from '@/store'
import { fetchBannerDataAction } from '@/store/modules/recommend'
import { Card } from 'antd'

import TopBanner from './c-cpns/topBanners/top-banners'
import HotRecommend from './c-cpns/HotRecommend'
import AreaHeaderV1 from '@/components/area-header-v1'
import { RecommendWrapper } from './style'

interface IProps {
  children?: ReactNode
}
const recommend: FC<IProps> = () => {
  /** 发起action(获取数据) */
  const dispatch = useMusicDispatch()
  useEffect(() => {
    dispatch(fetchBannerDataAction())
  }, [])
  return (
    <RecommendWrapper>
      <TopBanner />
      <div className="content wrap-v2">
        <div className="left">
          <Card
            title={
              <AreaHeaderV1
                title="热门推荐"
                keywords={['华语', '流行', '摇滚', '民谣', '电子']}
                moreLink="/discover/songs"
              />
            }
            bordered={false}
            style={{ width: 709 }}
          >
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card>
          <HotRecommend />
          left
          {/* <NewAlbum /> */}
          {/* <TopRanking /> */}
        </div>
        <div className="right">
          <Card title="Card title" bordered={false} style={{ width: 250 }}>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card>
          right
          {/* <UserLogin /> */}
          {/* <SettleSinger /> */}
          {/* <HotAnchor /> */}
        </div>
      </div>
    </RecommendWrapper>
  )
}

export default memo(recommend)
