import { ReactNode, FC, memo } from 'react'

interface IProps {
  children?: ReactNode
}
const Download: FC<IProps> = () => {
  return <div>Download</div>
}

export default memo(Download)
