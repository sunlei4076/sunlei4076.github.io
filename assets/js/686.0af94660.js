(window.webpackJsonp=window.webpackJsonp||[]).push([[686],{1232:function(t,s,a){"use strict";a.r(s);var n=a(10),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"cluster模块概览"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cluster模块概览"}},[t._v("#")]),t._v(" cluster模块概览")]),t._v(" "),a("p",[t._v("node实例是单线程作业的。在服务端编程中，通常会创建多个node实例来处理客户端的请求，以此提升系统的吞吐率。对这样多个node实例，我们称之为cluster（集群）。")]),t._v(" "),a("p",[t._v("借助node的cluster模块，开发者可以在几乎不修改原有项目代码的前提下，获得集群服务带来的好处。")]),t._v(" "),a("p",[t._v("集群有以下两种常见的实现方案，而node自带的cluster模块，采用了方案二。")]),t._v(" "),a("h3",{attrs:{id:"方案一：多个node实例-多个端口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方案一：多个node实例-多个端口"}},[t._v("#")]),t._v(" 方案一：多个node实例+多个端口")]),t._v(" "),a("p",[t._v("集群内的node实例，各自监听不同的端口，再由反向代理实现请求到多个端口的分发。")]),t._v(" "),a("ul",[a("li",[t._v("优点：实现简单，各实例相对独立，这对服务稳定性有好处。")]),t._v(" "),a("li",[t._v("缺点：增加端口占用，进程之间通信比较麻烦。")])]),t._v(" "),a("h3",{attrs:{id:"方案二：主进程向子进程转发请求"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方案二：主进程向子进程转发请求"}},[t._v("#")]),t._v(" 方案二：主进程向子进程转发请求")]),t._v(" "),a("p",[t._v("集群内，创建一个主进程(master)，以及若干个子进程(worker)。由master监听客户端连接请求，并根据特定的策略，转发给worker。")]),t._v(" "),a("ul",[a("li",[t._v("优点：通常只占用一个端口，通信相对简单，转发策略更灵活。")]),t._v(" "),a("li",[t._v("缺点：实现相对复杂，对主进程的稳定性要求较高。")])]),t._v(" "),a("h2",{attrs:{id:"入门实例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#入门实例"}},[t._v("#")]),t._v(" 入门实例")]),t._v(" "),a("p",[t._v("在cluster模块中，主进程称为master，子进程称为worker。")]),t._v(" "),a("p",[t._v("例子如下，创建与CPU数目相同的服务端实例，来处理客户端请求。注意，它们监听的都是同样的端口。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// server.js")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" cluster "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'cluster'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" cpuNums "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'os'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cpus")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" http "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cluster"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("isMaster"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" cpuNums"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    cluster"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fork")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  http"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createServer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("req"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" res")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("end")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("response from worker ")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("process"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pid"),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("listen")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("Worker ")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("process"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pid"),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v(" started")]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("创建批处理脚本：./req.sh。")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token shebang important"}},[t._v("#!/bin/bash")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# req.sh")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("((")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("))")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("do")]),t._v("   \n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" http://127.0.0.1:3000\n  "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("done")]),t._v(" \n")])])]),a("p",[t._v("输出如下。可以看到，响应来自不同的进程。")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("response from worker "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("23735")]),t._v("\nresponse from worker "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("23731")]),t._v("\nresponse from worker "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("23729")]),t._v("\nresponse from worker "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("23730")]),t._v("\n")])])]),a("h2",{attrs:{id:"cluster模块实现原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cluster模块实现原理"}},[t._v("#")]),t._v(" cluster模块实现原理")]),t._v(" "),a("p",[t._v("了解cluster模块，主要搞清楚3个问题：")]),t._v(" "),a("ol",[a("li",[t._v("master、worker如何通信？")]),t._v(" "),a("li",[t._v("多个server实例，如何实现端口共享？")]),t._v(" "),a("li",[t._v("多个server实例，来自客户端的请求如何分发到多个worker？")])]),t._v(" "),a("p",[t._v("下面会结合示意图进行介绍，源码级别的介绍，可以参考 "),a("a",{attrs:{href:"https://github.com/chyingp/nodejs-learning-guide",target:"_blank",rel:"noopener noreferrer"}},[t._v("笔者的github"),a("OutboundLink")],1),t._v("。")]),t._v(" "),a("h2",{attrs:{id:"问题1：master、worker如何通信"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#问题1：master、worker如何通信"}},[t._v("#")]),t._v(" 问题1：master、worker如何通信")]),t._v(" "),a("p",[t._v("这个问题比较简单。master进程通过 cluster.fork() 来创建 worker进程。cluster.fork() 内部 是通过 child_process.fork() 来创建子进程。")]),t._v(" "),a("p",[t._v("也就是说：")]),t._v(" "),a("ol",[a("li",[t._v("master进程、worker进程是父、子进程的关系。")]),t._v(" "),a("li",[t._v("master进程、woker进程可以通过IPC通道进行通信。（重要）")])]),t._v(" "),a("h2",{attrs:{id:"问题2：如何实现端口共享"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#问题2：如何实现端口共享"}},[t._v("#")]),t._v(" 问题2：如何实现端口共享")]),t._v(" "),a("p",[t._v("在前面的例子中，多个woker中创建的server监听了同个端口3000。通常来说，多个进程监听同个端口，系统会报错。")]),t._v(" "),a("p",[t._v("为什么我们的例子没问题呢？")]),t._v(" "),a("p",[t._v("秘密在于，net模块中，对 listen() 方法进行了特殊处理。根据当前进程是master进程，还是worker进程：")]),t._v(" "),a("ol",[a("li",[t._v("master进程：在该端口上正常监听请求。（没做特殊处理）")]),t._v(" "),a("li",[t._v("worker进程：创建server实例。然后通过IPC通道，向master进程发送消息，让master进程也创建 server 实例，并在该端口上监听请求。当请求进来时，master进程将请求转发给worker进程的server实例。")])]),t._v(" "),a("p",[t._v("归纳起来，就是：master进程监听特定端口，并将客户请求转发给worker进程。")]),t._v(" "),a("p",[t._v("如下图所示：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://www.chyingp.com/wp-content/uploads/2018/04/4c1692183865cb201df83f8ee357d070.png",alt:""}})]),t._v(" "),a("h3",{attrs:{id:"问题3：如何将请求分发到多个worker"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#问题3：如何将请求分发到多个worker"}},[t._v("#")]),t._v(" 问题3：如何将请求分发到多个worker")]),t._v(" "),a("p",[t._v("每当worker进程创建server实例来监听请求，都会通过IPC通道，在master上进行注册。当客户端请求到达，master会负责将请求转发给对应的worker。")]),t._v(" "),a("p",[t._v("具体转发给哪个worker？这是由转发策略决定的。可以通过环境变量NODE_CLUSTER_SCHED_POLICY设置，也可以在cluster.setupMaster(options)时传入。")]),t._v(" "),a("p",[t._v("默认的转发策略是轮询（SCHED_RR）。")]),t._v(" "),a("p",[t._v("当有客户请求到达，master会轮询一遍worker列表，找到第一个空闲的worker，然后将该请求转发给该worker。")]),t._v(" "),a("h2",{attrs:{id:"master、worker内部通信小技巧"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#master、worker内部通信小技巧"}},[t._v("#")]),t._v(" master、worker内部通信小技巧")]),t._v(" "),a("p",[t._v("在开发过程中，我们会通过 process.on('message', fn) 来实现进程间通信。")]),t._v(" "),a("p",[t._v("前面提到，master进程、worker进程在server实例的创建过程中，也是通过IPC通道进行通信的。那会不会对我们的开发造成干扰呢？比如，收到一堆其实并不需要关心的消息？")]),t._v(" "),a("p",[t._v("答案肯定是不会？那么是怎么做到的呢？")]),t._v(" "),a("p",[t._v("当发送的消息包含"),a("code",[t._v("cmd")]),t._v("字段，且改字段以"),a("code",[t._v("NODE_")]),t._v("作为前缀，则该消息会被视为内部保留的消息，不会通过"),a("code",[t._v("message")]),t._v("事件抛出，但可以通过监听'internalMessage'捕获。")]),t._v(" "),a("p",[t._v("以worker进程通知master进程创建server实例为例子。worker伪代码如下：")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// woker进程")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" message "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  cmd"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'NODE_CLUSTER'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  act"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'queryServer'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nprocess"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("send")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("message"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("master伪代码如下：")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("worker"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("process"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("on")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'internalMessage'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" fn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"相关链接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#相关链接"}},[t._v("#")]),t._v(" 相关链接")]),t._v(" "),a("p",[t._v("官方文档："),a("a",{attrs:{href:"https://nodejs.org/api/cluster.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://nodejs.org/api/cluster.html"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("Node学习笔记："),a("a",{attrs:{href:"https://github.com/chyingp/nodejs-learning-guide",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/chyingp/nodejs-learning-guide"),a("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=r.exports}}]);