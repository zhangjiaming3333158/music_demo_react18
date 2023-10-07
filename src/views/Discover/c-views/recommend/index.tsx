import { ReactNode, FC, memo } from 'react'
import { useEffect } from 'react'
import { useMusicDispatch } from '@/store'
import { fetchBannerDataAction } from '@/store/modules/recommend'

import TopBanner from './c-cpns/top-banners'
interface IProps {
  children?: ReactNode
}
const recommend: FC<IProps> = () => {
  /** 发起action(获取数据) */
  const dispatch = useMusicDispatch()
  useEffect(() => {
    dispatch(fetchBannerDataAction())
  }, [])
  return (
    <div>
      <TopBanner />
    </div>
  )
}

export default memo(recommend)
