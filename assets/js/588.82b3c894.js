(window.webpackJsonp=window.webpackJsonp||[]).push([[588],{1115:function(o,e,v){"use strict";v.r(e);var i=v(10),_=Object(i.a)({},(function(){var o=this,e=o.$createElement,v=o._self._c||e;return v("ContentSlotsDistributor",{attrs:{"slot-key":o.$parent.slotKey}},[v("h2",{attrs:{id:"cookie-的工作过程"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#cookie-的工作过程"}},[o._v("#")]),o._v(" Cookie 的工作过程")]),o._v(" "),v("p",[o._v("当用户通过浏览器第一次访问服务器的时候，服务器肯定是不知道他的身份的。所以，就要创建一个独特的身份标识数据，格式是“key=value”，然后放进 Set-Cookie 字段里，随着响应报文一同发给浏览器。")]),o._v(" "),v("p",[o._v("浏览器收到响应报文，看到里面有 Set-Cookie，知道这是服务器给的身份标识，于是就保存起来，下次再请求的时候就自动把这个值放进 Cookie 字段里发给服务器。")]),o._v(" "),v("p",[o._v("因为第二次请求里面有了 Cookie 字段，服务器就知道这个用户不是新人，之前来过，就可以拿出 Cookie 里的值，识别出用户的身份，然后提供个性化的服务。")]),o._v(" "),v("p",[o._v("不过因为服务器的“记忆能力”实在是太差，一张小纸条经常不够用。所以，服务器有时会在响应头里添加多个 Set-Cookie，存储多个“key=value”。但浏览器这边发送时不需要用多个 Cookie 字段，只要在一行里用“;”隔开就行")]),o._v(" "),v("p",[v("img",{attrs:{src:"http://poetries1.gitee.io/img-repo/2019/12/24.png",alt:""}})]),o._v(" "),v("p",[o._v("从这张图中我们也能够看到，"),v("code",[o._v("Cookie")]),o._v(" 是由浏览器负责存储的，而不是操作系统。所以，它是“浏览器绑定”的，只能在本浏览器内生效。")]),o._v(" "),v("p",[o._v("如果你换个浏览器或者换台电脑，新的浏览器里没有服务器对应的 "),v("code",[o._v("Cookie")]),o._v("，就好像是脱掉了贴着纸条的衣服，“健忘”的服务器也就认不出来了，只能再走一遍 "),v("code",[o._v("Set-Cookie")]),o._v(" 流程")]),o._v(" "),v("h2",{attrs:{id:"cookie-的属性"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#cookie-的属性"}},[o._v("#")]),o._v(" Cookie 的属性")]),o._v(" "),v("p",[o._v("说到这里，你应该知道了，Cookie 就是服务器委托浏览器存储在客户端里的一些数据，而这些数据通常都会记录用户的关键识别信息。所以，就需要在“key=value”外再用一些手段来保护，防止外泄或窃取，这些手段就是 Cookie 的属性。")]),o._v(" "),v("p",[v("img",{attrs:{src:"http://poetries1.gitee.io/img-repo/2019/12/25.png",alt:""}})]),o._v(" "),v("p",[o._v("首先，我们应该设置 "),v("code",[o._v("Cookie")]),o._v(" 的生存周期，也就是它的有效期，让它只能在一段时间内可用，就像是食品的“保鲜期”，一旦超过这个期限浏览器就认为是 "),v("code",[o._v("Cookie")]),o._v(" 失效，在存储里删除，也不会发送给服务器。")]),o._v(" "),v("p",[o._v("Cookie 的有效期可以使用 Expires 和 Max-Age 两个属性来设置。")]),o._v(" "),v("p",[o._v("“Expires”俗称“过期时间”，用的是绝对时间点，可以理解为“截止日期”（deadline）。“Max-Age”用的是相对时间，单位是秒，浏览器用收到报文的时间点再加上 Max-Age，就可以得到失效的绝对时间。")]),o._v(" "),v("p",[o._v("Expires 和 Max-Age 可以同时出现，两者的失效时间可以一致，也可以不一致，但浏览器会优先采用 Max-Age 计算失效期。")]),o._v(" "),v("p",[o._v("比如在这个例子里，Expires 标记的过期时间是“GMT 2019 年 6 月 7 号 8 点 19 分”，而 Max-Age 则只有 10 秒，如果现在是 6 月 6 号零点，那么 Cookie 的实际有效期就是“6 月 6 号零点过 10 秒”。")]),o._v(" "),v("p",[o._v("其次，我们需要设置 Cookie 的作用域，让浏览器仅发送给特定的服务器和 URI，避免被其他网站盗用。")]),o._v(" "),v("p",[o._v("作用域的设置比较简单，“Domain”和“Path”指定了 Cookie 所属的域名和路径，浏览器在发送 Cookie 前会从 URI 中提取出 host 和 path 部分，对比 Cookie 的属性。如果不满足条件，就不会在请求头里发送 Cookie。")]),o._v(" "),v("p",[o._v("使用这两个属性可以为不同的域名和路径分别设置各自的 Cookie，比如“/19-1”用一个 Cookie，“/19-2”再用另外一个 Cookie，两者互不干扰。不过现实中为了省事，通常 Path 就用一个“/”或者直接省略，表示域名下的任意路径都允许使用 Cookie，让服务器自己去挑。")]),o._v(" "),v("p",[o._v("最后要考虑的就是Cookie 的安全性了，尽量不要让服务器以外的人看到。")]),o._v(" "),v("p",[o._v("写过前端的同学一定知道，在 JS 脚本里可以用 document.cookie 来读写 Cookie 数据，这就带来了安全隐患，有可能会导致“跨站脚本”（XSS）攻击窃取数据。")]),o._v(" "),v("p",[o._v("属性“HttpOnly”会告诉浏览器，此 Cookie 只能通过浏览器 HTTP 协议传输，禁止其他方式访问，浏览器的 JS 引擎就会禁用 document.cookie 等一切相关的 API，脚本攻击也就无从谈起了。")]),o._v(" "),v("p",[o._v("另一个属性“SameSite”可以防范“跨站请求伪造”（XSRF）攻击，设置成“SameSite=Strict”可以严格限定 Cookie 不能随着跳转链接跨站发送，而“SameSite=Lax”则略宽松一点，允许 GET/HEAD 等安全方法，但禁止 POST 跨站发送。")]),o._v(" "),v("p",[o._v("还有一个属性叫“Secure”，表示这个 Cookie 仅能用 HTTPS 协议加密传输，明文的 HTTP 协议会禁止发送。但 Cookie 本身不是加密的，浏览器里还是以明文的形式存在。")]),o._v(" "),v("p",[o._v("Chrome 开发者工具是查看 Cookie 的有力工具，在“Network-Cookies”里可以看到单个页面 Cookie 的各种属性，另一个“Application”面板里则能够方便地看到全站的所有 Cookie")]),o._v(" "),v("h2",{attrs:{id:"cookie-的应用"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#cookie-的应用"}},[o._v("#")]),o._v(" Cookie 的应用")]),o._v(" "),v("p",[o._v("现在回到我们最开始的话题，有了 Cookie，服务器就有了“记忆能力”，能够保存“状态”，那么应该如何使用 Cookie 呢？")]),o._v(" "),v("p",[o._v("Cookie 最基本的一个用途就是身份识别，保存用户的登录信息，实现会话事务。")]),o._v(" "),v("p",[o._v("比如，你用账号和密码登录某电商，登录成功后网站服务器就会发给浏览器一个 Cookie，内容大概是“name=yourid”，这样就成功地把身份标签贴在了你身上。")]),o._v(" "),v("p",[o._v("之后你在网站里随便访问哪件商品的页面，浏览器都会自动把身份 Cookie 发给服务器，所以服务器总会知道你的身份，一方面免去了重复登录的麻烦，另一方面也能够自动记录你的浏览记录和购物下单（在后台数据库或者也用 Cookie），实现了“状态保持”。")]),o._v(" "),v("p",[o._v("Cookie 的另一个常见用途是广告跟踪。")]),o._v(" "),v("p",[o._v("你上网的时候肯定看过很多的广告图片，这些图片背后都是广告商网站（例如 Google），它会“偷偷地”给你贴上 Cookie 小纸条，这样你上其他的网站，别的广告就能用 Cookie 读出你的身份，然后做行为分析，再推给你广告。")]),o._v(" "),v("p",[o._v("这种 Cookie 不是由访问的主站存储的，所以又叫“第三方 Cookie”（third-party cookie）。如果广告商势力很大，广告到处都是，那么就比较“恐怖”了，无论你走到哪里它都会通过 Cookie 认出你来，实现广告“精准打击”。")]),o._v(" "),v("p",[o._v("为了防止滥用 Cookie 搜集用户隐私，互联网组织相继提出了 DNT（Do Not Track）和 P3P（Platform for Privacy Preferences Project），但实际作用不大")]),o._v(" "),v("h2",{attrs:{id:"小结"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#小结"}},[o._v("#")]),o._v(" 小结")]),o._v(" "),v("ul",[v("li",[v("code",[o._v("Cookie")]),o._v(" 是服务器委托浏览器存储的一些数据，让服务器有了“记忆能力”；")]),o._v(" "),v("li",[o._v("响应报文使用 "),v("code",[o._v("Set-Cookie")]),o._v(" 字段发送“"),v("code",[o._v("key=value")]),o._v("”形式的 "),v("code",[o._v("Cookie")]),o._v(" 值；")]),o._v(" "),v("li",[o._v("请求报文里用 "),v("code",[o._v("Cookie")]),o._v(" 字段发送多个 "),v("code",[o._v("Cookie")]),o._v(" 值；")]),o._v(" "),v("li",[o._v("为了保护 "),v("code",[o._v("Cookie")]),o._v("，还要给它设置有效期、作用域等属性，常用的有 "),v("code",[o._v("Max-Age")]),o._v("、"),v("code",[o._v("Expires")]),o._v("、"),v("code",[o._v("Domain")]),o._v("、"),v("code",[o._v("HttpOnly")]),o._v(" 等；")]),o._v(" "),v("li",[v("code",[o._v("Cookie")]),o._v(" 最基本的用途是身份识别，实现有状态的会话事务")])]),o._v(" "),v("p",[v("img",{attrs:{src:"http://poetries1.gitee.io/img-repo/2019/12/104.png",alt:""}})])])}),[],!1,null,null,null);e.default=_.exports}}]);