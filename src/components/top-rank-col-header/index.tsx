import { memo } from 'react'
import type { ReactNode, FC } from 'react'
import { TopRankingWrapper } from './style'

interface IProps {
  children?: ReactNode
  textValue: [string, string]
}
const TopRankColHeader: FC<IProps> = (props) => {
  const { textValue } = props
  return (
    <TopRankingWrapper>
      <div style={{ display: 'flex', width: '100%' }}>
        <div style={{ width: 80 }}>
          <img
            src={textValue[0]}
            alt=""
            style={{
              height: 80,
              width: 80,
              boxShadow: '0 4px 10px rgba(0, 0, 0, 0.5)',
            }}
          />
        </div>
        <div
          style={{
            width: 90,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
          }}
        >
          <div style={{ fontWeight: 900 }}>{textValue[1]}</div>
          <div style={{ marginLeft: 20 }}>
            <button className="sprite_02 btn play"></button>
            <button className="sprite_02 btn favor"></button>
          </div>
        </div>
      </div>
    </TopRankingWrapper>
  )
}

export default memo(TopRankColHeader)
