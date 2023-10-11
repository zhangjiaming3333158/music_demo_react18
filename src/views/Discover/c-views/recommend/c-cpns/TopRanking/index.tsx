import { memo } from 'react'
import type { ReactNode, FC } from 'react'
import { Card } from 'antd'
import AreaHeaderV1 from '@/components/area-header-v1'

interface IProps {
  children?: ReactNode
}
const TopRanking: FC<IProps> = () => {
  return (
    <Card
      title={<AreaHeaderV1 title="榜单" moreLink="/discover/ranking" />}
      bordered={false}
      style={{ width: 709, marginTop: 20 }}
    ></Card>
  )
}

export default memo(TopRanking)
