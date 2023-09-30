# 记录每节课的知识点

## 1.项目搭建

```
npm init vite
```

## 2.项目配置（CRA版）

### 2.1 craco

```
npm i @craco/craco -D
```

_创建 craco.config.js_

```
//配置路径
const path = require('path')
const resolve = dir => path.resolve(__dirname, dir)

module.exports = {
  webpack: {
    alias: {
      '@': resolve('src'),
      'components': resolve('src/components'),
    }
  }
}

```

### 2.2 添加 tsconfig.js

```
//compilerOptions下
"baseUrl": "./src",
"paths": {
  "@/*": [
    "*"
  ]
}
```

### 2.3 修改 package.json

```
"scripts": {
  "start": "craco start",
  "build": "craco build",
  "test": "craco test",
  "eject": "react-scripts eject"
},
```

## 2.项目配置（vite）

### 2.1 vite.config.js

```zsh
npm i @type/node
```

```ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { resolve } from 'path'
export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  plugins: [react()],
})
```

### 2.2 添加 tsconfig.js

```
//compilerOptions下
"baseUrl": "./src",
"paths": {
  "@/*": [
    "*"
  ]
}
```

## 3.配置语法规范

### 3.1 .editorconfig

**创建.editorconfig文件**

```
root = true

[*] #所有文件适用
indent_style = space #缩进风格（tab｜space）
indent_size = 2 #缩进大小
end_of_line = lf #换行符（lf｜crlf｜cr）
charset = utf-8 #编码
trim_trailing_whitespace = true #去除行首的任意空白字符
insert_final_newline = true #是否在文件末尾插入一个空行

[package.json]  #package.json文件适用
indent_style = space  #缩进风格（tab｜space）
indent_size = 2 #缩进大小

[*.md]  #所有md文件适用
trim_trailing_whitespace = false  #不去除行首的任意空白字符
```

### 3.2 配置prettier

```
npm i prettier -D
```

创建.prettierrc文件

```
{
  "endOfLine": "lf",
  "semi": true,
  "singleQuote": true,
  "jsxSingleQuote": true,
  "tabWidth": 2,
  "trailingComma": "none",
  "arrowParens": "avoid"
}
```

创建.prettierignore文件

```
**/.cache
**/*fixtures*
**/public
api-server/lib
client/**/trending.json
client/config/*.json
client/config/browser-scripts/*.json
client/static
curriculum-server/data/curriculum.json
curriculum/challenges/_meta/*/*
curriculum/challenges/**/*
docs/**/*.md
e2e/playwright/.auth
pnpm-lock.yaml
shared/config/*.js
shared/config/curriculum.json
shared/utils/get-lines.js
shared/utils/get-lines.test.js
shared/utils/is-audited.js
shared/utils/validate.js
shared/utils/validate.test.js
tools/ui-components/dist
tools/ui-components/types
web/.next

/build/*
/dist/*
.local
.output.js
/node_modules/**

**/*.svg
**/*.sh

/public/*
```

添加package.json

```
"scripts": {
  "start": "craco start",
  "build": "craco build",
  "test": "craco test",
  "eject": "react-scripts eject",
  "prettier": "prettier --write \"src/**/*.{js,jsx,ts,tsx,json,html,css,scss,md}\""
},
```

## 4 配置语法规范

### 4.1 vscode 设置 -》 editor default 选择prettier

### 4.2 eslint结合prettier

## 5 项目文件夹分配

> src
>
> > assets 静态文件</br>
> > base-ui UI组件</br>
> > components 组件</br>
> > hooks 钩子</br>
> > router 路由</br>
> > service 接口</br>
> > store 仓库</br>
> > utils 工具</br>
> > views 视图</br>

## 6 css样式配置

### 6.1

```
npm i reset-css
```

index.tsx配置

```js
import 'reset.css'
```

### 6.2

src-assets-css-{index.less,reset.less,common.less}

index.less

```less
@import './reset.less';
@import './common.less';
```

index.tsx

```js
import './assets/css/index.less'
```

### 6.3 less配置

**看 https://github.com/DocSpring/craco-less 文档**

```
npm i -D craco-less
```

## 7 路由配置

### 1. router

**新建index.jsx**

```jsx
import React from 'react'
import type { RouteObject } from 'react-router-dom'

import A from '@/views/A'
import App from '@/App'
import ErrorPage from '@/views/Error'

const routes: RouteObject[] = [
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/A',
    element: <A />,
    errorElement: <ErrorPage />,
  },
]

export default routes
```

### 2. App.tsx配置

```jsx
import { Suspense } from 'react'
import { Link, useRoutes } from 'react-router-dom'
import routes from './router'
function App() {
  return (
    <div className="App">
      <div className="nav">
        <Link to="...">...</Link>
      </div>
      <div className="content">
        <Suspense fallback="loading">
          <div className="router">{useRoutes(routes)}</div>
        </Suspense>
      </div>
    </div>
  )
}
export default App

```

## 8 组件类型约束

```jsx
interface IProps{
  ...
}
const components:React.FC<IProps>=()=>{
  ...
}
```

## 9 配置用户代码片段

```json
"React Component": {
		"prefix": "tsreact",
		"body": [
			"import React from 'react';",
			"import { ReactNode, FC, memo } from 'react'",
			"",
			"interface IProps {",
			"    children?: ReactNode;",
			"}",
			"const $1:FC<IProps> = (props) => {",
			"    return (",
			"        <div>",
			"            $1",
			"        </div>",
			"    );",
			"};",
			"",
			"export default memo($1);"
		],
		"description": "React Component"
	},
```

## 10 路由懒加载

```tsx
//router.tsx
import React, { lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'

import ErrorPage from '@/views/Error'
import App from '@/App'
const Discover = lazy(() => import('@/views/Discover'))
const Mine = lazy(() => import('@/views/Mine'))
const Focus = lazy(() => import('@/views/Focus'))
const Download = lazy(() => import('@/views/Download'))

const routes = [
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Discover />,
        errorElement: <ErrorPage />,
      },
      {
        path: 'discover',
        element: <Discover />,
        errorElement: <ErrorPage />,
      },
      {
        path: 'download',
        element: <Download />,
        errorElement: <ErrorPage />,
      },
      {
        path: 'focus',
        element: <Focus />,
        errorElement: <ErrorPage />,
      },
      {
        path: 'mine',
        element: <Mine />,
        errorElement: <ErrorPage />,
      },
    ],
  },
]

export default createBrowserRouter(routes)
```

```tsx
<Suspense fallback="">
  //传入组件fallback={<Spin size="large" className="globa_spin" />}
  <Dashboard />
</Suspense>
```

```tsx
//App.tsx路由导航
import React from 'react'
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
        <Outlet />
      </div>
    </div>
  )
}

export default App
```

## 11 discover页面子路由

## 12-14 Redux状态管理配置

### 12.1 安装

```zsh
npm i redux react-redux @reduxjs/toolkit --save
```

### 12.2 配置store

```tsx
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './count' // 从 src/store/count.ts 导入 reducer
const store = configureStore({
  reducer: {
    count: counterReducer, // 将 countReducer 作为 count slice 的 reducer
  },
})
// 从 store 本身推断 `RootState` 和 `AppDispatch` 类型
export type RootState = ReturnType<typeof store.getState>
// 推断类型：{posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export default store // 导出 store
```

### 12.3 配置count.ts

```tsx
import { createSlice, PayloadAction } from '@reduxjs/toolkit' //
import type { RootState } from '@/store'
// 定义 slice state 的类型
interface CounterState {
  value: number
}
// 使用该类型定义初始 state
const initialState: CounterState = {
  value: 0,
}
export const counterSlice = createSlice({
  name: 'counter',
  // `createSlice` 将从 `initialState` 参数推断 state 类型
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    // 使用 PayloadAction 类型声明 `action.payload` 的内容
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    },
  },
})
export const { increment, decrement, incrementByAmount } = counterSlice.actions
// selectors 等其他代码可以使用导入的 `RootState` 类型
export const selectCount = (state: RootState) => state.count.value
export default counterSlice.reducer
```

### 12.4 配置main.tsx

```tsx
<Provider store={store}>...</Provider>
```

### 12.5 配置组件

```tsx
import { useState, ReactNode, FC, memo } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  decrement,
  increment,
  incrementByAmount,
  selectCount,
} from '@/store/count' // 引入count模块
import styles from './index.module.scss'
interface IProps {
  children?: ReactNode
}
const recommend: FC<IProps> = () => {
  const count = useSelector(selectCount) // 获取count模块的值
  const dispatch = useDispatch() // 获取dispatch方法
  const [incrementAmount, setIncrementAmount] = useState('2') // 设置incrementAmount的值
  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(increment())} // 调用dispatch方法
        >
          +
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button
          className={styles.button}
          onClick={() =>
            dispatch(incrementByAmount(Number(incrementAmount) || 0))
          }
        >
          Add Amount
        </button>
      </div>
    </div>
  )
}
export default memo(recommend)
```

## 16 网络请求配置axios

```zsh
npm i axios
```

配置service
