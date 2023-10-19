import { memo } from 'react'
import type { ReactNode, FC } from 'react'
import { Card } from 'antd'
import { useMusicSelector, shallowEqualMusic } from '@/store'
import AreaHeaderV2 from '@/components/area-header-v2'
import { AnchorWrapper, CardWrapper } from './style'
import { getImageSize } from '@/utils/format'

interface IProps {
  children?: ReactNode
}
const HotAnchor: FC<IProps> = () => {
  const { anchorList } = useMusicSelector(
    (state) => ({
      anchorList: state.recommend.anchorList,
    }),
    shallowEqualMusic,
  )
  return (
    <CardWrapper>
      <Card
        title={
          <AreaHeaderV2
            title="热门主播"
            moreText="查看全部 &gt;"
            moreLink="#/discover/djradio"
          />
        }
        bordered={false}
        style={{ width: 250, marginTop: 20 }}
        className="card"
      >
        <AnchorWrapper>
          <div className="artists">
            {anchorList.map((item: any) => {
              return (
                <a href="#/discover/djradio" className="item" key={item.id}>
                  <div className="rank">{item.rank}</div>
                  <img src={getImageSize(item.avatarUrl, 80)} alt="" />
                  <div className="info">
                    <div className="name">{item.nickName}</div>
                    <div className="alia">分数:{item.score}</div>
                  </div>
                </a>
              )
            })}
          </div>
        </AnchorWrapper>
      </Card>
    </CardWrapper>
  )
}

export default memo(HotAnchor)
