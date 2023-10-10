import { ReactNode, FC, memo } from 'react'
import { Card, Carousel } from 'antd'
import AreaHeaderV1 from '@/components/area-header-v1'
import { AlbumWrapper } from './style'

interface IProps {
  children?: ReactNode
}
const NewAblum: FC<IProps> = () => {
  const onChange = (currentSlide: number) => {
    console.log(currentSlide)
  }
  return (
    <AlbumWrapper>
      <Card
        title={<AreaHeaderV1 title="新碟上架" moreLink="/discover/album" />}
        bordered={false}
        style={{ width: 709 }}
      >
        <Carousel afterChange={onChange}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
        </Carousel>
      </Card>
    </AlbumWrapper>
  )
}

export default memo(NewAblum)
