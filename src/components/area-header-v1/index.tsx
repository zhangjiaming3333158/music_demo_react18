import { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { HeaderV1Wrapper } from './style'
import { FireTwoTone, RightCircleTwoTone } from '@ant-design/icons'

interface IProps {
  children?: ReactNode
  title?: string
  keywords?: string[]
  moreText?: string
  moreLink?: string
}

const AreaHeaderV1: FC<IProps> = (props) => {
  const {
    title = '默认标题',
    keywords = [],
    moreText = '更多',
    moreLink = '/',
  } = props

  return (
    <HeaderV1Wrapper>
      <div className="left">
        <FireTwoTone twoToneColor="#ad271d" style={{ marginRight: 10 }} />
        <h3 className="title">{title}</h3>
        <div className="keywords">
          {keywords.map((item) => {
            return (
              <div className="item" key={item}>
                <span className="link">{item}</span>
                <span className="divider">|</span>
              </div>
            )
          })}
        </div>
      </div>
      <div className="right">
        <Link className="more" to={moreLink}>
          {moreText}
        </Link>
        <RightCircleTwoTone twoToneColor="#ad271d" style={{ marginLeft: 10 }}/>
      </div>
    </HeaderV1Wrapper>
  )
}

export default memo(AreaHeaderV1)
