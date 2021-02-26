(window.webpackJsonp=window.webpackJsonp||[]).push([[215],{578:function(t,a,s){"use strict";s.r(a);var n=s(40),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"浏览器渲染过程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#浏览器渲染过程"}},[t._v("#")]),t._v(" 浏览器渲染过程")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://img.smyhvae.com/20210114_2115.png",alt:""}})]),t._v(" "),s("ol",[s("li",[s("p",[t._v("浏览器解析 HTML，生成 DOM Tree（Parse HTML）。")])]),t._v(" "),s("li",[s("p",[t._v("浏览器解析 CSS，生成 CSSOM（CSS Object Model）Tree。")])]),t._v(" "),s("li",[s("p",[t._v("JavaScript 会通过 DOM API 和 CSSOM API 来操作 DOM Tree 和 CSS Rule Tree，浏览器将 DOM Tree 和 CSSOM Tree 合成渲染树（Render Tree）。")])]),t._v(" "),s("li",[s("p",[t._v("布局（Layout）：根据生成的 Render Tree，进行回流，以计算每个节点的几何信息（位置、大小、字体样式等等）。")])]),t._v(" "),s("li",[s("p",[t._v("绘制（Painting）：根据渲染树和回流得到的几何信息，得到每个节点的绝对像素。")])]),t._v(" "),s("li",[s("p",[t._v("展示（Display）：将像素发送给图形处理器（GPU），展示在页面上。")])])]),t._v(" "),s("h2",{attrs:{id:"页面渲染技术方案总览"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#页面渲染技术方案总览"}},[t._v("#")]),t._v(" 页面渲染技术方案总览")]),t._v(" "),s("p",[s("strong",[t._v("服务端渲染")]),t._v("：")]),t._v(" "),s("ul",[s("li",[t._v("后端同步渲染、同构直出、BigPipe。")])]),t._v(" "),s("p",[s("strong",[t._v("客户端渲染")]),t._v("：")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("JavaScript 渲染：静态化、前后端分离、单页面应用")])]),t._v(" "),s("li",[s("p",[t._v("Web App：React、Vue、PWA")])]),t._v(" "),s("li",[s("p",[t._v("Hybrid App：PhoneGap 、AppCan 等")])]),t._v(" "),s("li",[s("p",[t._v("跨平台开发：RN 、Flutter 、小程序等。")])]),t._v(" "),s("li",[s("p",[t._v("原生 App：iOS 、Android")])])]),t._v(" "),s("p",[t._v("建议：")]),t._v(" "),s("ul",[s("li",[t._v("依赖业务形式、依赖团队规模、依赖技术水平。")])]),t._v(" "),s("h2",{attrs:{id:"静态化技术方案"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#静态化技术方案"}},[t._v("#")]),t._v(" 静态化技术方案")]),t._v(" "),s("p",[t._v("静态化是使动态化的网站生成静态 HTML 页面以供用户更好访问的技术，一般分为纯动态化和伪动态化。")]),t._v(" "),s("p",[t._v("技术优势：")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("提高了页面访问速度，降低了服务器的负担，因为访问页面时不需要每次去访问数据库。")])]),t._v(" "),s("li",[s("p",[t._v("提高网站内容被搜索引擎搜索到的几率，因为搜索引擎更喜欢静态页面。")])]),t._v(" "),s("li",[s("p",[t._v("网站更稳定，如果后端程序、数据库出现问题，会直接影响网站的正常访问，而静态化页面有缓存，更不容易出现问题。")])])]),t._v(" "),s("p",[t._v("技术不足：")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("服务器存储占用问题，因为页面量级在增加，要占用大量硬盘空间。")])]),t._v(" "),s("li",[s("p",[t._v("静态页面中的链接更新问题会有死链或者错误链接问题。")])])]),t._v(" "),s("p",[t._v("技术实现：")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("跑定时任务，将已有的动态内容进行重定，生成静态的 HTML 页面。")])]),t._v(" "),s("li",[s("p",[t._v("利用模板技术，将模板引擎中模板字符替换为从数据库字段中取出来的值， 同时生成 HTML 文件。")])])]),t._v(" "),s("p",[t._v("协作方式：")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("前端统一写好带有交互的完整静态页面。")])]),t._v(" "),s("li",[s("p",[t._v("后端拆分出静态页面文件，并嵌套在后端模板文件中。")])])]),t._v(" "),s("p",[t._v("选型建议：后端研发人员充分，又需要考虑用户体验、服务器负载的业务。")]),t._v(" "),s("h2",{attrs:{id:"前后端分离技术与实现"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前后端分离技术与实现"}},[t._v("#")]),t._v(" 前后端分离技术与实现")]),t._v(" "),s("p",[t._v("前后端分离是指研发人员分离、业务代码分离、后端实现业务接口，前端渲染页面。")]),t._v(" "),s("p",[t._v("技术实现：")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("后端只负责功能接口实现，提供按照约定的数据格式并封装好的 API 接口。")])]),t._v(" "),s("li",[s("p",[t._v("前端负责业务具体实现，获取到 API 接口数据后，进行页面模板拼接和渲染，独立上线。")])])]),t._v(" "),s("p",[t._v("协作方式：")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("前端负责实现页面前端交互，根据后端 API 接口拼装前端模板。")])]),t._v(" "),s("li",[s("p",[t._v("后端专注于业务功能实现和 API 接口封装。")])])]),t._v(" "),s("p",[t._v("技术优势：")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("团队更加专注")])]),t._v(" "),s("li",[s("p",[t._v("提升了开发效率")])]),t._v(" "),s("li",[s("p",[t._v("增加代码可维护性")])])]),t._v(" "),s("p",[t._v("技术架构：")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("后端架构：Java、C++、PHP、 + Nginx，使用微服务（比如 Dubbo 等）等实现业务的解耦，所有的服务使用某种协议提供不同的服务（比如 JSF 等） 。")])]),t._v(" "),s("li",[s("p",[t._v("前端架构：使用 Angular、React、Vue 前端框架并部署页面至 CDN。")])]),t._v(" "),s("li",[s("p",[t._v("前端架构 2：使用 Angular、React、Vue 前端框架并部署在 Node Server。")])])]),t._v(" "),s("p",[t._v("技术不足：")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("因为前端需要负责一大部分业务逻辑实现，和服务端同步、静态化，需要前端人力非常多。")])]),t._v(" "),s("li",[s("p",[t._v("页面数据异步渲染，不利于 SEO，搜索引擎更喜欢纯静态页面。")])])]),t._v(" "),s("p",[t._v("选型建议：")]),t._v(" "),s("ul",[s("li",[t._v("这是大型互联网公司正在采用的开发模式，一句话，如果考虑用户体验，以及前端人力够用，就可以积极采用。")])]),t._v(" "),s("h2",{attrs:{id:"单页面应用技术方案"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#单页面应用技术方案"}},[t._v("#")]),t._v(" 单页面应用技术方案")]),t._v(" "),s("p",[t._v("单页应用（single-page application，缩写 SPA），通过动态重写当前页面，来与用户交互，而非传统的从服务器重新加载整个新页面。这种方法在使用过程中不需要重新加载页面，避免了页面之间切换打断用户体验，使应用程序更像一个桌面应用程序。")]),t._v(" "),s("p",[t._v("技术优点：")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("不错的加载速度：用户往往感觉页面加载非常快，因为一进入页面就能看到页面元素；")])]),t._v(" "),s("li",[s("p",[t._v("良好的交互体验：进行局部渲染，避免不必要的页面间跳转和重复渲染；")])]),t._v(" "),s("li",[s("p",[t._v("前后端职责分离：前端进行页面交互逻辑，后端负责业务逻辑；")])]),t._v(" "),s("li",[s("p",[t._v("减轻服务器负载：服务器只处理数据接口输出，不用考虑页面模板渲染和 HTML 展示。")])])]),t._v(" "),s("p",[t._v("技术缺点：")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("开发成本相对较高")])]),t._v(" "),s("li",[s("p",[t._v("首次页面加载时间过多")])]),t._v(" "),s("li",[s("p",[t._v("SEO 难度比较大")])])]),t._v(" "),s("p",[t._v("技术实现：")]),t._v(" "),s("ul",[s("li",[t._v("使用 React、Vue 框架可以很好的。")])]),t._v(" "),s("h2",{attrs:{id:"bigpipe-简介和工作模式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#bigpipe-简介和工作模式"}},[t._v("#")]),t._v(" BigPipe 简介和工作模式")]),t._v(" "),s("p",[t._v("BigPipe 通过将页面加载到称为 Pagelet 的小部件中，来加快页面渲染速度，并允许浏览器在 PHB 服务器呈现页面的同时，一直请求页面不同区块的结构，类似一个“流”传输管道。")]),t._v(" "),s("p",[s("strong",[t._v("技术实现")]),t._v("：")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("浏览器从服务器请求页面。")])]),t._v(" "),s("li",[s("p",[t._v("Server 迅速呈现一个包含 ")]),s("head",[t._v(" 标记的页面框架，以及一个包含空 div 元素的主体，这些元素充当 Pagelet 的容器。由于该页面尚未完成，因此与浏览器的 HTTP 连接保持打开状态。"),s("p")])]),t._v(" "),s("li",[s("p",[t._v("浏览器将开始下载 bigpipe.js 文件，然后它将开始呈现页面。")])]),t._v(" "),s("li",[s("p",[t._v("PHP 服务器进程仍在执行，并且一次构建每个 Pagelet 。Pagelet 完成后，其结果将在"),s("code",[t._v("<script> BigPipe.onArrive（…）</ script>")]),t._v(" 标记内发送到浏览器。")])]),t._v(" "),s("li",[s("p",[t._v("浏览器将收到的 html 代码注入正确的位置。如果小页面需要任何 CSS 资源，则也将下载这些 CSS 资源。")])]),t._v(" "),s("li",[s("p",[t._v("接收完所有的页面集之后，浏览器将开始加载那些页面集所需的所有外部 JavaScript 文件。")])]),t._v(" "),s("li",[s("p",[t._v("下载 JavaScript 后，浏览器将执行所有内联 JavaScript。")])])]),t._v(" "),s("h2",{attrs:{id:"同构直出技术方案"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#同构直出技术方案"}},[t._v("#")]),t._v(" 同构直出技术方案")]),t._v(" "),s("p",[t._v("一套代码既可以在服务端运行又可以在客户端运行，这就是同构（Universal）。")]),t._v(" "),s("p",[t._v("技术优势：")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("性能: 降低首屏渲染时间")])]),t._v(" "),s("li",[s("p",[t._v("SEO: 服务端渲染对搜索引擎的爬取有着天然的优势")])]),t._v(" "),s("li",[s("p",[t._v("兼容性: 有效规避客户端兼容性问题，比如白屏")])]),t._v(" "),s("li",[s("p",[t._v("代码同构：直接上线两个版本，利于灾备。")])])]),t._v(" "),s("p",[t._v("技术实现：")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("next.js：服务器端渲染 React 组件框架（参考查看：https://nextjs.org/）, React 采用 ReactDOMServer 调用 renderToString() 方法。")])]),t._v(" "),s("li",[s("p",[t._v("gatsbyjs：服务端 React 渲染框架（参考查看： https://www.gatsbyjs.org/）。")])]),t._v(" "),s("li",[s("p",[t._v("nuxt.js：服务器端渲染 Vue 组件框架（参考查看：https://nuxtjs.org/）, Vue 采用 vue-server-renderer 调用 renderToString() 方法。")])])]),t._v(" "),s("p",[t._v("协作方式：")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("后端专注于业务功能实现和 API 接口封装。")])]),t._v(" "),s("li",[s("p",[t._v("前端负责实现页面前端交互，根据后端 API 接口拼装前端模板，页面渲染，以及服务器维护。")])])]),t._v(" "),s("p",[t._v("选型建议：")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("前端要处理 Node server 的机器环境、代码部署、日志、容灾、监控等以往后端人员需要具备运维知识，前端人员的综合能力要求会比以往要高。")])]),t._v(" "),s("li",[s("p",[t._v("前端项目开发周期变长了，需要事先和产品、运营沟通排期问题。")])])]),t._v(" "),s("h2",{attrs:{id:"pwa-技术方案和实现思路"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pwa-技术方案和实现思路"}},[t._v("#")]),t._v(" PWA 技术方案和实现思路")]),t._v(" "),s("p",[t._v("Progressive Web App，简称 PWA，PWA 应用是使用特定技术和标准模式来开发的 Web 应用，这将同时赋予它们 Web 应用和原生应用的特性。")]),t._v(" "),s("p",[t._v("技术优势：")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("用户可以用手机屏幕启动应用，即使在离线状态或者弱网下，通过事先缓存的资源，也可正常加载运行当前应用，可以完全消除对网络的依赖，从而给用户非常可靠的体验。")])]),t._v(" "),s("li",[s("p",[t._v("因为预先缓存了资源，部分资源无须经过网络，即秒开页面。")])]),t._v(" "),s("li",[s("p",[t._v("和移动设备上的原生应用一样，具有沉浸式的用户体验。")])]),t._v(" "),s("li",[s("p",[t._v("可以给用户发送离线推送消息。")])])]),t._v(" "),s("p",[t._v("技术实现：")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("全站改造成 HTTPS，没有 HTTPS 就没有 Service Worker。")])]),t._v(" "),s("li",[s("p",[t._v("应用 Service Worker 技术提升性能，离线提供静态资源文件，提升首屏用户体验。")])]),t._v(" "),s("li",[s("p",[t._v("使用 App Manifest。")])]),t._v(" "),s("li",[s("p",[t._v("最后可以考虑离线消息推送等功能。")])])]),t._v(" "),s("p",[t._v("浏览器兼容性：")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("ServiceWorkerGlobalScope API：88%")])]),t._v(" "),s("li",[s("p",[t._v("Web App Manifest 83%")])])]),t._v(" "),s("h2",{attrs:{id:"页面加载策略优化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#页面加载策略优化"}},[t._v("#")]),t._v(" 页面加载策略优化")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("懒加载")])]),t._v(" "),s("li",[s("p",[t._v("预加载")])]),t._v(" "),s("li",[s("p",[t._v("预渲染")])]),t._v(" "),s("li",[s("p",[t._v("按需加载")])])]),t._v(" "),s("p",[t._v("下面具体展开讲讲。")]),t._v(" "),s("h3",{attrs:{id:"懒加载"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#懒加载"}},[t._v("#")]),t._v(" 懒加载")]),t._v(" "),s("p",[t._v("懒加载也叫延迟加载，指的是长网页中延迟加载特定元素（可以是图片，也可以是 JS/CSS 文件，当然也可以是 JavaScript 的特定函数和方法，以下简称“懒加载元素”）。")]),t._v(" "),s("p",[t._v("好处：可以减少当前屏无效资源的加载。")]),t._v(" "),s("p",[t._v("技术实现举例：把页面上“懒加载元素”src 属性设置为空字符，把真实的 src 属性写在 data-lazy 属性中，当页面滚动的时候监听 scroll 事件，如果“懒加载元素”在可视区域内，就把图片的 src 属性或者文件 URL 路径设置成 data-lazy 属性值。")]),t._v(" "),s("h3",{attrs:{id:"预加载"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#预加载"}},[t._v("#")]),t._v(" 预加载")]),t._v(" "),s("p",[t._v("可以使用预加载让浏览器来预先加载某些资源（比如图片、JS/CSS/模板），而这些资源是在将来才会被使用到的。简单来说，就是将所需资源提前加载到浏览器本地，这样后面在需要使用的时候就可以直接从浏览器缓存中取了，而不用再重新开始加载。")]),t._v(" "),s("p",[t._v("使用场景：如果你希望这个资源能尽快显示给用户，就可以使用预加载。")]),t._v(" "),s("p",[t._v("好处：减少用户后续加载资源等待的时间。")]),t._v(" "),s("p",[s("strong",[t._v("技术实现举例")]),t._v("：")]),t._v(" "),s("ol",[s("li",[t._v("HTML 标签：")])]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("img")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("https://xxx.jpg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token style-attr"}},[s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("style")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),s("span",{pre:!0,attrs:{class:"token style language-css"}},[s("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" none")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])]),s("p",[t._v("2、使用 Image 对象：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" image "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Image")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nimage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("src "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://xxx.jpg'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("3、使用 preload、prefetch 和 preconnect：")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("link")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("rel")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),t._v("“preload”")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),t._v("“src/style.css”")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("as")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),t._v("“style”")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("link")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("rel")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("prefetch"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("scr/image.png"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("link")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("rel")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("dns-prefetch"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("https://my.com"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("link")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("rel")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("preconnect"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("https://my.com"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("crossorigin")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])]),s("h3",{attrs:{id:"预渲染"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#预渲染"}},[t._v("#")]),t._v(" 预渲染")]),t._v(" "),s("p",[t._v("有一种预加载组件的方式就是提前渲染它。在页面中渲染组件，但是并不在页面中展示。也就是渲染完成后，先隐藏起来，用的时候再展示。")]),t._v(" "),s("p",[t._v("实现举例：")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("link")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("rel")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("prerender"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("https://my.com"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])]),s("h3",{attrs:{id:"按需加载"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#按需加载"}},[t._v("#")]),t._v(" 按需加载")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("常规按需加载（如 JS 原生、jQuery）")])]),t._v(" "),s("li",[s("p",[t._v("不同 App 按需加载（如 JS-SDK 脚本文件）")])]),t._v(" "),s("li",[s("p",[t._v("不同设备按需加载（如 PC 端和 HTML5 端样式文件）")])]),t._v(" "),s("li",[s("p",[t._v("不同分辨率按需加载（CSS Media Query）")])])]),t._v(" "),s("p",[t._v("React 异步加载举例：")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("componentA")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("location"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" callback")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    require"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ensure")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("callback")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'modules/componentA'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'componentA'")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("componentB")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("location"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" callback")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    require"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ensure")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("callback")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'modules/componentB'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'componentB'")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Router history"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("history"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Route path"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/"')]),t._v(" component"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("App"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Route path"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"componentA"')]),t._v(" getComponent"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("componentA"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("Route"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Route path"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"componentB"')]),t._v(" getComponent"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("componentB"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("Route"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("Route"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("Router"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("Vue 异步加载举例：")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Vue "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vue'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" App "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./App.vue'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" VueRouter "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vue-router'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nVue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("VueRouter"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("componentA")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("resolve")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'src/a.vue'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" resolve"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("componentB")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("resolve")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'src/b.vue'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" resolve"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" router "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("VueRouter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    routes"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("path"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"a”,name:"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("a”"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("component"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("componentA"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n     "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("path"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"b”,name:"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("b”"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("component"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("componentB"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Vue")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    el"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#app'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    router"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" router"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("render")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("h")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("h")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("App"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h2",{attrs:{id:"接口服务调用优化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#接口服务调用优化"}},[t._v("#")]),t._v(" 接口服务调用优化")]),t._v(" "),s("p",[t._v("1、接口合并：一个页面的众多业务接口和依赖的第三方接口，合并为一个部署在集群的接口统一调用，以减少页面接口请求数。")]),t._v(" "),s("p",[t._v("2、接口上 CDN：主要基于接口性能考虑，我们可以把"),s("strong",[t._v("不需要实时更新的接口同步至 CDN")]),t._v("，等此接口内容变更之后自动同步至 CDN 集群上。如果一定时间内未请求到数据，会用源站接口再次请求。")]),t._v(" "),s("p",[t._v("3、接口域名上 CDN：增强可用性、稳定性。")]),t._v(" "),s("p",[t._v("4、接口降级：核心接口进行降级用基础接口进行业务实现，比如千人千面的推荐接口，在大促时间点可以直接运营编辑的数据。另外如果接口无访问，建议使用兜底数据。")]),t._v(" "),s("p",[t._v("5、接口监控：监控接口成功率，不只是常说的 TP99，也包括弱网、超时、网络异常、网络切换等一段情况的监控情况。排查出来问题后，需要联合后端、运维、网络岗位人员一并解决。")]),t._v(" "),s("h2",{attrs:{id:"接口缓存策略优化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#接口缓存策略优化"}},[t._v("#")]),t._v(" 接口缓存策略优化")]),t._v(" "),s("p",[t._v("1、Ajax/fetch 缓存：前端请求时候带上 cache，依赖浏览器本身缓存机制。")]),t._v(" "),s("p",[t._v("2、本地缓存：异步接口数据优先使用本地 localStorage 中的缓存数据。")]),t._v(" "),s("p",[t._v("3、多次请求：接口数据本地无 localStorage 缓存数据，重新再次发出 ajax 请求。")])])}),[],!1,null,null,null);a.default=e.exports}}]);