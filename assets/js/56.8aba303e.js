(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{322:function(e,t,a){"use strict";a.r(t);var s=a(13),r=Object(s.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"目的"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#目的"}},[e._v("#")]),e._v(" 目的")]),e._v(" "),t("p",[e._v("本地搭建 "),t("code",[e._v("docker + jenkins")]),e._v(" 部署系统, 通过 "),t("code",[e._v("github")]),e._v(" 的 "),t("code",[e._v("webhook")]),e._v(" 实现代码自动化部署.")]),e._v(" "),t("h2",{attrs:{id:"准备工作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#准备工作"}},[e._v("#")]),e._v(" 准备工作")]),e._v(" "),t("h3",{attrs:{id:"安装docker"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装docker"}},[e._v("#")]),e._v(" 安装"),t("code",[e._v("docker")])]),e._v(" "),t("p",[e._v("mac: "),t("a",{attrs:{href:"https://docs.docker.com/docker-for-mac/install/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://docs.docker.com/docker-for-mac/install/"),t("OutboundLink")],1),t("br"),e._v("\nwindows: "),t("a",{attrs:{href:"https://docs.docker.com/docker-for-windows/install/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://docs.docker.com/docker-for-windows/install/"),t("OutboundLink")],1),t("br"),e._v("\nliunx:")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("// 推荐脚本安装方式\ncurl -fsSL get.docker.com -o get-docker.sh\nsudo sh get-docker.sh --mirror Aliyun\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br")])]),t("p",[e._v("控制台输入 "),t("code",[e._v("docker -v")]),e._v(", 显示版本则安装成功")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("Docker version 20.10.5, build xxxxx\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("h3",{attrs:{id:"安装-jenkins"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装-jenkins"}},[e._v("#")]),e._v(" 安装 "),t("code",[e._v("jenkins")])]),e._v(" "),t("p",[e._v("控制台输入"),t("code",[e._v("docker search jenkins")]),e._v(",选择安装"),t("code",[e._v("jenkinsci/blueocean")]),e._v("镜像,比较稳定.")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8c5d19c39ddc4890b015f647384f8dbc~tplv-k3u1fbpfcp-watermark.image",alt:"image.png"}}),e._v("\n控制台输入"),t("code",[e._v("docker pull jenkinsci/blueocean")]),e._v(",下载完成之后输入"),t("code",[e._v("docker images")]),e._v("看到如下信息即安装成功"),t("br"),e._v(" "),t("img",{attrs:{src:"https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0dc12980e3504e6ead7483bd9d2bc0c9~tplv-k3u1fbpfcp-watermark.image",alt:"image.png"}})]),e._v(" "),t("h2",{attrs:{id:"启动-jenkins"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#启动-jenkins"}},[e._v("#")]),e._v(" 启动 "),t("code",[e._v("jenkins")])]),e._v(" "),t("p",[e._v("控制台输入"),t("code",[e._v("docker run -d --name docker-jenkins -p 8008:8080 -p 50000:50000 jenkinsci/blueocean")]),e._v("启动容器,启动成功会返回该容器 id")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/195eba692c74448f8ee8c87dd9bffa0c~tplv-k3u1fbpfcp-watermark.image",alt:"image.png"}}),e._v("\n浏览器打开本地 8008 端口,正常情况下会出现解锁"),t("code",[e._v("jenkins")]),e._v("页面")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9ba192c81e004e3d8bba67882b94d4e1~tplv-k3u1fbpfcp-watermark.image",alt:"image.png"}})]),e._v(" "),t("h3",{attrs:{id:"获取初始化密码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#获取初始化密码"}},[e._v("#")]),e._v(" 获取初始化密码")]),e._v(" "),t("p",[e._v("下一步需要进入容器内拿到密码,以我刚刚启动的容器为例,控制台输入"),t("code",[e._v("docker exec -it docker-jenkins bash")]),e._v("进入容易内,然后输入"),t("code",[e._v("cat /var/jenkins_home/secrets/initialAdminPassword")])]),e._v(" "),t("p",[t("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8a4ba8a168824d21a412eb05f3a87499~tplv-k3u1fbpfcp-watermark.image",alt:"image.png"}})]),e._v(" "),t("p",[e._v("输入控制台返回的密码进入配置页面,这里选择安装推荐的插件,可能会有安装失败的插件,重试即可")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/55e0529fe5c747eba3d0f7fedb20a358~tplv-k3u1fbpfcp-watermark.image",alt:"image.png"}})]),e._v(" "),t("h3",{attrs:{id:"创建用户"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建用户"}},[e._v("#")]),e._v(" 创建用户")]),e._v(" "),t("p",[e._v("插件安装完成后,输入信息创建用户")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/eec1cdc0051f4fdfb6c3124ce7c8250b~tplv-k3u1fbpfcp-watermark.image",alt:"image.png"}}),e._v("\n实例配置不变继续点击下一步,此时需要重启动,重启完成登录刚刚创建的用户即可,接下来进行配置环节")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/525fa46f06d64aa1b3b2695462a6950c~tplv-k3u1fbpfcp-watermark.image",alt:"image.png"}})]),e._v(" "),t("h2",{attrs:{id:"配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[e._v("#")]),e._v(" 配置")]),e._v(" "),t("p",[e._v("下面对 github 以及 jenkins 进行配置")]),e._v(" "),t("h3",{attrs:{id:"在容器内生成-ssh-公钥"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#在容器内生成-ssh-公钥"}},[e._v("#")]),e._v(" 在容器内生成 ssh 公钥")]),e._v(" "),t("p",[e._v("进入"),t("code",[e._v("docker-jenkins")]),e._v("容器内,输入"),t("code",[e._v("ssh-keygen -t rsa -C test@test.com")]),e._v(",连续回车生成公钥")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a00769a8c3ce4d79aa00cfd369e93490~tplv-k3u1fbpfcp-watermark.image",alt:"2021-05-27 16.01.11.gif"}})]),e._v(" "),t("h3",{attrs:{id:"添加公钥-☞-github"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#添加公钥-☞-github"}},[e._v("#")]),e._v(" 添加公钥 ☞ github")]),e._v(" "),t("p",[e._v("右上角头像 -> settings -> 左侧"),t("code",[e._v("SSH and GPG keys")]),e._v(" -> New SSH key"),t("br"),e._v(" "),t("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/971eb16bf17d489680ebb5a29413d89b~tplv-k3u1fbpfcp-watermark.image",alt:"image.png"}}),e._v("\ntitle 随意, key 栏输入复制的公钥")]),e._v(" "),t("h3",{attrs:{id:"添加私钥-☞-jenkins"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#添加私钥-☞-jenkins"}},[e._v("#")]),e._v(" 添加私钥 ☞ jenkins")]),e._v(" "),t("p",[e._v("这一步需要注意,需要用刚刚生成的"),t("strong",[e._v("私钥")]),e._v("创建一个 "),t("code",[e._v("jenkins")]),e._v(" 凭证")]),e._v(" "),t("blockquote",[t("p",[e._v("注意: 私钥上下的开始以及的标记内容也要一起拷贝")])]),e._v(" "),t("p",[e._v("首页 -> 左侧系统管理 -> Manage Credentials -> 添加凭据")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/932de0a3eb1c4b7e960a0d0e2cec23e3~tplv-k3u1fbpfcp-watermark.image",alt:"2021-05-27 16.25.02.gif"}})]),e._v(" "),t("blockquote",[t("p",[e._v("注意: 类型选择 "),t("code",[e._v("SSH Username with private key")]),e._v(", 描述以及 Username 随意")])]),e._v(" "),t("h3",{attrs:{id:"创建任务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建任务"}},[e._v("#")]),e._v(" 创建任务")]),e._v(" "),t("p",[e._v("首页 -> 新建任务 -> 输入任务名称 -> 构建一个自由风格的软件项目 -> 确定"),t("br"),e._v("\n正常情况可以看到这个页面")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7870403280e24c7eaa2992ff7c78caf8~tplv-k3u1fbpfcp-watermark.image",alt:"image.png"}}),e._v("\n源码管理选择 Git -> 输入远程仓库地址 -> 选择之前添加的凭证 -> 分支指定 master -> 保存")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d6e397a6cd064b54bc946e2bcf4db4b6~tplv-k3u1fbpfcp-watermark.image",alt:"2021-05-27 16.37.30.gif"}})]),e._v(" "),t("blockquote",[t("p",[e._v("注意: 这一步输入远程仓库之后会测试连接,未选择凭证会报错误信息,选择凭证后,如果配置正确,短暂的时间之后错误信息会消失,代表远程仓库连接成功.若错误信息不消失,可能会构建项目失败,需检查配置是否正确.分支信息我这里指定的 master")])]),e._v(" "),t("h3",{attrs:{id:"尝试项目构建"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#尝试项目构建"}},[e._v("#")]),e._v(" 尝试项目构建")]),e._v(" "),t("p",[e._v("首页 -> 构建项目 -> 查看日志"),t("br"),e._v("\n如果配置正确,可以看到构建完成最终的状态为: Finished: SUCCESS")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/fdeedd479e8243089698148483c21b80~tplv-k3u1fbpfcp-watermark.image",alt:"2021-05-27 16.49.37.gif"}}),t("br"),e._v("\n进行到这一步实现了手动构建,接下来实现自动构建")]),e._v(" "),t("h3",{attrs:{id:"自动化配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#自动化配置"}},[e._v("#")]),e._v(" 自动化配置")]),e._v(" "),t("p",[e._v("完成自动化部署,主要是通过 "),t("code",[e._v("github-webhook")]),e._v(".简单来说就是"),t("code",[e._v("github-webhook")]),e._v("通知 "),t("code",[e._v("jenkins")]),e._v(" 要进行构建了."),t("br"),e._v("\n引用维基百科介绍")]),e._v(" "),t("blockquote",[t("p",[e._v("在web开发过程中的webhook，是一种通过通常的callback，去增加或者改变web page或者web app行为的方法。这些callback可以由第三方用户和开发者维持当前，修改，管理，而这些使用者与网站或者应用的原始开发没有关联。webhook这个词是由Jeff Lindsay在2007年在计算机科学hook项目第一次提出的。")])]),e._v(" "),t("p",[e._v('我的理解是类似于"发布订阅模式",'),t("code",[e._v("github-webhook")]),e._v(" 发布更新, "),t("code",[e._v("jenkins")]),e._v(" 监听,收到通知进行更新.无论发布或者监听,需要通过某种方式来确定彼此的身份,进行关联,因此需要对两端进行配置."),t("br"),e._v("\n右上角头像 -> settings -> 左侧 Developer settings -> Personal access tokens -> Generate new token"),t("br"),e._v("\nnote 随意填,勾选以下两项,点击 generate token")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6e72b08fdf454f3ca70a5924a89e3f1d~tplv-k3u1fbpfcp-watermark.image",alt:"image.png"}}),t("br"),e._v("\n注意拷贝生成的 token,离开就消失了")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/925b7a8c8fd245e4b5d41f048c799d11~tplv-k3u1fbpfcp-watermark.image",alt:"image.png"}})]),e._v(" "),t("h4",{attrs:{id:"配置-github"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置-github"}},[e._v("#")]),e._v(" 配置 github")]),e._v(" "),t("p",[e._v("配置仓库的 web-hook:"),t("br"),e._v("\n仓库首页 -> settings -> 左侧 webhooks -> add webhook")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ea055740e9554475b5561da29aeabd2c~tplv-k3u1fbpfcp-watermark.image",alt:"image.png"}})]),e._v(" "),t("blockquote",[t("p",[e._v("注意: 这里的 Payload URL只能使用公网域名,由于本次搭建的是本地 jenkins 环境,因此需要使用内网穿透工具,我用的是蜻蜓映射.")])]),e._v(" "),t("p",[t("code",[e._v("Payload URL")]),e._v(": 输入当前"),t("code",[e._v("jenkins")]),e._v("容器运行端口映射出去的公网域名 + "),t("strong",[e._v("/github-webhook/")]),t("br"),e._v(" "),t("code",[e._v("Content type")]),e._v(": 选择 "),t("code",[e._v("application/json")]),t("br"),e._v(" "),t("code",[e._v("Secret")]),e._v(": 填入刚刚生成的 token\n其余默认")]),e._v(" "),t("h4",{attrs:{id:"配置jenkins"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置jenkins"}},[e._v("#")]),e._v(" 配置"),t("code",[e._v("jenkins")])]),e._v(" "),t("p",[e._v("首先创建一个凭证:\n首页 -> 系统管理 -> Manage Credentials -> 添加凭据 -> 选择 "),t("code",[e._v("Secret text")])]),e._v(" "),t("p",[t("img",{attrs:{src:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d2e467d94541402785f10920537a3092~tplv-k3u1fbpfcp-watermark.image",alt:"2021-05-27 20.33.55.gif"}}),t("br"),e._v("\n然后对改凭证进行配置:"),t("br"),e._v("\n首页 -> 系统配置 -> GitHub -> 高级 -> 覆盖 Hook URL -> 输入 web-hook 地址 -> 选中创建的凭证")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3d3706cd683444ba82fce2399c413782~tplv-k3u1fbpfcp-watermark.image",alt:"2021-05-27 20.39.12.gif"}}),t("br"),e._v("\n完成配置后,代码仓库更新之后 "),t("code",[e._v("jenkins")]),e._v(" 会自动进行构建")]),e._v(" "),t("h4",{attrs:{id:"打包项目"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#打包项目"}},[e._v("#")]),e._v(" 打包项目")]),e._v(" "),t("p",[e._v("项目代码需要打包之后才能被正确使用,接下来在 "),t("code",[e._v("jenkins")]),e._v(" 端进行代码构建操作"),t("br"),e._v("\n首页 -> 系统管理 -> 插件管理 -> 可选插件 -> 选中 "),t("code",[e._v("NodeJS")]),e._v(" 以及 "),t("code",[e._v("Publish Over SSH")]),e._v(" -> 安装 -> 等待安装完成")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("NodeJS")]),e._v(": 代码运行环境")]),e._v(" "),t("li",[t("code",[e._v("Publish Over SSH")]),e._v(": 打包完成后发送到服务器\n"),t("img",{attrs:{src:"https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c40d27ad61e745779f934d701527e128~tplv-k3u1fbpfcp-watermark.image",alt:"2021-05-27 19.11.06.gif"}})])]),e._v(" "),t("h5",{attrs:{id:"拉取代码进行打包"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#拉取代码进行打包"}},[e._v("#")]),e._v(" 拉取代码进行打包")]),e._v(" "),t("p",[e._v("首先配置全局 "),t("code",[e._v("NodeJS")]),e._v(" 插件:"),t("br"),e._v("\n首页 -> 系统管理 -> 全局工具配置 -> NodeJS -> 新增"),t("br"),e._v(" "),t("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9027c9a07e3c41f9acaf9b0721b02c89~tplv-k3u1fbpfcp-watermark.image",alt:"2021-05-27 19.18.15.gif"}}),t("br"),e._v("\n构建项目中新增 "),t("code",[e._v("NodeJS")]),e._v(" 构建环境:"),t("br"),e._v("\n项目配置 -> 构建环境 -> 选择刚刚配置的 node 环境 -> 构建 -> 执行 shell -> 安装依赖 -> 打包 -> 压缩")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('echo "hello world"\nnpm install\nnpm run build\ncd dist\ntar zcvf dist.tar.gz ./*\n')])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br")])]),t("p",[t("img",{attrs:{src:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/40316ff0ffa54f2f88d6c1d917a7ea6d~tplv-k3u1fbpfcp-watermark.image",alt:"2021-05-28 10.29.59.gif"}})]),e._v(" "),t("p",[e._v("配置完之后手动点击构建,查看日志查看构建状态,操作成功可以进到 "),t("code",[e._v("docker-jenkins")]),e._v("容器内部检查 "),t("code",[e._v("dist.tar.gz")]),e._v(" 文件是否存在")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1761318c06314468a50bc72b1c0a31d4~tplv-k3u1fbpfcp-watermark.image",alt:"image.png"}})]),e._v(" "),t("h4",{attrs:{id:"发送到服务器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#发送到服务器"}},[e._v("#")]),e._v(" 发送到服务器")]),e._v(" "),t("h5",{attrs:{id:"全局配置-publish-over-ssh-插件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#全局配置-publish-over-ssh-插件"}},[e._v("#")]),e._v(" 全局配置 "),t("code",[e._v("publish over ssh")]),e._v(" 插件")]),e._v(" "),t("p",[e._v("首页 -> 系统管理 -> 系统配置 -> Publish over SSH -> SSH Servers"),t("br"),e._v(" "),t("img",{attrs:{src:"https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/058b22db52ff4d169e355b4e34473e53~tplv-k3u1fbpfcp-watermark.image",alt:"2021-05-28 15.19.21.gif"}}),e._v("\n这里我是用的是用户密码登录,也可使用 ssh 的方式连接服务器.输入完毕可以进行连接测试")]),e._v(" "),t("h5",{attrs:{id:"项目中配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#项目中配置"}},[e._v("#")]),e._v(" 项目中配置")]),e._v(" "),t("p",[e._v("项目配置 -> 构建后操作 -> SSH Server -> Transfers")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("Source files: 发送的文件(相对路径为当前项目路径)\nRemove prefix: 要去掉的前缀\nRemote directory: 远端服务器目录(不存在会报错)\nExec command: 发送成功之后要在服务器进行的脚本操作,如:解压,删掉多余的文件\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br")])]),t("p",[t("img",{attrs:{src:"https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/dc237c072469495188c4465395044c07~tplv-k3u1fbpfcp-watermark.image",alt:"2021-05-28 15.33.04.gif"}}),e._v("\n贴上脚本代码")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("cd 文件发送的目录\ntar zxvf dist.tar.gz\nrm -rf dist.tar.gz\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br")])]),t("p",[e._v("最后尝试推送代码,验证自动化构建部署~")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d508523c7f65467faf3e769a068ec3aa~tplv-k3u1fbpfcp-watermark.image",alt:"image.png"}}),e._v("\n正常情况下服务器上会收到发送的文件,到这一步本地全自动构建成功啦")])])}),[],!1,null,null,null);t.default=r.exports}}]);