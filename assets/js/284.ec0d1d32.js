(window.webpackJsonp=window.webpackJsonp||[]).push([[284],{844:function(t,s,a){"use strict";a.r(s);var n=a(10),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("blockquote",[a("p",[t._v("Nginx 配置文件在线生成: https://nginxconfig.io/")])]),t._v(" "),a("h2",{attrs:{id:"一、语法规则"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、语法规则"}},[t._v("#")]),t._v(" 一、语法规则")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("location [=|~|~*|^~] /uri/ { … }\n")])])]),a("table",[a("thead",[a("tr",[a("th",[t._v("符号")]),t._v(" "),a("th",[t._v("含义")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("=")])]),t._v(" "),a("td",[t._v("开头表示精确匹配")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("^~")])]),t._v(" "),a("td",[t._v("开头表示 uri 以某个常规字符串开头，理解为匹配 "),a("code",[t._v("url")]),t._v(" 路径即可。"),a("code",[t._v("nginx")]),t._v(" 不对 "),a("code",[t._v("url")]),t._v(" 做编码，因此请求为"),a("code",[t._v("/static/20%/aa")]),t._v("，可以被规则"),a("code",[t._v("^~ /static/ /aa")]),t._v("匹配到（注意是空格）")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("~")])]),t._v(" "),a("td",[t._v("开头表示区分大小写的正则匹配")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("~")]),t._v("*")]),t._v(" "),a("td",[t._v("开头表示不区分大小写的正则匹配")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("/")])]),t._v(" "),a("td",[t._v("通用匹配，任何请求都会匹配到")])])])]),t._v(" "),a("blockquote",[a("p",[t._v("多个 "),a("code",[t._v("location")]),t._v(" 配置的情况下匹配顺序为")])]),t._v(" "),a("ul",[a("li",[t._v("首先匹配 "),a("code",[t._v("=")])]),t._v(" "),a("li",[t._v("其次匹配 "),a("code",[t._v("^~")])]),t._v(" "),a("li",[t._v("其次是按文件中顺序的正则匹配")]),t._v(" "),a("li",[t._v("最后是交给 / 通用匹配")]),t._v(" "),a("li",[t._v("当有匹配成功时候，停止匹配，按当前匹配规则处理请求")])]),t._v(" "),a("div",{staticClass:"language-nginx extra-class"},[a("pre",{pre:!0,attrs:{class:"language-nginx"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("location")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#规则A")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("location")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("login "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#规则B")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("location")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("^")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("static"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#规则C")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("location")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),t._v(" \\"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("gif"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("jpg"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("png"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("js"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("css"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("$ "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#规则D")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("location")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" \\"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("png$ "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#规则E")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("location")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#规则F")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("blockquote",[a("p",[t._v("那么产生的效果如下")])]),t._v(" "),a("ul",[a("li",[t._v("访问根目录 "),a("code",[t._v("/")]),t._v("， 比如 "),a("code",[t._v("http://localhost/")]),t._v(" 将匹配规则 "),a("code",[t._v("A")])]),t._v(" "),a("li",[t._v("访问 "),a("code",[t._v("http://localhost/login")]),t._v(" 将匹配规则 "),a("code",[t._v("B")]),t._v("，"),a("code",[t._v("http://localhost/register")]),t._v(" 则匹配规则 "),a("code",[t._v("F")])]),t._v(" "),a("li",[t._v("访问 "),a("code",[t._v("http://localhost/static/a.html")]),t._v(" 将匹配规则 "),a("code",[t._v("C")])]),t._v(" "),a("li",[t._v("访问 "),a("code",[t._v("http://localhost/a.gif")]),t._v(", "),a("code",[t._v("http://localhost/b.jpg")]),t._v(" 将匹配规则 "),a("code",[t._v("D")]),t._v("和规则 "),a("code",[t._v("E")]),t._v("，但是规则 "),a("code",[t._v("D")]),t._v(" 顺序优先，规则 "),a("code",[t._v("E")]),t._v("不起作用，而 "),a("code",[t._v("http://localhost/static/c.png")]),t._v("则优先匹配到规则 "),a("code",[t._v("C")])]),t._v(" "),a("li",[t._v("访问 "),a("code",[t._v("http://localhost/a.PNG")]),t._v(" 则匹配规则 "),a("code",[t._v("E")]),t._v("，而不会匹配规则 "),a("code",[t._v("D")]),t._v("，因为规则 "),a("code",[t._v("E")]),t._v(" 不区分大小写")])]),t._v(" "),a("blockquote",[a("p",[t._v("访问 "),a("code",[t._v("http://localhost/category/id/1111")]),t._v(" 则最终匹配到规则 "),a("code",[t._v("F")]),t._v("，因为以上规则都不匹配，这个时候应该是 "),a("code",[t._v("nginx")]),t._v(" 转发请求给后端应用服务器，比如 "),a("code",[t._v("FastCGI（PHP")]),t._v("），"),a("code",[t._v("tomcat（jsp）")]),t._v("，"),a("code",[t._v("nginx")]),t._v(" 作为反向代理服务器存在")])]),t._v(" "),a("h2",{attrs:{id:"二、运用场景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、运用场景"}},[t._v("#")]),t._v(" 二、运用场景")]),t._v(" "),a("blockquote",[a("p",[t._v("实际使用中，至少有三个匹配规则定义，如下")])]),t._v(" "),a("div",{staticClass:"language-nginx extra-class"},[a("pre",{pre:!0,attrs:{class:"language-nginx"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 直接匹配网站根，通过域名访问网站首页比较频繁，使用这个会加速处理，官网如是说。")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 这里是直接转发给后端应用服务器了，也可以是一个静态首页")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 第一个必选规则")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("location")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("proxy_pass")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("http")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("tomcat"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8080")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("index")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 第二个必选规则是处理静态文件请求，这是 nginx 作为 http 服务器的强项")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 有两种配置模式，目录匹配或后缀匹配，任选其一或搭配使用")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("location")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("^")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("static"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("root")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("webroot"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("static"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("location")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" \\"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("gif"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("jpg"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("jpeg"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("png"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("css"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("js"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("ico"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("$ "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("root")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("webroot"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("res"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 第三个规则就是通用规则，用来转发动态请求到后端应用服务器")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 非静态文件请求就默认是动态请求，自己根据实际把握")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 毕竟目前的一些框架的流行，带.php、.jsp后缀的情况很少了")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("location")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("proxy_pass")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("http")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("tomcat"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8080")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);