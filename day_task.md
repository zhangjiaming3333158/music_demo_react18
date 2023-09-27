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
import { createBrowserRouter } from 'react-router-dom'

import A from '@/views/A'
import App from '@/App'
import ErrorPage from '@/views/Error'

const routes = [
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

export default createBrowserRouter(routes)
```

### 2. index.tsx配置

```jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'

import routes from './router'
import './assets/css/index.less'
import 'normalize.css'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>,
)

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

## 12 Redux状态管理配置

```zsh

```
