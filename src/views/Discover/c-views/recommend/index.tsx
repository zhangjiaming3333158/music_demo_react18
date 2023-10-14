import { ReactNode, FC, memo } from 'react'
import { useEffect } from 'react'
import { useMusicDispatch } from '@/store'
import {
  fetchBannerDataAction,
  fetchRecommendSongsDataAction,
  fetchNewAlbumDataAction,
  fetchRankingsDataAction,
  fetchArtistListDataAction,
  fetchAnchorListDataAction,
} from '@/store/modules/recommend'

import TopBanner from './c-cpns/topBanners'
import HotRecommend from './c-cpns/HotRecommend'
import TopRanking from './c-cpns/TopRanking'
import NewAlbum from './c-cpns/NewAlbum'
import SettleSinger from './c-cpns/SettleSinger'
import HotAnchor from './c-cpns/HotAnchor'
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
    dispatch(fetchArtistListDataAction())
    dispatch(fetchAnchorListDataAction())
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
          <SettleSinger />
          <HotAnchor />
        </div>
      </div>
    </RecommendWrapper>
  )
}

export default memo(recommend)
