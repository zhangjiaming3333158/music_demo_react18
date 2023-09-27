import React from 'react'
import { ReactNode, FC, memo } from 'react'

interface IProps {
  children?: ReactNode
}
const toplist: FC<IProps> = (props) => {
  return <div>toplist</div>
}

export default memo(toplist)
