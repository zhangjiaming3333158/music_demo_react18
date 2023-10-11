import { memo, useRef } from 'react'
import type { FC, ReactNode, ElementRef } from 'react'
import { Card, Carousel } from 'antd'
import { shallowEqualMusic, useMusicSelector } from '@/store'
import AreaHeaderV1 from '@/components/area-header-v1'
import NewAlbumItem from '@/components/new-album-item'
import { AlbumWrapper } from './style'

interface IProps {
  children?: ReactNode
}
const NewAblum: FC<IProps> = () => {
  const onChange = () => {}
  const { recommendSongList } = useMusicSelector(
    (state) => ({
      recommendSongList: state.recommend.recommendSongList,
    }),
    shallowEqualMusic,
  )
  const bannerRef = useRef<ElementRef<typeof Carousel>>(null)
  /** 事件处理函数 */
  function handlePrevClick() {
    bannerRef.current?.prev()
  }
  function handleNextClick() {
    bannerRef.current?.next()
  }
  // 生成新碟上架的页数
  let list = []
  for (let i = 0; i < Math.floor(recommendSongList.length / 4); i++) {
    list.push(i)
  }
  return (
    <Card
      title={<AreaHeaderV1 title="新碟上架" moreLink="/discover/album" />}
      bordered={false}
      style={{ width: 709, marginTop: 20 }}
    >
      <Carousel afterChange={onChange}>
        <AlbumWrapper>
          <div className="content">
            <button
              className="sprite_02 arrow arrow-left"
              onClick={handlePrevClick}
            ></button>
            <div className="banner">
              <Carousel ref={bannerRef} dots={false} speed={1500}>
                {list.map((item) => {
                  return (
                    <div key={item}>
                      <div className="album-list">
                        {recommendSongList
                          .slice(item * 4, (item + 1) * 4)
                          .map((album: any) => {
                            return (
                              <NewAlbumItem key={album.id} itemData={album} />
                            )
                          })}
                      </div>
                    </div>
                  )
                })}
              </Carousel>
            </div>
            <button
              className="sprite_02 arrow arrow-right"
              onClick={handleNextClick}
            ></button>
          </div>
        </AlbumWrapper>
      </Carousel>
    </Card>
  )
}

export default memo(NewAblum)
