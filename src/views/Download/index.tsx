import React from 'react'
import { ReactNode, FC, memo } from 'react'

interface IProps {
  children?: ReactNode
}
const Download: FC<IProps> = (props) => {
  return <div>Download</div>
}

export default memo(Download)
