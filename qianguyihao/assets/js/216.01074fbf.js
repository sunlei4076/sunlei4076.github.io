(window.webpackJsonp=window.webpackJsonp||[]).push([[216],{580:function(v,_,n){"use strict";n.r(_);var e=n(40),p=Object(e.a)({},(function(){var v=this,_=v.$createElement,n=v._self._c||_;return n("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[n("p",[v._v("博客园：一年经验初探阿里巴巴前端社招")]),v._v(" "),n("p",[v._v("文章来源："),n("a",{attrs:{href:"https://www.cnblogs.com/fsyz/p/8298921.html",target:"_blank",rel:"noopener noreferrer"}},[v._v("https://www.cnblogs.com/fsyz/p/8298921.html"),n("OutboundLink")],1)]),v._v(" "),n("p",[v._v("一般阿里社招都是招3-5年的P6+高级工程师，当初自己一年经验也没有想过有这个面试机会。")]),v._v(" "),n("p",[v._v("虽然没想着换工作，但是经常关注一些招聘网站的信息，某一天，在某boss上有个人找我，叫我发一下简历，我一看是阿里的某技术专家，虽然之前也有阿里的在某boss上给我要简历，但是我深知自己经验不足，然后给boss说我是16届的，只有一年经验，然后就没有然后了。这次我依然这么回复，但是这boss说，没关系，他喜欢基础好的，让我可以试一试，于是我也抱着试一试的心态发了简历。")]),v._v(" "),n("p",[v._v("简历发过去之后，boss就给我打了电话，让我简单的介绍一下自己，我就噼里啪啦说了一些，还说了一些题外话。然后boss就开始问我问题。")]),v._v(" "),n("p",[v._v("由于面了四轮，所以最开始的面试记忆有点模糊了，细细回想，又感觉记忆犹新。")]),v._v(" "),n("p",[v._v("1.电话初探\n1.说一下你了解CSS盒模型。\n我就说了一下IE的怪异盒模型和标注浏览器的盒模型，然后可以通过box-sizing属性控制两种盒模型的变换。")]),v._v(" "),n("p",[v._v("2.说一下box-sizing的应用场景。\n这个也不难，简单说了一两个应用场景，具体就不一一细说了。")]),v._v(" "),n("p",[v._v("3.说一下你了解的弹性FLEX布局.\n这个我也比较了解，各种概念和属性能想到的说了一大堆，也扯到了Grid布局，基本这个也没啥问题。")]),v._v(" "),n("p",[v._v("4.说一下一个未知宽高元素怎么上下左右垂直居中。\n说了一下flex弹性布局的实现，说了一下兼容性，扯到了postcss的一些东西，然后说了一下常规的兼容性比较好的实现。")]),v._v(" "),n("p",[v._v("5.说一下原型链，对象，构造函数之间的一些联系。\n这个我之前写过相关的文章，自己也有比较深入的理解，所以这个也不在话下，噼里啪啦说了一大堆，也不知道面试官听得咋样。")]),v._v(" "),n("p",[v._v("6.DOM事件的绑定的几种方式\n说了三种，然后说了一些冒泡，默认事件，以及DOM2，DOM3级的一些标准。")]),v._v(" "),n("p",[v._v("7.说一下你项目中用到的技术栈，以及觉得得意和出色的点，以及让你头疼的点，怎么解决的。\n这个因人而异，开放性问题，主要考察平时项目的一些积累吧，这个我回答感觉也比较ok。")]),v._v(" "),n("p",[v._v("8.有没有了解http2.0,websocket,https，说一下你的理解以及你所了解的特性。\n这个我看过一些文章，但是没有什么印象，扯了一些概念，但是回答的不是很深。")]),v._v(" "),n("p",[v._v("第一轮电话初探，大约面了50分钟，就记起来这么多，还有一些细节问题可能淡忘了，总体来说，面的都是以基础为主，然后boss说把我简历推荐给内部，进行正式的社招流程。")]),v._v(" "),n("p",[v._v("一轮技术面\n然后当天晚上一个女的面试官就给我打电话了，说八点半进行下一轮技术面试，没想到效率这么快，我都没怎么准备。\n这次就直接省略自我介绍了。")]),v._v(" "),n("p",[v._v("1.webpack的入口文件怎么配置，多个入口怎么分割啥的，我也没太听清楚。\n这个自己就说了一下自己的理解，以及自己用node写的多入口怎么配置，然后面试官说不是多入口配置，然后我又说了一下自己的理解，然后这题就过了。")]),v._v(" "),n("p",[v._v("2.我看到你的项目用到了Babel的一个插件：transform-runtime以及stage-2，你说一下他们的作用。\n这个我也还算比较了解，就说了一下ES的一些API，比如generator啥的默认不转换，只转换语法，需要这个来转换，然后说profill啥的，扯了一下stage-1，stage-2，stage-3，这个问题回答还算清楚。")]),v._v(" "),n("p",[v._v("3.我看到你的webpack配置用到webpack.optimize.UglifyJsPlugin这个插件，有没有觉得压缩速度很慢，有什么办法提升速度。\n这个我主要回答了一下，我之前也没怎么了解，一个想到是缓存原理，压缩只重新压缩改变的，还有就是减少冗余的代码，压缩只用于生产阶段，然后面试官问还有呢？我就说，还可以从硬件上提升，可以得到质的飞跃，比如换台I9处理器的电脑。。。。")]),v._v(" "),n("p",[v._v("4.简历上看见你了解http协议。说一下200和304的理解和区别\n这个噼里啪啦说了一堆，协商缓存和强制缓存的区别，流程，还有一些细节，提到了expires,Cache-Control,If-none-match,Etag,last-Modified的匹配和特征，这一块之前有过比较详细的了解，所以还是应答如流。")]),v._v(" "),n("p",[v._v("5.DOM事件中target和currentTarget的区别\n这个没答上来。。。")]),v._v(" "),n("p",[v._v("6.说一下你平时怎么解决跨域的。以及后续JSONP的原理和实现以及cors怎么设置。\n我就说了一下Jason和cors,然后问我JSONP的原理以及cors怎么设置，这一块自己也实践过，所以还是对答如流的。")]),v._v(" "),n("p",[v._v("7.说一下深拷贝的实现原理。\n这个也还好，就是考虑的细节不是很周全，先是说了一种JSON.stringify和JSON.parse的实现，以及这种实现的缺点，主要就是非标准JSOn格式无法拷贝以及兼容性问题，然后问了我有么有用过IE8的一个什么JSON框架，我也不记得是什么了，因为我压根没听过，然后说了一下尾递归实现深拷贝的原理，还问了我typeof null是啥，这个当然是Object。。。")]),v._v(" "),n("p",[v._v("8.说一下项目中觉得可以改进的地方以及做的很优秀的地方？\n这个也是因人而异，开放性问题，大致扯了一下自己的经历，也还OK。")]),v._v(" "),n("p",[v._v("最后问了有什么需要问的地方，面试到这里基本就结束了，大约面了一个多钟头，还是蛮累的。总体来说，回答的广度和深度以及细节都还算OK，觉得这轮面试基本没什么悬念。")]),v._v(" "),n("p",[v._v("二轮技术面\n过了几天，接到阿里另一个面试官的电话，上一轮面试通过了，这次是二轮技术面，说估计一个钟头。这次依然跳过自我介绍之类的，直奔主题。")]),v._v(" "),n("p",[v._v("1.有没有自己写过webpack的loader,他的原理以及啥的，记得也不太清楚。\n这个我就说了一下，然后loader配置啥的，也还ok。")]),v._v(" "),n("p",[v._v("2.有没有去研究webpack的一些原理和机制，怎么实现的。\n这个我简单说了一下我自己了解的，因为这一块我也没深入去研究，所以说的应该比较浅。")]),v._v(" "),n("p",[v._v("3.babel把ES6转成ES5或者ES3之类的原理是什么，有没有去研究。\n这一块我说了一下自己的思路，大致也还OK，我也没去深入研究怎么转换的，之前好像看过类似的文章，自己也只观察过转换之后的代码是啥样的，至于怎么转换的规则，真的没去深入观察。")]),v._v(" "),n("p",[v._v("4.git大型项目的团队合作，以及持续集成啥的。\n这里我就说了一下自己了解的git flow方面的东西，因为没有实战经验，所以我就选择性说明了这一块的不熟练，然后面试官也没细问。")]),v._v(" "),n("p",[v._v("5.什么是函数柯里化？以及说一下JS的API有哪些应用到了函数柯里化的实现？\n这个我就说了一下函数柯里化一些了解，以及在函数式编程的应用，最后说了一下JS中bind函数和数组的reduce方法用到了函数柯里化。")]),v._v(" "),n("p",[v._v("6.ES6的箭头函数this问题，以及拓展运算符。\n这一块主要是API和概念的问题，扯了一些规范以及严格模式下其他情况this只想问题。")]),v._v(" "),n("p",[v._v("7.JS模块化Commonjs,UMD,CMD规范的了解，以及ES6的模块化跟其他几种的区别，以及出现的意义。\n这个也是说了一下自己的理解和认知，自己对模块化历史以及一些规范都有所涉猎，这一块也还凑合。")]),v._v(" "),n("p",[v._v("8.说一下Vue实现双向数据绑定的原理，以及vue.js和react.js异同点，如果让你选框架，你怎么怎么权衡这两个框架，分析一下。\n主要是发布订阅的设计模式，还有就是ES5的Object.defineProperty的getter和setter机制，然后顺便扯了一下Angular的脏检测，以及alvon.js最先用到这种方式。然后扯了一下vue.js和react.js异同点，权衡框架选择，调研分析之类，噼里啪啦说了一大堆。")]),v._v(" "),n("p",[v._v("9.我看你也写博客，说一下草稿的交互细节以及实现原理。\n这一款就按照自己用过简书或者掘金，SG这类草稿的体验，详细说了一下，这个开放性问题，说到点基本就OK。")]),v._v(" "),n("p",[v._v("最后面试官问我有什么想问的吗，面试到这里基本就结束了，差不多面了一个小时，说过几天就会给答复，如果过了就会去阿里园区进行下一轮的技术面。")]),v._v(" "),n("p",[v._v("三轮技术面\n上一轮发挥感觉没前两轮发挥好，所以还是有点不自信的，没想到第三天后，就来电话了，通知我去阿里园区面试。")]),v._v(" "),n("p",[v._v("因为阿里西溪园区距离我不到十公里，我就踩着共享单车一点钟就出发了，天气比较热，飘在路上，百感交集，身边一辆法拉利轰鸣而过，又一辆兰博基尼呼啸而过，我心里一万头草泥马奔腾，MLGB，心里暗想，为神马开这车的人不是此刻看文章的你？")]),v._v(" "),n("p",[v._v("走到半路了，面试官给我打电话了，说我怎么还没到，说约定的是两点钟，我一下子就懵逼了，短信只有一个游客访问ID，并没有通知我具体时间，反正不管谁的疏忽，我肯定是要迟到了，于是我快马加鞭，踩着贼难骑的共享单车，背着微风，一路狂奔，到阿里园区已是汗流浃背，油光满面，气喘乎乎。。。")]),v._v(" "),n("p",[v._v("面试迟到了，印象肯定不好，加上满头大汗的形象也不太好，加上自己饥渴难耐，这面是估计要GG了，一进来就直奔主题，这次是两个大Boss面试我。")]),v._v(" "),n("p",[v._v("第一个面试官\n1.先自我介绍一下，说一下项目的技术栈，以及项目中遇到的一些问题啥的。\n这个问题就是个开场白，简要说明一下，问题都不大，这个面试官就是第一次打电话给我面试的那个boss，所以技术那块boss心里也有个底细，所以没再问技术问题。")]),v._v(" "),n("p",[v._v("2.一个业务场景，面对产品不断迭代，以及需求的变动该怎么应对，具体技术方案实现。\n具体业务场景，我就不一一描述，Boss在白板上画了一个大致的模块图，然后做了一些需求描述。\n然后需求一层一层的改变，然后往下挖，主要是考察应对产品能力，以及对代码的可维护性和可拓展性这些考察，开放性问题，我觉得还考察一些沟通交流方面的能力，因为有些地方面试官故意说得很含糊，反正就是一个综合能力，以及对产品的理解，中间谈到怎么实现，也问到了一些具体的点，记得问到的有一下几个。")]),v._v(" "),n("p",[v._v("① 怎么获取一个元素到视图顶部的距离。\n② getBoundingClientRect获取的top和offsetTop获取的top区别\n③事件委托")]),v._v(" "),n("p",[v._v("第二个面试官\n1.业务场景：比如说百度的一个服务不想让阿里使用，如果识别到是阿里的请求，然后跳转到404或者拒绝服务之类的？\n主要是考察http协议头Referer，然后怎么判断是阿里的ip或者啥的，我也不太清楚。")]),v._v(" "),n("p",[v._v("2.二分查找的时间复杂度怎么求，是多少\n。。。排序的还算清楚一点，查找真的不知所措，没回答上来，也没猜，意义不大，不会就是不会。")]),v._v(" "),n("p",[v._v("3.XSS是什么，攻击原理，怎么预防。\n这个很简单，跨站脚本攻击XSS(cross site scripting)，攻击类型主要有两种：反射型和存储型，简单说了一下如何防御：")]),v._v(" "),n("p",[v._v("①转义\n②DOM解析白名单\n③第三方库\n④CSP")]),v._v(" "),n("p",[v._v("自己对web安全这块系统学习过，前前后后大约了解了很多，对于XSS,CSRF,点击劫持，Cookie安全，HTTP窃听篡改，密码安全，SQL注入，社会工程学都有一定了解，所以这个自然也不在话下。")]),v._v(" "),n("p",[v._v("4.线性顺序存储结构和链式存储结构有什么区别？以及优缺点。\n我是类比JS数组和对象来回答的，反正还算凑合吧，自己都数据结构这块多少还是有些印象，所以入了前端，对数据结构和算法确实一直淡忘了。")]),v._v(" "),n("p",[v._v("5.分析一下移动端日历，PC端日历以及桌面日历的一些不同和需要注意的地方。\n这个我能想到的大致都说了一遍，不同的场景交互和细节以及功能都有所偏差，以及功能的侧重都可能不同。")]),v._v(" "),n("p",[v._v("6.白板写代码，用最简洁的代码实现数组去重。\n我写了两种实现方式：\nES6实现：")]),v._v(" "),n("p",[v._v("[...new Set([1,2,3,1,'a',1,'a'])]\nES5实现：")]),v._v(" "),n("p",[v._v("[1,2,3,1,'a',1,'a'].filter(function(ele,index,array){\nreturn index===array.indexOf(ele)\n})\n7.怎么实现草稿，多终端同步，以及冲突问题？\n这个回答的不算好，本来也想到类比git的处理方式，但是说的时候往另外一个方面说了，导致与面试官想要的结果不一样。")]),v._v(" "),n("p",[v._v("最后说目前的工作经验达不到P6水平，业务类稍弱，阿里现在社招只要P6的高级工程师，但是可以以第二梯队进去，就是以第三方签署就业协议，一年后可以转正，就是俗称的外包。多少还是有点遗憾，面了四轮面了个外包，最后放弃这份工作了。")]),v._v(" "),n("p",[v._v("最后，感谢boss一直以来的关照和器重。")]),v._v(" "),n("p",[v._v("学习前端的同学们，欢迎加入前端学习交流群")]),v._v(" "),n("p",[v._v("前端学习交流QQ群：461593224")])])}),[],!1,null,null,null);_.default=p.exports}}]);