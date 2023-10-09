import { ReactNode, FC, memo } from 'react'


interface IProps {
  children?: ReactNode
}
const HotRecommend: FC<IProps> = () => {
  return (
    <div>
      
      HotRecommend
    </div>
  )
}

export default memo(HotRecommend)
