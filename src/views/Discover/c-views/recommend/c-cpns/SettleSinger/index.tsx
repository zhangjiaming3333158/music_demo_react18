import { memo } from 'react'
import type { ReactNode, FC } from 'react'
import { Card } from 'antd'
import { useMusicSelector, shallowEqualMusic } from '@/store'
import AreaHeaderV2 from '@/components/area-header-v2'
import { getImageSize } from '@/utils/format'
import { SingerWrapper } from './style'

interface IProps {
  children?: ReactNode
}
const SettleSinger: FC<IProps> = () => {
  const { artistList } = useMusicSelector(
    (state) => ({
      artistList: state.recommend.artistList,
    }),
    shallowEqualMusic,
  )
  return (
    <Card
      title={
        <AreaHeaderV2
          title="入驻歌手"
          moreText="查看全部 &gt;"
          moreLink="#/discover/artist"
        />
      }
      bordered={false}
      style={{ width: 250 }}
    >
      <SingerWrapper>
        <div className="artists">
          {artistList.map((item: any) => {
            return (
              <a href="#/discover/artist" className="item" key={item.id}>
                <img src={getImageSize(item.picUrl, 80)} alt="" />
                <div className="info">
                  <div className="name">{item.name}</div>
                  <div className="alia">{item.alias.join(' ')}</div>
                </div>
              </a>
            )
          })}
        </div>
        <div className="apply-for">
          <a href="#/">申请成为网易音乐人</a>
        </div>
      </SingerWrapper>
    </Card>
  )
}

export default memo(SettleSinger)
