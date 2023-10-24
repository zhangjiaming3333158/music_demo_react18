import { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { UserWrapper } from './style'
import { setLoginModal } from '@/store/modules/user'
import { useMusicDispatch, useMusicSelector, shallowEqualMusic } from '@/store'
import {
  PlayCircleFilled,
  MessageFilled,
  VideoCameraFilled,
  ClockCircleFilled,
} from '@ant-design/icons'
import { Button } from 'antd'
interface IProps {
  children?: ReactNode
}
const UserList = [
  {
    title: '免费观看高清视频',
  },
  {
    title: '多端同步播放记录',
  },
  {
    title: '发表弹幕/评论',
  },
  {
    title: '热门番剧影视看不停',
  },
]
const User: FC<IProps> = () => {
  const dispatch = useMusicDispatch()
  // 登录窗口
  function Login() {
    dispatch(setLoginModal())
  }
  // 是否登录
  const { isLogin } = useMusicSelector(
    (state: any) => ({
      isLogin: state.user.isLogin,
    }),
    shallowEqualMusic,
  )
  return (
    <div style={{ width: '100%', height: '100%' }}>
      {isLogin ? null : (
        <UserWrapper>
          <div className="title">
            登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机
          </div>
          <div className="content">
            {UserList.map((item) => {
              return (
                <div className="item" key={item.title}>
                  {item.title === '免费观看高清视频' && (
                    <VideoCameraFilled style={{ marginRight: 10 }} />
                  )}
                  {item.title === '多端同步播放记录' && (
                    <ClockCircleFilled style={{ marginRight: 10 }} />
                  )}
                  {item.title === '发表弹幕/评论' && (
                    <MessageFilled style={{ marginRight: 10 }} />
                  )}
                  {item.title === '热门番剧影视看不停' && (
                    <PlayCircleFilled style={{ marginRight: 10 }} />
                  )}
                  <div>{item.title}</div>
                </div>
              )
            })}
          </div>
          <div className="button">
            <Button type="primary" onClick={Login}>
              立即登录
            </Button>
          </div>
        </UserWrapper>
      )}
    </div>
  )
}

export default memo(User)
