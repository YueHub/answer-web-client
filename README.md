# answer-web-client

> answer's web client，answer 系统的 Web 前端

## 调试开发
* 下载 Answer 服务器端并按照文档配置好环境
    > [Answer](https://github.com/YueHub/Answer)
* 下载本项目源码
* 在本地搭建好 node 和 npm，具体请查询官网
* 下载安装依赖包：进入项目目录，执行以下命令
```bash
# 下载安装依赖包
npm install
```

* 启动服务器（调试开发服务器）：进入项目目录，执行以下命令
```bash
# serve with hot reload at localhost:8080
npm run dev
```

* 或者进入项目目录执行以下命令编译项目，将编译结果复制到 nginx 或 tomcat
``` bash
# build for production with minification
npm run build
```

* 访问 localhost:9999/index

## 运行效果
* 主页:

![image](./screenShots/主页.png)

* 搜索结果:

![image](./screenShots/搜索结果-1.png)

* 搜索结果:

![image](./screenShots/搜索结果-2.png)

## LICENSE
[MIT license](https://github.com/YueHub/answer-web-client/blob/master/LICENSE.md)