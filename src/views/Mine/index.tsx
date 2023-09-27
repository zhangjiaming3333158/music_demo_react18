import React from 'react'
import { ReactNode, FC, memo } from 'react'

interface IProps {
  children?: ReactNode
}
const Mine: FC<IProps> = (props) => {
  return <div>Mine</div>
}

export default memo(Mine)
