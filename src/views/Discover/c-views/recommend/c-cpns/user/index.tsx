import { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { UserWrapper } from './style'
// import { Avatar, Button, IconButton, Skeleton } from '@mui/material'
import { GithubOutlined } from '@ant-design/icons'
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
  return (
    <UserWrapper>
      <div className="title">
        登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机
      </div>
      <div className="content">
        {UserList.map((item) => {
          return (
            <div className="item" key={item.title}>
              {/* <IconButton>{item.component}</IconButton> */}
              <GithubOutlined />
              <div>{item.title}</div>
            </div>
          )
        })}
      </div>
      <div className='button'>
        <Button type="primary">立即登录</Button>
      </div>

      {/* <Login loginDialog={loginDialog} handleClose={handleClose} /> */}
    </UserWrapper>
  )
}

export default memo(User)
