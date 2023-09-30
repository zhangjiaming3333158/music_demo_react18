import { ReactNode, FC, memo } from 'react'

interface IProps {
  children?: ReactNode
}
const ranking: FC<IProps> = () => {
  return <div>ranking</div>
}

export default memo(ranking)
