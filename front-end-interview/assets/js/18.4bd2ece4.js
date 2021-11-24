(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{404:function(e,a,v){"use strict";v.r(a);var _=v(54),t=Object(_.a)({},(function(){var e=this,a=e.$createElement,v=e._self._c||a;return v("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[v("h2",{attrs:{id:"一、git"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#一、git"}},[e._v("#")]),e._v(" 一、Git")]),e._v(" "),v("h3",{attrs:{id:"_1-git-和-svn-的区别"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-git-和-svn-的区别"}},[e._v("#")]),e._v(" 1. git 和 svn 的区别")]),e._v(" "),v("ul",[v("li",[e._v("git 和 svn 最大的区别在于 git 是分布式的，而 svn 是集中式的。因此我们不能再离线的情况下使用 svn。如果服务器出现问题，就没有办法使用 svn 来提交代码。")]),e._v(" "),v("li",[e._v("svn 中的分支是整个版本库的复制的一份完整目录，而 git 的分支是指针指向某次提交，因此 git 的分支创建更加开销更小并且分支上的变化不会影响到其他人。svn 的分支变化会影响到所有的人。")]),e._v(" "),v("li",[e._v("svn 的指令相对于 git 来说要简单一些，比 git 更容易上手。")]),e._v(" "),v("li",[e._v("**GIT把内容按元数据方式存储，而SVN是按文件：**因为git目录是处于个人机器上的一个克隆版的版本库，它拥有中心版本库上所有的东西，例如标签，分支，版本记录等。")]),e._v(" "),v("li",[e._v("**GIT分支和SVN的分支不同：**svn会发生分支遗漏的情况，而git可以同一个工作目录下快速的在几个分支间切换，很容易发现未被合并的分支，简单而快捷的合并这些文件。")]),e._v(" "),v("li",[v("strong",[e._v("GIT没有一个全局的版本号，而SVN有")])]),e._v(" "),v("li",[e._v("**GIT的内容完整性要优于SVN：**GIT的内容存储使用的是SHA-1哈希算法。这能确保代码内容的完整性，确保在遇到磁盘故障和网络问题时降低对版本库的破坏")])]),e._v(" "),v("h3",{attrs:{id:"_2-经常使用的-git-命令"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-经常使用的-git-命令"}},[e._v("#")]),e._v(" 2. 经常使用的 git 命令？")]),e._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[e._v("git init                     // 新建 git 代码库\ngit add                      // 添加指定文件到暂存区\ngit rm                       // 删除工作区文件，并且将这次删除放入暂存区\ngit commit -m [message]      // 提交暂存区到仓库区\ngit branch                   // 列出所有分支\ngit checkout -b [branch]     // 新建一个分支，并切换到该分支\ngit status                   // 显示有变更文件的状态\n")])])]),v("h3",{attrs:{id:"_3-git-pull-和-git-fetch-的区别"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-git-pull-和-git-fetch-的区别"}},[e._v("#")]),e._v(" 3. git pull 和 git fetch 的区别")]),e._v(" "),v("ul",[v("li",[e._v("git fetch 只是将远程仓库的变化下载下来，并没有和本地分支合并。")]),e._v(" "),v("li",[e._v("git pull 会将远程仓库的变化下载下来，并和当前分支合并。")])]),e._v(" "),v("h3",{attrs:{id:"_4-git-rebase-和-git-merge-的区别"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-git-rebase-和-git-merge-的区别"}},[e._v("#")]),e._v(" 4. git rebase 和 git merge 的区别")]),e._v(" "),v("p",[e._v("git merge 和 git rebase 都是用于分支合并，关键"),v("strong",[e._v("在")]),e._v(" "),v("strong",[e._v("commit 记录的处理上不同")]),e._v("：")]),e._v(" "),v("ul",[v("li",[e._v("git merge 会新建一个新的 commit 对象，然后两个分支以前的 commit 记录都指向这个新 commit 记录。这种方法会保留之前每个分支的 commit 历史。")]),e._v(" "),v("li",[e._v("git rebase 会先找到两个分支的第一个共同的 commit 祖先记录，然后将提取当前分支这之后的所有 commit 记录，然后将这个 commit 记录添加到目标分支的最新提交后面。经过这个合并后，两个分支合并后的 commit 记录就变为了线性的记录了。")])]),e._v(" "),v("h2",{attrs:{id:"二、webpack"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#二、webpack"}},[e._v("#")]),e._v(" 二、Webpack")]),e._v(" "),v("h3",{attrs:{id:"_1-webpack与grunt、gulp的不同"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-webpack与grunt、gulp的不同"}},[e._v("#")]),e._v(" 1. "),v("strong",[e._v("webpack")]),e._v("与"),v("strong",[e._v("grunt")]),e._v("、"),v("strong",[e._v("gulp")]),e._v("的不同？")]),e._v(" "),v("p",[v("strong",[e._v("Grunt")]),e._v("**、Gulp是基于任务运⾏的⼯具**： 它们会⾃动执⾏指定的任务，就像流⽔线，把资源放上去然后通过不同插件进⾏加⼯，它们包含活跃的社区，丰富的插件，能⽅便的打造各种⼯作流。")]),e._v(" "),v("p",[v("strong",[e._v("Webpack是基于模块化打包的⼯具:")]),e._v(" ⾃动化处理模块，webpack把⼀切当成模块，当 webpack 处理应⽤程序时，它会递归地构建⼀个依赖关系图 (dependency graph)，其中包含应⽤程序需要的每个模块，然后将所有这些模块打包成⼀个或多个 bundle。")]),e._v(" "),v("p",[e._v("因此这是完全不同的两类⼯具,⽽现在主流的⽅式是⽤npm script代替Grunt、Gulp，npm script同样可以打造任务流。")]),e._v(" "),v("h3",{attrs:{id:"_2-webpack、rollup、parcel优劣"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-webpack、rollup、parcel优劣"}},[e._v("#")]),e._v(" 2. "),v("strong",[e._v("webpack")]),e._v("、"),v("strong",[e._v("rollup")]),e._v("、"),v("strong",[e._v("parcel")]),e._v("优劣？")]),e._v(" "),v("ul",[v("li",[e._v("webpack适⽤于⼤型复杂的前端站点构建: webpack有强⼤的loader和插件⽣态,打包后的⽂件实际上就是⼀个⽴即执⾏函数，这个⽴即执⾏函数接收⼀个参数，这个参数是模块对象，键为各个模块的路径，值为模块内容。⽴即执⾏函数内部则处理模块之间的引⽤，执⾏模块等,这种情况更适合⽂件依赖复杂的应⽤开发。")]),e._v(" "),v("li",[e._v("rollup适⽤于基础库的打包，如vue、d3等: Rollup 就是将各个模块打包进⼀个⽂件中，并且通过 Tree-shaking 来删除⽆⽤的代码,可以最⼤程度上降低代码体积,但是rollup没有webpack如此多的的如代码分割、按需加载等⾼级功能，其更聚焦于库的打包，因此更适合库的开发。")]),e._v(" "),v("li",[e._v("parcel适⽤于简单的实验性项⽬: 他可以满⾜低⻔槛的快速看到效果,但是⽣态差、报错信息不够全⾯都是他的硬伤，除了⼀些玩具项⽬或者实验项⽬不建议使⽤。")])]),e._v(" "),v("h3",{attrs:{id:"_3-有哪些常⻅的loader"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-有哪些常⻅的loader"}},[e._v("#")]),e._v(" 3. 有哪些常⻅的"),v("strong",[e._v("Loader")]),e._v("？")]),e._v(" "),v("ul",[v("li",[e._v("file-loader：把⽂件输出到⼀个⽂件夹中，在代码中通过相对 URL 去引⽤输出的⽂件")]),e._v(" "),v("li",[e._v("url-loader：和 file-loader 类似，但是能在⽂件很⼩的情况下以 base64 的⽅式把⽂件内容注⼊到代码中去")]),e._v(" "),v("li",[e._v("source-map-loader：加载额外的 Source Map ⽂件，以⽅便断点调试")]),e._v(" "),v("li",[e._v("image-loader：加载并且压缩图⽚⽂件")]),e._v(" "),v("li",[e._v("babel-loader：把 ES6 转换成 ES5")]),e._v(" "),v("li",[e._v("css-loader：加载 CSS，⽀持模块化、压缩、⽂件导⼊等特性")]),e._v(" "),v("li",[e._v("style-loader：把 CSS 代码注⼊到 JavaScript 中，通过 DOM 操作去加载 CSS。")]),e._v(" "),v("li",[e._v("eslint-loader：通过 ESLint 检查 JavaScript 代码")])]),e._v(" "),v("p",[v("strong",[e._v("注意："),v("strong",[e._v("在Webpack中，loader的执行顺序是")]),e._v("从右向左")]),e._v("执行的。因为webpack选择了"),v("strong",[e._v("compose这样的函数式编程方式")]),e._v("，这种方式的表达式执行是从右向左的。")]),e._v(" "),v("h3",{attrs:{id:"_4-有哪些常⻅的plugin"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-有哪些常⻅的plugin"}},[e._v("#")]),e._v(" 4. 有哪些常⻅的"),v("strong",[e._v("Plugin")]),e._v("？")]),e._v(" "),v("ul",[v("li",[e._v("define-plugin：定义环境变量")]),e._v(" "),v("li",[e._v("html-webpack-plugin：简化html⽂件创建")]),e._v(" "),v("li",[e._v("uglifyjs-webpack-plugin：通过 UglifyES 压缩 ES6 代码")]),e._v(" "),v("li",[e._v("webpack-parallel-uglify-plugin: 多核压缩，提⾼压缩速度")]),e._v(" "),v("li",[e._v("webpack-bundle-analyzer: 可视化webpack输出⽂件的体积")]),e._v(" "),v("li",[e._v("mini-css-extract-plugin: CSS提取到单独的⽂件中，⽀持按需加载")])]),e._v(" "),v("h3",{attrs:{id:"_5-bundle-chunk-module是什么"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_5-bundle-chunk-module是什么"}},[e._v("#")]),e._v(" 5. "),v("strong",[e._v("bundle")]),e._v("，"),v("strong",[e._v("chunk")]),e._v("，"),v("strong",[e._v("module")]),e._v("是什么？")]),e._v(" "),v("ul",[v("li",[e._v("bundle：是由webpack打包出来的⽂件；")]),e._v(" "),v("li",[e._v("chunk：代码块，⼀个chunk由多个模块组合⽽成，⽤于代码的合并和分割；")]),e._v(" "),v("li",[e._v("module：是开发中的单个模块，在webpack的世界，⼀切皆模块，⼀个模块对应⼀个⽂件，webpack会从配置的 entry中递归开始找出所有依赖的模块。")])]),e._v(" "),v("h3",{attrs:{id:"_6-loader和plugin的不同"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_6-loader和plugin的不同"}},[e._v("#")]),e._v(" 6. "),v("strong",[e._v("Loader")]),e._v("和"),v("strong",[e._v("Plugin")]),e._v("的不同？")]),e._v(" "),v("p",[e._v("不同的作⽤:")]),e._v(" "),v("ul",[v("li",[v("strong",[e._v("Loader")]),e._v('直译为"加载器"。Webpack将⼀切⽂件视为模块，但是webpack原⽣是只能解析js⽂件，如果想将其他⽂件也打包的话，就会⽤到 loader 。 所以Loader的作⽤是让webpack拥有了加载和解析⾮JavaScript⽂件的能⼒。')]),e._v(" "),v("li",[v("strong",[e._v("Plugin")]),e._v('直译为"插件"。Plugin可以扩展webpack的功能，让webpack具有更多的灵活性。 在 Webpack 运⾏的⽣命周期中会⼴播出许多事件，Plugin 可以监听这些事件，在合适的时机通过 Webpack 提供的 API 改变输出结果。')])]),e._v(" "),v("p",[v("strong",[e._v("不同的⽤法")]),e._v("**😗*")]),e._v(" "),v("ul",[v("li",[v("strong",[e._v("Loader")]),e._v("在 module.rules 中配置，也就是说他作为模块的解析规则⽽存在。 类型为数组，每⼀项都是⼀个 Object ，⾥⾯描述了对于什么类型的⽂件（ test ），使⽤什么加载( loader )和使⽤的参数（ options ）")]),e._v(" "),v("li",[v("strong",[e._v("Plugin")]),e._v("在 plugins 中单独配置。 类型为数组，每⼀项是⼀个 plugin 的实例，参数都通过构造函数传⼊。")])]),e._v(" "),v("h3",{attrs:{id:"_7-webpack的构建流程"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_7-webpack的构建流程"}},[e._v("#")]),e._v(" 7. "),v("strong",[e._v("webpack")]),e._v("的构建流程**?**")]),e._v(" "),v("p",[e._v("Webpack 的运⾏流程是⼀个串⾏的过程，从启动到结束会依次执⾏以下流程：")]),e._v(" "),v("ol",[v("li",[e._v("初始化参数：从配置⽂件和 Shell 语句中读取与合并参数，得出最终的参数；")]),e._v(" "),v("li",[e._v("开始编译：⽤上⼀步得到的参数初始化 Compiler 对象，加载所有配置的插件，执⾏对象的 run ⽅法开始执⾏编译；")]),e._v(" "),v("li",[e._v("确定⼊⼝：根据配置中的 entry 找出所有的⼊⼝⽂件；")]),e._v(" "),v("li",[e._v("编译模块：从⼊⼝⽂件出发，调⽤所有配置的 Loader 对模块进⾏翻译，再找出该模块依赖的模块，再递归本步骤直到所有⼊⼝依赖的⽂件都经过了本步骤的处理；")]),e._v(" "),v("li",[e._v("完成模块编译：在经过第4步使⽤ Loader 翻译完所有模块后，得到了每个模块被翻译后的最终内容以及它们之间的依赖关系；")]),e._v(" "),v("li",[e._v("输出资源：根据⼊⼝和模块之间的依赖关系，组装成⼀个个包含多个模块的 Chunk，再把每个 Chunk 转换成⼀个单独的⽂件加⼊到输出列表，这步是可以修改输出内容的最后机会；")]),e._v(" "),v("li",[e._v("输出完成：在确定好输出内容后，根据配置确定输出的路径和⽂件名，把⽂件内容写⼊到⽂件系统。")])]),e._v(" "),v("p",[e._v("在以上过程中，Webpack 会在特定的时间点⼴播出特定的事件，插件在监听到感兴趣的事件后会执⾏特定的逻辑，并且插件可以调⽤ Webpack 提供的 API 改变 Webpack 的运⾏结果。")]),e._v(" "),v("h3",{attrs:{id:"_8-编写loader或plugin的思路"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_8-编写loader或plugin的思路"}},[e._v("#")]),e._v(" 8. 编写"),v("strong",[e._v("loader")]),e._v("或"),v("strong",[e._v("plugin")]),e._v("的思路？")]),e._v(" "),v("p",[e._v('Loader像⼀个"翻译官"把读到的源⽂件内容转义成新的⽂件内容，并且每个Loader通过链式操作，将源⽂件⼀步步翻译成想要的样⼦。')]),e._v(" "),v("p",[e._v('编写Loader时要遵循单⼀原则，每个Loader只做⼀种"转义"⼯作。 每个Loader的拿到的是源⽂件内容（source），可以通过返回值的⽅式将处理后的内容输出，也可以调⽤ this.callback() ⽅法，将内容返回给webpack。 还可以通过this.async() ⽣成⼀个 callback 函数，再⽤这个callback将处理后的内容输出出去。 此外 webpack 还为开发者准备了开发loader的⼯具函数集——loader-utils 。')]),e._v(" "),v("p",[e._v("相对于Loader⽽⾔，Plugin的编写就灵活了许多。 webpack在运⾏的⽣命周期中会⼴播出许多事件，Plugin 可以监听这些事件，在合适的时机通过 Webpack 提供的 API 改变输出结果。")]),e._v(" "),v("h3",{attrs:{id:"_9-webpack的热更新是如何做到的-说明其原理"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_9-webpack的热更新是如何做到的-说明其原理"}},[e._v("#")]),e._v(" 9. "),v("strong",[e._v("webpack")]),e._v("的热更新是如何做到的？说明其原理？")]),e._v(" "),v("p",[e._v("webpack的热更新⼜称热替换（Hot Module Replacement），缩写为HMR。 这个机制可以做到不⽤刷新浏览器⽽将新变更的模块替换掉旧的模块。")]),e._v(" "),v("p",[e._v("原理：")]),e._v(" "),v("p",[v("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2021/png/1500604/1615910527011-339c57ce-22b2-4660-bcb5-93a7c6ec113b.png?x-oss-process=image%2Fresize%2Cw_1500",alt:"image.png"}})]),e._v(" "),v("p",[e._v("⾸先要知道server端和client端都做了处理⼯作：")]),e._v(" "),v("ol",[v("li",[e._v("第⼀步，在 webpack 的 watch 模式下，⽂件系统中某⼀个⽂件发⽣修改，webpack 监听到⽂件变化，根据配置⽂")])]),e._v(" "),v("p",[e._v("件对模块重新编译打包，并将打包后的代码通过简单的 JavaScript 对象保存在内存中。")]),e._v(" "),v("ol",[v("li",[e._v("第⼆步是 webpack-dev-server 和 webpack 之间的接⼝交互，⽽在这⼀步，主要是 dev-server 的中间件 webpack- dev-middleware 和 webpack 之间的交互，webpack-dev-middleware 调⽤ webpack 暴露的 API对代码变化进⾏监 控，并且告诉 webpack，将代码打包到内存中。")]),e._v(" "),v("li",[e._v("第三步是 webpack-dev-server 对⽂件变化的⼀个监控，这⼀步不同于第⼀步，并不是监控代码变化重新打包。当我们在配置⽂件中配置了devServer.watchContentBase 为 true 的时候，Server 会监听这些配置⽂件夹中静态⽂件的变化，变化后会通知浏览器端对应⽤进⾏ live reload。注意，这⼉是浏览器刷新，和 HMR 是两个概念。")]),e._v(" "),v("li",[e._v("第四步也是 webpack-dev-server 代码的⼯作，该步骤主要是通过 sockjs（webpack-dev-server 的依赖）在浏览器端和服务端之间建⽴⼀个 websocket ⻓连接，将 webpack 编译打包的各个阶段的状态信息告知浏览器端，同时也包括第三步中 Server 监听静态⽂件变化的信息。浏览器端根据这些 socket 消息进⾏不同的操作。当然服务端传递的最主要信息还是新模块的 hash 值，后⾯的步骤根据这⼀ hash 值来进⾏模块热替换。")]),e._v(" "),v("li",[e._v("webpack-dev-server/client 端并不能够请求更新的代码，也不会执⾏热更模块操作，⽽把这些⼯作⼜交回给了webpack，webpack/hot/dev-server 的⼯作就是根据 webpack-dev-server/client 传给它的信息以及 dev-server 的配置决定是刷新浏览器呢还是进⾏模块热更新。当然如果仅仅是刷新浏览器，也就没有后⾯那些步骤了。")]),e._v(" "),v("li",[e._v("HotModuleReplacement.runtime 是客户端 HMR 的中枢，它接收到上⼀步传递给他的新模块的 hash 值，它通过JsonpMainTemplate.runtime 向 server 端发送 Ajax 请求，服务端返回⼀个 json，该 json 包含了所有要更新的模块的 hash 值，获取到更新列表后，该模块再次通过 jsonp 请求，获取到最新的模块代码。这就是上图中 7、8、9 步骤。")]),e._v(" "),v("li",[e._v("⽽第 10 步是决定 HMR 成功与否的关键步骤，在该步骤中，HotModulePlugin 将会对新旧模块进⾏对⽐，决定是否更新模块，在决定更新模块后，检查模块之间的依赖关系，更新模块的同时更新模块间的依赖引⽤。")]),e._v(" "),v("li",[e._v("最后⼀步，当 HMR 失败后，回退到 live reload 操作，也就是进⾏浏览器刷新来获取最新打包代码。")])]),e._v(" "),v("h3",{attrs:{id:"_10-如何用webpack来优化前端性能"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_10-如何用webpack来优化前端性能"}},[e._v("#")]),e._v(" 10. 如何⽤"),v("strong",[e._v("webpack")]),e._v("来优化前端性能？")]),e._v(" "),v("p",[e._v("⽤webpack优化前端性能是指优化webpack的输出结果，让打包的最终结果在浏览器运⾏快速⾼效。")]),e._v(" "),v("ul",[v("li",[v("strong",[e._v("压缩代码")]),e._v("：删除多余的代码、注释、简化代码的写法等等⽅式。可以利⽤webpack的 UglifyJsPlugin 和 ParallelUglifyPlugin 来压缩JS⽂件， 利⽤ cssnano （css-loader?minimize）来压缩css")]),e._v(" "),v("li",[v("strong",[e._v("利⽤"),v("strong",[v("strong",[e._v("CDN")])]),e._v("加速")]),e._v(": 在构建过程中，将引⽤的静态资源路径修改为CDN上对应的路径。可以利⽤webpack对于 output 参数和各loader的 publicPath 参数来修改资源路径")]),e._v(" "),v("li",[v("strong",[e._v("Tree Shaking")]),e._v(": 将代码中永远不会⾛到的⽚段删除掉。可以通过在启动webpack时追加参数 --optimize-minimize 来实现")]),e._v(" "),v("li",[v("strong",[e._v("Code Splitting:")]),e._v(" 将代码按路由维度或者组件分块(chunk),这样做到按需加载,同时可以充分利⽤浏览器缓存")]),e._v(" "),v("li",[v("strong",[e._v("提取公共第三⽅库")]),e._v(": SplitChunksPlugin插件来进⾏公共模块抽取,利⽤浏览器缓存可以⻓期缓存这些⽆需频繁变动的公共代码")])]),e._v(" "),v("h3",{attrs:{id:"_11-如何提高webpack的打包速度"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_11-如何提高webpack的打包速度"}},[e._v("#")]),e._v(" 11. 如何提⾼"),v("strong",[e._v("webpack")]),e._v("的打包速度**?**")]),e._v(" "),v("ul",[v("li",[e._v("happypack: 利⽤进程并⾏编译loader,利⽤缓存来使得 rebuild 更快,遗憾的是作者表示已经不会继续开发此项⽬,类似的替代者是thread-loader")]),e._v(" "),v("li",[e._v("外部扩展(externals): 将不怎么需要更新的第三⽅库脱离webpack打包，不被打⼊bundle中，从⽽减少打包时间，⽐如jQuery⽤script标签引⼊")]),e._v(" "),v("li",[e._v("dll: 采⽤webpack的 DllPlugin 和 DllReferencePlugin 引⼊dll，让⼀些基本不会改动的代码先打包成静态资源，避免反复编译浪费时间")]),e._v(" "),v("li",[e._v("利⽤缓存: webpack.cache 、babel-loader.cacheDirectory、 HappyPack.cache 都可以利⽤缓存提⾼rebuild效率缩⼩⽂件搜索范围: ⽐如babel-loader插件,如果你的⽂件仅存在于src中,那么可以 include: path.resolve(__dirname,'src') ,当然绝⼤多数情况下这种操作的提升有限，除⾮不⼩⼼build了node_modules⽂件")])]),e._v(" "),v("h3",{attrs:{id:"_12-如何提高webpack的构建速度"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_12-如何提高webpack的构建速度"}},[e._v("#")]),e._v(" 12. 如何提⾼"),v("strong",[e._v("webpack")]),e._v("的构建速度？")]),e._v(" "),v("ol",[v("li",[e._v("多⼊⼝情况下，使⽤ CommonsChunkPlugin 来提取公共代码")]),e._v(" "),v("li",[e._v("通过 externals 配置来提取常⽤库")]),e._v(" "),v("li",[e._v("利⽤ DllPlugin 和 DllReferencePlugin 预编译资源模块 通过 DllPlugin 来对那些我们引⽤但是绝对不会修改的npm包来进⾏预编译，再通过 DllReferencePlugin 将预编译的模块加载进来。")]),e._v(" "),v("li",[e._v("使⽤ Happypack 实现多线程加速编译")]),e._v(" "),v("li",[e._v("使⽤ webpack-uglify-parallel 来提升 uglifyPlugin 的压缩速度。 原理上 webpack-uglify-parallel 采⽤了多核并⾏压缩来提升压缩速度")]),e._v(" "),v("li",[e._v("使⽤ Tree-shaking 和 Scope Hoisting 来剔除多余代码")])]),e._v(" "),v("h3",{attrs:{id:"_13-怎么配置单⻚应用-怎么配置多⻚应用"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_13-怎么配置单⻚应用-怎么配置多⻚应用"}},[e._v("#")]),e._v(" 13. 怎么配置单⻚应⽤？怎么配置多⻚应⽤？")]),e._v(" "),v("p",[e._v("单⻚应⽤可以理解为webpack的标准模式，直接在 entry 中指定单⻚应⽤的⼊⼝即可，这⾥不再赘述多⻚应⽤的话，可以使⽤webpack的 AutoWebPlugin 来完成简单⾃动化的构建，但是前提是项⽬的⽬录结构必须遵守他预设的规范。 多⻚应⽤中要注意的是：")]),e._v(" "),v("ul",[v("li",[e._v("每个⻚⾯都有公共的代码，可以将这些代码抽离出来，避免重复的加载。⽐如，每个⻚⾯都引⽤了同⼀套css样式表")]),e._v(" "),v("li",[e._v("随着业务的不断扩展，⻚⾯可能会不断的追加，所以⼀定要让⼊⼝的配置⾜够灵活，避免每次添加新⻚⾯还需要修改构建配置")])]),e._v(" "),v("h2",{attrs:{id:"三、其他"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#三、其他"}},[e._v("#")]),e._v(" 三、其他")]),e._v(" "),v("h3",{attrs:{id:"_1-babel的原理是什么"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-babel的原理是什么"}},[e._v("#")]),e._v(" "),v("strong",[e._v("1. Babel")]),e._v("的原理是什么**?**")]),e._v(" "),v("p",[e._v("babel 的转译过程也分为三个阶段，这三步具体是：")]),e._v(" "),v("ul",[v("li",[v("strong",[e._v("解析 Parse")]),e._v(": 将代码解析⽣成抽象语法树（AST），即词法分析与语法分析的过程；")]),e._v(" "),v("li",[v("strong",[e._v("转换 Transform")]),e._v(": 对于 AST 进⾏变换⼀系列的操作，babel 接受得到 AST 并通过 babel-traverse 对其进⾏遍历，在此过程中进⾏添加、更新及移除等操作；")]),e._v(" "),v("li",[v("strong",[e._v("⽣成 Generate")]),e._v(": 将变换后的 AST 再转换为 JS 代码, 使⽤到的模块是 babel-generator。")])]),e._v(" "),v("p",[v("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2021/png/1500604/1615908675152-69682ae3-d0b3-4552-a32e-39c2022b1db0.png?x-oss-process=image%2Fresize%2Cw_1500",alt:"image.png"}})])])}),[],!1,null,null,null);a.default=t.exports}}]);