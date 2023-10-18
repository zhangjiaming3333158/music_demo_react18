# React + TypeScript + Vite技术栈 网易云音乐PC项目实战

## 技术栈

### 前端

- `React18`：用于构建用户界面的 `MVVM` 框架
- `styled-components`：解决组件内容编写样式会影响全局样式导致冲突
- `axios`: 发送网络请求，请求拦截和响应拦截
- `react-router`：为单页面应用提供的路由系统
- `redux`：React 集中状态管理，在多个组件共享某些状态时非常方便
- `react-redux`：帮助我们链及`redux`、`react`的辅助工具
- `redux-thunk`: 在`redux`中进行异步请求
- `propType`: 校验`props`类型及默认值
- 项目中的优化: 函数式组件全部采用`memo`、路由懒加载、函数防抖

### 后端

- [NeteaseCloudMusicApi](https://binaryify.github.io/NeteaseCloudMusicApi/#/)：网易云音乐 `NodeJS` 版 `API`，提供音乐数据

### 工具

- vite：React 脚手架工具，快速初始化项目代码
- eslint：代码风格检查工具，帮助我们规范代码书写
- prettier：代码格式化工具，帮助我们统一代码风格

## 构建项目

- 克隆代码到本地之后，需要运行 NeteaseCloudMusicApi，来起一个音乐的 API 接口 (API接口start在 `localhost:3000` ).
- 如果需要在服务器上搭建的话就需要将 API 放到自己的服务器上面.

```powershell
# yarn dependencies
yarn install | npm install

# serve with hot reload at localhost:5173
yarn run dev  | npm run dev

# build for production with minification
yarn build  |  npm build
```
