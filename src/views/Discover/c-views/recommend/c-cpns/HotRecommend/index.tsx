import { ReactNode, FC, memo } from 'react'
import { shallowEqualMusic, useMusicSelector } from '@/store'
import SongMenuItem from '@/components/song-menu-item'
import AreaHeaderV1 from '@/components/area-header-v1'
import { Card } from 'antd'
import { RecommendWrapper, CardWrapper } from './style'

interface IProps {
  children?: ReactNode
}
const HotRecommend: FC<IProps> = () => {
  const { recommendSongs } = useMusicSelector(
    (state) => ({
      recommendSongs: state.recommend.recommendSongs,
    }),
    shallowEqualMusic,
  )
  return (
    <CardWrapper>
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
        className='card'
      >
        <RecommendWrapper>
          <div className="recommend-list">
            {recommendSongs.map((item: any) => {
              return <SongMenuItem key={item.id} itemData={item} />
            })}
          </div>
        </RecommendWrapper>
      </Card>
    </CardWrapper>
  )
}

export default memo(HotRecommend)
