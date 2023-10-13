import { ReactNode, FC, memo } from 'react'
import { useEffect } from 'react'
import { useMusicDispatch } from '@/store'
import {
  fetchBannerDataAction,
  fetchRecommendSongsDataAction,
  fetchNewAlbumDataAction,
  fetchRankingsDataAction,
} from '@/store/modules/recommend'

import { Card } from 'antd'

import TopBanner from './c-cpns/topBanners'
import HotRecommend from './c-cpns/HotRecommend'
import TopRanking from './c-cpns/TopRanking'
import NewAlbum from './c-cpns/NewAlbum'
import { RecommendWrapper } from './style'

interface IProps {
  children?: ReactNode
}
const recommend: FC<IProps> = () => {
  /** 发起action(获取数据) */
  const dispatch = useMusicDispatch()
  useEffect(() => {
    dispatch(fetchBannerDataAction())
    dispatch(fetchRecommendSongsDataAction())
    dispatch(fetchNewAlbumDataAction())
    dispatch(fetchRankingsDataAction())
  }, [])
  return (
    <RecommendWrapper>
      <TopBanner />
      <div className="content wrap-v2">
        <div className="left">
          <HotRecommend />
          <NewAlbum />
          <TopRanking />
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
