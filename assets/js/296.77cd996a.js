(window.webpackJsonp=window.webpackJsonp||[]).push([[296],{852:function(t,s,a){"use strict";a.r(s);var n=a(10),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"一、pm2的主要特性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、pm2的主要特性"}},[t._v("#")]),t._v(" 一、PM2的主要特性")]),t._v(" "),a("ul",[a("li",[t._v("内建负载均衡（使用"),a("code",[t._v("Node cluster")]),t._v(" 集群模块）")]),t._v(" "),a("li",[t._v("后台运行")]),t._v(" "),a("li",[a("code",[t._v("0")]),t._v("秒停机重载，我理解大概意思是维护升级的时候不需要停机")]),t._v(" "),a("li",[t._v("具有"),a("code",[t._v("Ubuntu")]),t._v("和"),a("code",[t._v("CentOS")]),t._v(" 的启动脚本")]),t._v(" "),a("li",[t._v("停止不稳定的进程（避免无限循环）")]),t._v(" "),a("li",[t._v("控制台检测")]),t._v(" "),a("li",[t._v("提供 "),a("code",[t._v("HTTP API")])]),t._v(" "),a("li",[t._v("远程控制和实时的接口"),a("code",[t._v("API")]),t._v(" ( "),a("code",[t._v("Nodejs")]),t._v(" 模块,允许和"),a("code",[t._v("PM2")]),t._v("进程管理器交互 )")])]),t._v(" "),a("h2",{attrs:{id:"二、基本用法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、基本用法"}},[t._v("#")]),t._v(" 二、基本用法")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("$ npm install -g pm2")]),t._v(" 命令行全局安装"),a("code",[t._v("pm2")])]),t._v(" "),a("li",[a("code",[t._v("$ pm2 start app.js")]),t._v(" 启动"),a("code",[t._v("app")]),t._v("项目")]),t._v(" "),a("li",[a("code",[t._v("$ pm2 list")]),t._v(" 列出由"),a("code",[t._v("pm2")]),t._v("管理的所有进程信息，还会显示一个进程会被启动多少次，因为没处理的异常")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://poetries1.gitee.io/img-repo/2019/10/395.png",alt:""}})]),t._v(" "),a("ul",[a("li",[a("code",[t._v("pm2 describe id")]),t._v(" 查看启动程序的详细信息")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://poetries1.gitee.io/img-repo/2019/10/396.png",alt:""}})]),t._v(" "),a("ul",[a("li",[a("code",[t._v("$ pm2 monit")]),t._v(" 监视每个"),a("code",[t._v("node")]),t._v("进程的"),a("code",[t._v("CPU")]),t._v("和内存的使用情况")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://poetries1.gitee.io/img-repo/2019/10/397.png",alt:""}})]),t._v(" "),a("ul",[a("li",[a("code",[t._v("$ pm2 logs")]),t._v(" 显示所有进程日志")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://poetries1.gitee.io/img-repo/2019/10/398.png",alt:""}})]),t._v(" "),a("ul",[a("li",[t._v("强大API： "),a("code",[t._v("pm2 web")])])]),t._v(" "),a("blockquote",[a("p",[t._v("你想要监控所有被"),a("code",[t._v("PM2")]),t._v("管理的进程,而且同时还想监控运行这些进程的机器的状态")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://poetries1.gitee.io/img-repo/2019/10/399.png",alt:""}})]),t._v(" "),a("blockquote",[a("p",[t._v("启动程序的时候顺便在浏览器访问："),a("code",[t._v("http://localhost:9615")]),t._v("。部署的服务器的信息和程序的信息都显示出来了")])]),t._v(" "),a("p",[a("strong",[t._v("常用命令总结")])]),t._v(" "),a("ul",[a("li",[a("code",[t._v("$ pm2 stop all")]),t._v(" 停止所有进程")]),t._v(" "),a("li",[a("code",[t._v("$ pm2 restart all")]),t._v(" 重启所有进程")]),t._v(" "),a("li",[a("code",[t._v("$ pm2 reload all")]),t._v(" "),a("code",[t._v("0")]),t._v("秒停机重载进程 (用于 "),a("code",[t._v("NETWORKED")]),t._v(" 进程)")]),t._v(" "),a("li",[a("code",[t._v("$ pm2 stop")]),t._v("  停止指定的进程")]),t._v(" "),a("li",[a("code",[t._v("$ pm2 restart")]),t._v("  重启指定的进程")]),t._v(" "),a("li",[a("code",[t._v("$ pm2 startup")]),t._v(" 产生 "),a("code",[t._v("init")]),t._v(" 脚本 保持进程活着")]),t._v(" "),a("li",[a("code",[t._v("$ pm2 delete")]),t._v("  杀死指定的进程")]),t._v(" "),a("li",[a("code",[t._v("$ pm2 delete all")]),t._v(" 杀死全部进程")])]),t._v(" "),a("p",[a("strong",[t._v("运行进程的不同方式")])]),t._v(" "),a("ul",[a("li",[a("code",[t._v("$ pm2 start app.js -i max")]),t._v(" 根据有效"),a("code",[t._v("CPU")]),t._v("数目启动最大进程数目")]),t._v(" "),a("li",[a("code",[t._v("$ pm2 start app.js -i 3")]),t._v(" 启动"),a("code",[t._v("3")]),t._v("个进程")]),t._v(" "),a("li",[a("code",[t._v("$ pm2 start app.js -x")]),t._v("用"),a("code",[t._v("fork")]),t._v("模式启动 "),a("code",[t._v("app.js")]),t._v(" 而不是使用 "),a("code",[t._v("cluster")])]),t._v(" "),a("li",[a("code",[t._v("$ pm2 start app.js -x -- -a 23")]),t._v(" 用fork模式启动 "),a("code",[t._v("app.js")]),t._v(" 并且传递参数 ("),a("code",[t._v("-a 23")]),t._v(")")]),t._v(" "),a("li",[a("code",[t._v("$ pm2 start app.js --name serverone")]),t._v(" 启动一个进程并把它命名为 "),a("code",[t._v("serverone")])]),t._v(" "),a("li",[a("code",[t._v("$ pm2 stop serverone")]),t._v(" 停止 "),a("code",[t._v("serverone")]),t._v("进程")]),t._v(" "),a("li",[a("code",[t._v("$ pm2 start app.json")]),t._v("启动进程, 在 "),a("code",[t._v("app.json")]),t._v("里设置选项")]),t._v(" "),a("li",[a("code",[t._v("$ pm2 start app.js -i max -- -a 23")]),t._v(" 在"),a("code",[t._v("--")]),t._v("之后给 "),a("code",[t._v("app.js")]),t._v(" 传递参数")]),t._v(" "),a("li",[a("code",[t._v("$ pm2 start app.js -i max -e err.log -o out.log")]),t._v("启动 并 生成一个配置文件")])]),t._v(" "),a("blockquote",[a("p",[t._v("推荐使用"),a("code",[t._v("pm2 start npm --watch --name <taskname> -- run start")])])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://poetries1.gitee.io/img-repo/2019/10/400.png",alt:""}})]),t._v(" "),a("h2",{attrs:{id:"三、配置pm2启动文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、配置pm2启动文件"}},[t._v("#")]),t._v(" 三、配置pm2启动文件")]),t._v(" "),a("blockquote",[a("p",[t._v("部署参考 http://blog.poetries.top/2018/11/18/react-ssr-next-deploy/")])]),t._v(" "),a("blockquote",[a("p",[t._v("在项目根目录添加一个processes.json： 内容如下")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// apps:json结构，apps是一个数组，每一个数组成员就是对应一个pm2中运行的应用")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"apps"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"name"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"goods"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 启动任务名")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"cwd"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/srv/node-app/current"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 应用程序所在的目录")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"script"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"server.js"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 启动入口(应用程序的脚本路径)")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"log_date_format"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"YYYY-MM-DD HH:mm Z"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//日志格式化和monent一致")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"error_file"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/var/log/node-app/node-app.stderr.log"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//自定义应用程序的错误日志文件")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"out_file"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"log/node-app.stdout.log"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 日志输出路径 ")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"pid_file"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"pids/node-geo-api.pid"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//自定义应用程序的pid文件")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"instances"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//最小运行时间，这里设置的是60s即如果应用程序在60s内退出，pm2会认为程序异常退出，此时触发重启max_restarts设置数量")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"min_uptime"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"200s"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//设置应用程序异常退出重启的次数，默认15次（从0开始计数）")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"max_restarts"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"max_memory_restart"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1M"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 定时启动，解决重启能解决的问题")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"cron_restart"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1 0 * * *"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 是否启用监控模式，默认是false。如果设置成true，当应用程序变动时，pm2会自动重载。这里也可以设置你要监控的文件")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"watch"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"merge_logs"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 合并多个任务日志")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 应用程序的脚本类型，这里使用的shell，默认是nodejs")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"exec_interpreter"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"node"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 应用程序启动模式，这里设置的是cluster_mode（集群），默认是fork")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"exec_mode"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fork"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 启用/禁用应用程序崩溃或退出时自动重启")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"autorestart"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 启用/禁用vizion特性(版本控制)")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vizion"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("blockquote",[a("p",[t._v("可以通过"),a("code",[t._v("pm2 start processes.json")]),t._v("来启动。也可以把命令写在"),a("code",[t._v("package.json")]),t._v("里")])]),t._v(" "),a("p",[a("code",[t._v("npm run pm2")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"scripts"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"pm2"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"pm2 start processes.json"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"四、pm2部署"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四、pm2部署"}},[t._v("#")]),t._v(" 四、Pm2部署")]),t._v(" "),a("blockquote",[a("p",[t._v("在项目根目录添加"),a("code",[t._v("pm2")]),t._v("的部署脚本文件 "),a("code",[t._v("ecosystem.json")])])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"apps"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"name"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"goodsapp"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//pm2运行的应用名称")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"script"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"server.js"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//服务启动入口")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"env"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"COMON_VARIABLE"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"true"')]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"env_production"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"NODE_ENV"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"production"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//env")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"HOST"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"localhost"')]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"deploy"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 应用名称，可以自定义，最后这样使用 pm2 deploy ecosystem.json goodsapp")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"goodsapp"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"user"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"user_00"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 服务器用户名")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"host"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'192.68.1.201'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//服务器ip地址 可写多个")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"port"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"9999"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//服务器端口")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ref"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"origin/master"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//从指定分支拉取代码")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"repo"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://p.yesdat.com/diffusion/49/goodsh.git"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"path"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/data/poetry/testDir/prev-goods.yesdat.com"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//上传本地目录到服务器")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ssh_options"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"StrictHostKeyChecking=no"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"post-deploy"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"npm install --registry=https://registry.npm.taobao.org && npm install && pm2 startOrRestart ecosystem.json --env production"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//部署脚本")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"env"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n              "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"NODE_ENV"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"production"')]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[a("strong",[t._v("启动")])]),t._v(" "),a("ul",[a("li",[a("code",[t._v("pm2 deploy ecosystem.json goodsapp setup")]),t._v(" 初始化")]),t._v(" "),a("li",[a("code",[t._v("pm2 deploy ecosystem.json goodsapp")]),t._v(" 部署")])]),t._v(" "),a("h2",{attrs:{id:"参考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"http://pm2.keymetrics.io/docs/usage/quick-start/#installation",target:"_blank",rel:"noopener noreferrer"}},[t._v("PM2官方文档"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=e.exports}}]);