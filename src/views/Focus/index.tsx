import React from 'react'
import { ReactNode, FC, memo } from 'react'

interface IProps {
  children?: ReactNode
}
const Focus: FC<IProps> = (props) => {
  return <div>Focus</div>
}

export default memo(Focus)
