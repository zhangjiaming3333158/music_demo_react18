import { memo } from 'react'
import type { ReactNode, FC } from 'react'
import { TopRankingWrapper } from './style'

interface IProps {
  children?: ReactNode
  text: [string, number]
}
const TopRankColBody: FC<IProps> = (props) => {
  const { text } = props
  return (
    <TopRankingWrapper>
      <div className="left">
        <span className={text[1] <= 3 ? 'span3' : 'span10'}>{text[1]}</span>
        <a
          href={text[1] === null ? '#/discover/ranking' : undefined}
        >
          {text[0]}
        </a>
      </div>
      <div className="right">
        <button
          className="btn sprite_02 play"
          // onClick={() => handlePlayClick(item.id)}
        ></button>
        <button className="btn sprite_icon2 add"></button>
        <button className="btn sprite_02 favor"></button>
      </div>
    </TopRankingWrapper>
  )
}

export default memo(TopRankColBody)
