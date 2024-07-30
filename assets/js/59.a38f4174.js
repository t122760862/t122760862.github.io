(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{323:function(s,n,e){"use strict";e.r(n);var t=e(13),a=Object(t.a)({},(function(){var s=this,n=s._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"记录一次代码提交前的拦截操作"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#记录一次代码提交前的拦截操作"}},[s._v("#")]),s._v(" 记录一次代码提交前的拦截操作")]),s._v(" "),n("h2",{attrs:{id:"背景"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#背景"}},[s._v("#")]),s._v(" 背景")]),s._v(" "),n("p",[s._v("由于一次路由地址的改动,从而其他系统无法正确跳转,导致引发线上事故.故而希望在代码提交之前,判断如果修改了路由文件,则给出警告提示,这样也降低了新人接手项目时出错的概率.")]),s._v(" "),n("h2",{attrs:{id:"思路"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#思路"}},[s._v("#")]),s._v(" 思路")]),s._v(" "),n("p",[s._v("由于之前做过代码提交前的 "),n("code",[s._v("eslint")]),s._v(" 格式审查功能,因此首先想到的便是同样方式,在代码 "),n("code",[s._v("commit")]),s._v(" 之前执行脚本操作.")]),s._v(" "),n("h2",{attrs:{id:"尝试"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#尝试"}},[s._v("#")]),s._v(" 尝试")]),s._v(" "),n("p",[s._v("新增脚本文件 "),n("code",[s._v("test.sh")]),s._v(" :"),n("br"),s._v(" "),n("code",[s._v('echo "hello world";exit 1')])]),s._v(" "),n("h3",{attrs:{id:"_1-husky-lint-staged"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-husky-lint-staged"}},[s._v("#")]),s._v(" 1. "),n("code",[s._v("husky")]),s._v(" + "),n("code",[s._v("lint-staged")])]),s._v(" "),n("p",[n("a",{attrs:{href:"https://typicode.github.io/husky/#/",target:"_blank",rel:"noopener noreferrer"}},[s._v("husky"),n("OutboundLink")],1),s._v(": git hooks,提供 git 各种操作的钩子,如 "),n("code",[s._v("pre-commit")]),s._v(", "),n("code",[s._v("pre-merge-commit")]),s._v(", "),n("code",[s._v("pre-push")]),s._v(" 等."),n("br"),s._v(" "),n("a",{attrs:{href:"https://github.com/okonet/lint-staged#readme",target:"_blank",rel:"noopener noreferrer"}},[s._v("lint-staged"),n("OutboundLink")],1),s._v(": 一个在 git 暂存区运行 linters 的工具.因为只需要对改动的文件做拦截,因此引入."),n("br"),s._v("\n首先安装两个 package"),n("br"),s._v(" "),n("code",[s._v("npm i husky lint-staged -S -D")]),s._v("\n安装成功之后在 package.js 中配置:")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('  "husky": {\n    "pre-commit": "lint-staged"\n  },\n  "lint-staged": {\n    "*": ["./test.sh"]\n  }\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("p",[s._v("这里我的期望是在 "),n("code",[s._v("commit")]),s._v(" 的时候被 "),n("code",[s._v("pre-commit")]),s._v(" 钩子拦截然后执行 "),n("code",[s._v("lint-staged")]),s._v(" 配置好的脚本 "),n("code",[s._v("test.sh")]),s._v(". 正常的话控制台会输出 "),n("code",[s._v("hello world")]),s._v(" .")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("husky > pre-commit (node v14.15.1)\n✔ Preparing...\n✔ Hiding unstaged changes to partially staged files...\n❯ Running tasks...\n  ❯ Running tasks for *\n    ⠇ ./routerRule.sh\n◼ Applying modifications...\n◼ Restoring unstaged changes to partially staged files...\n◼ Cleaning up...\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br")])]),n("p",[s._v("然鹅事情没有我想的那么简单.简单分析: 正常触发 "),n("code",[s._v("pre-commit")]),s._v(" 钩子,但是在执行 "),n("code",[s._v("test.sh")]),s._v(" 脚本的时候卡住了."),n("br"),s._v("\n调整姿势,尝试在触发 "),n("code",[s._v("pre-commit")]),s._v(" 钩子后直接执行脚本,修改配置文件:")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('  "husky": {\n    "hooks": {\n      "pre-commit": "./routerRule.sh"\n    }\n  },\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("p",[s._v("尝试提交 "),n("code",[s._v("commit")]),s._v(" 控制台输出如下:")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("hello world\nnpm ERR! code ELIFECYCLE\nnpm ERR! errno 1\nnpm ERR! xxx xxx: `./test.sh`\nnpm ERR! Exit status 1\nnpm ERR! \nnpm ERR! Failed at the xxx test-router script.\n\nhusky > pre-commit hook failed (add --no-verify to bypass)\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br")])]),n("p",[s._v("可以看出,因为脚本非0 退出,因此成功拦截,符合预期,可以进行下一步."),n("br"),s._v("\n思考: 为什么在 "),n("code",[s._v("pre-commit")]),s._v(" 钩子里能正常执行却在 "),n("code",[s._v("lint-staged")]),s._v(" 内执行异常?这里我也不知道具体原因,猜测是因为 "),n("code",[s._v("lint-staged")]),s._v(" 环境问题导致.")]),s._v(" "),n("h3",{attrs:{id:"_2-去掉-lint-staged"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-去掉-lint-staged"}},[s._v("#")]),s._v(" 2. 去掉 "),n("code",[s._v("lint-staged")])]),s._v(" "),n("p",[s._v("由于在 "),n("code",[s._v("lint-staged")]),s._v(" 内执行脚本异常,因此尝试用代码来获取 "),n("code",[s._v("git")]),s._v(" 暂存区文件,以路由页面为例,代码为"),n("code",[s._v("STAGE_FILES=$(git diff --cached --name-only --diff-filter=ACM -- './src/router/')")]),n("br"),s._v(" "),n("code",[s._v("test.sh")]),s._v(" 脚本全部代码为:")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('STAGE_FILES=$(git diff --cached --name-only --diff-filter=ACM -- \'./src/router/\')\n\nif [ ! -n "${STAGE_FILES}" ]\n  then exit 0\nfi\n\necho "修改的路由文件:\\n${STAGE_FILES[0]}"\n\nSHAN=\'\\E[33;5m\'\n\nfor((i=0;i<=5;i++))\ndo\n  printf  "${SHAN} 注意: 修改路由地址可能会导致其他平台跳转失败(尽量考虑新增路由而不是修改)!!!\\n"\ndone\n\nread -n1 -p "确定修改路由文件? [y/n]" doit < /dev/tty\nif [ ${doit} == \'y\' ];then exit 0; else exit 1; fi\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br")])]),n("p",[s._v("修改路由文件提交测试:")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("husky > pre-commit (node v14.15.1)\n修改的路由文件:\nsrc/router/index.ts\nsrc/router/userInfo.ts\n 注意: 修改路由地址可能会导致其他平台跳转失败(尽量考虑新增路由而不是修改)!!!\n 注意: 修改路由地址可能会导致其他平台跳转失败(尽量考虑新增路由而不是修改)!!!\n 注意: 修改路由地址可能会导致其他平台跳转失败(尽量考虑新增路由而不是修改)!!!\n 注意: 修改路由地址可能会导致其他平台跳转失败(尽量考虑新增路由而不是修改)!!!\n 注意: 修改路由地址可能会导致其他平台跳转失败(尽量考虑新增路由而不是修改)!!!\n 注意: 修改路由地址可能会导致其他平台跳转失败(尽量考虑新增路由而不是修改)!!!\n确定修改路由文件? [y/n]\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br")])]),n("p",[s._v("按预期执行了脚本并提示修改,输入 y 提交成功!")]),s._v(" "),n("h2",{attrs:{id:"总结"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[s._v("#")]),s._v(" 总结")]),s._v(" "),n("ul",[n("li",[s._v("本文 "),n("code",[s._v("husky")]),s._v(" 测试版本为 4.x, 高版本可能无效")]),s._v(" "),n("li",[s._v("脚本非 0 输出即为失败")]),s._v(" "),n("li",[n("strong",[s._v("控制台没有出现用户输入交互,需要添加指令 "),n("code",[s._v("< /dev/tty")])])])])])}),[],!1,null,null,null);n.default=a.exports}}]);