import { memo } from 'react'
import type { ReactNode, FC } from 'react'
import { useMusicSelector, shallowEqualMusic, useMusicDispatch } from '@/store'
import { formatTime } from '@/utils/format'
import { SongListWrapper } from './style'

interface IProps {
  children?: ReactNode
}
const AppPlayerBar: FC<IProps> = () => {
  /** 从redux中获取数据 */
  const { playSongList } = useMusicSelector(
    (state) => ({
      playSongList: state.player.playSongList,
    }),
    shallowEqualMusic,
  )
  return (
    <SongListWrapper>
      <div className="container">
        <div className="header">
          <div className="current">当前播放</div>
          <div className="total">总 {playSongList.length} 首</div>
        </div>
        <div className="content">
          {playSongList?.map((item: any) => {
            return (
              <div className="song" key={item.id}>
                <div className="song-name">
                  <p>{item.name}</p>
                </div>
                <div className="singer-name">
                  <p>{item.ar[0].name}</p>
                </div>
                <div className="total-time">
                  <p>{formatTime(item.dt)}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </SongListWrapper>
  )
}

export default memo(AppPlayerBar)
