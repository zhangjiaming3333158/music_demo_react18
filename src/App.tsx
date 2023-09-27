import { Suspense } from 'react'
import { Link, Outlet } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <div className="nav">
        <Link to="discover">发现音乐</Link>
        <Link to="mine">我的音乐</Link>
        <Link to="focus">关注</Link>
        <Link to="download">下载客户端</Link>
      </div>
      <div className="content">
        <Suspense fallback="loading">
          <Outlet />
        </Suspense>
      </div>
    </div>
  )
}

export default App
