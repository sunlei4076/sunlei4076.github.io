(window.webpackJsonp=window.webpackJsonp||[]).push([[111],{474:function(t,a,s){"use strict";s.r(a);var n=s(40),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"常见概念"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常见概念"}},[t._v("#")]),t._v(" 常见概念")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("构造函数")])]),t._v(" "),s("li",[s("p",[t._v("构造函数-扩展")])]),t._v(" "),s("li",[s("p",[t._v("原型规则和示例")])]),t._v(" "),s("li",[s("p",[t._v("原型链")])]),t._v(" "),s("li",[s("p",[t._v("instanceof")])])]),t._v(" "),s("h2",{attrs:{id:"构造函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#构造函数"}},[t._v("#")]),t._v(" 构造函数")]),t._v(" "),s("p",[t._v("任何一个函数都可以被new，new了之后，就成了构造方法。")]),t._v(" "),s("p",[t._v("如下：")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Foo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" age")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("age "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" age"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//retrun this;   //默认有这一行。new一个构造函数，返回一个对象")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" fn1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Foo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'smyhvae'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("26")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" fn2 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Foo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vae'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("30")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//new 多个实例对象")]),t._v("\n")])])]),s("p",[t._v("与普通函数相比，构造函数有以下明显特点：")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("用new关键字调用。")])]),t._v(" "),s("li",[s("p",[t._v("不需要用return显式返回值的，默认会返回this，也就是新的实例对象。")])]),t._v(" "),s("li",[s("p",[t._v("建议函数名的首字母大写，与普通函数区分开。")])])]),t._v(" "),s("p",[t._v("参考链接：")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"http://www.cnblogs.com/SheilaSun/p/4398881.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("JavaScript中的普通函数与构造函数"),s("OutboundLink")],1)])]),t._v(" "),s("p",[t._v("当new之后，this会先变成一个空对象，然后通过"),s("code",[t._v("this.name = name")]),t._v("来赋值。")]),t._v(" "),s("h3",{attrs:{id:"构造函数的扩展"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#构造函数的扩展"}},[t._v("#")]),t._v(" 构造函数的扩展")]),t._v(" "),s("p",[s("img",{attrs:{src:"http://img.smyhvae.com/20180306_1633.png",alt:""}})]),t._v(" "),s("p",[t._v("上图中发现，数组、对象、函数也有构造函数，它们的构造函数是Array、Object、function。实际开发中，都推荐前面的书写方式。")]),t._v(" "),s("h2",{attrs:{id:"原型规则"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#原型规则"}},[t._v("#")]),t._v(" 原型规则")]),t._v(" "),s("p",[t._v("原型规则是学习原型链的基础。原型规则有五条，下面来讲解。")]),t._v(" "),s("h3",{attrs:{id:"规则1"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#规则1"}},[t._v("#")]),t._v(" 规则1")]),t._v(" "),s("p",[t._v("所有的引用类型（数组、对象、函数），都具有对象特性，都可以"),s("strong",[t._v("自由扩展属性")]),t._v("。null除外。")]),t._v(" "),s("p",[t._v("举例：")]),t._v(" "),s("p",[s("img",{attrs:{src:"http://img.smyhvae.com/20180306_1651.png",alt:""}})]),t._v(" "),s("h3",{attrs:{id:"规则2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#规则2"}},[t._v("#")]),t._v(" 规则2")]),t._v(" "),s("p",[t._v("所有的"),s("strong",[t._v("引用类型")]),t._v("（数组、对象、函数），都有一个"),s("code",[t._v("_proto_")]),t._v("属性，属性值是一个"),s("strong",[t._v("普通的对象")]),t._v("。"),s("code",[t._v("_proto_")]),t._v("的含义是隐式原型。")]),t._v(" "),s("p",[s("img",{attrs:{src:"http://img.smyhvae.com/20180306_1656.png",alt:""}})]),t._v(" "),s("p",[t._v("其实，规则2是规则1的特例，只不过，js语法帮我们自动加了 规则2。")]),t._v(" "),s("h3",{attrs:{id:"规则三"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#规则三"}},[t._v("#")]),t._v(" 规则三")]),t._v(" "),s("p",[t._v("所有的"),s("strong",[t._v("函数")]),t._v("（不包括数组、对象），都有一个"),s("code",[t._v("prototype")]),t._v("属性，属性值是一个"),s("strong",[t._v("普通的对象")]),t._v("。"),s("code",[t._v("prototype")]),t._v("的含义是"),s("strong",[t._v("显式原型")]),t._v("。（实例没有这个属性）")]),t._v(" "),s("p",[s("img",{attrs:{src:"http://img.smyhvae.com/20180306_1659.png",alt:""}})]),t._v(" "),s("h3",{attrs:{id:"规则四"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#规则四"}},[t._v("#")]),t._v(" 规则四")]),t._v(" "),s("p",[t._v("所有的"),s("strong",[t._v("引用类型")]),t._v("（数组、对象、函数），"),s("code",[t._v("_proto_")]),t._v("属性指向它的"),s("strong",[t._v("构造函数")]),t._v("的"),s("code",[t._v("prototype")]),t._v("值。")]),t._v(" "),s("p",[s("img",{attrs:{src:"http://img.smyhvae.com/20180306_1701.png",alt:""}})]),t._v(" "),s("p",[t._v("总结：以上四条，要先理解清楚，然后再来看下面的第五条。")]),t._v(" "),s("h3",{attrs:{id:"规则五"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#规则五"}},[t._v("#")]),t._v(" 规则五")]),t._v(" "),s("p",[t._v("当试图获取一个对象的某个属性时，如果这个对象本身没有这个属性，那么会去它的"),s("code",[t._v("_proto_")]),t._v("中寻找（即它的构造函数的"),s("code",[t._v("prototype")]),t._v("）。")]),t._v(" "),s("p",[s("code",[t._v("举例代码1")]),t._v("：")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//创建方法")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Foo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Foo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("alertName")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 既然 Foo.prototype 是普通的对象，那也允许给它添加额外的属性 alertName")]),t._v("\n        console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" fn "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Foo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'smyhvae'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    fn"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("printName")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//测试")]),t._v("\n    fn"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("printName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//输出结果：smyhvae")]),t._v("\n    fn"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("alertName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//输出结果：smyhvae")]),t._v("\n")])])]),s("p",[t._v("上方代码中，虽然 alertName 不是 fn 自身的属性，但是会从它的构造函数的"),s("code",[t._v("prototype")]),t._v("里面找。")]),t._v(" "),s("p",[t._v("**扩展：**遍历循环对象自身的属性")]),t._v(" "),s("p",[t._v("我们知道，"),s("code",[t._v("for in")]),t._v("循环可以遍历对象。针对上面的那个fn对象，它自身有两个属性："),s("code",[t._v("name")]),t._v("、"),s("code",[t._v("printName")]),t._v("，另外从原型中找到了第三个属性"),s("code",[t._v("alertName")]),t._v("。现在，如果我们对fn进行遍历，能遍历到两个属性还是三个属性呢？")]),t._v(" "),s("p",[t._v("答案：两个。因为，"),s("strong",[t._v("高级浏览器中已经在 "),s("code",[t._v("for in")]),t._v("循环中屏蔽了来自原型的属性。但是，为了保证代码的健壮性，我们最好自己加上判断")]),t._v("，手动将第三个属性屏蔽掉：")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" item "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" fn"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fn"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("hasOwnProperty")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("item"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("item"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),s("h2",{attrs:{id:"原型链"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#原型链"}},[t._v("#")]),t._v(" 原型链")]),t._v(" "),s("p",[t._v("还是拿上面的"),s("code",[t._v("举例代码1")]),t._v("举例，如果此时在最后面加一行代码：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("\tfn.toString();   //去 fn._proto_._proto_ 中查找 toString()方法\n")])])]),s("p",[t._v("上面的代码中，fn直接调用了 toString()方法，这是因为它通过"),s("strong",[t._v("原型链")]),t._v("，去"),s("code",[t._v("_proto_")]),t._v("的"),s("code",[t._v("_proto_")]),t._v("里找到了"),s("code",[t._v("Object")]),t._v("，而"),s("code",[t._v("Object")]),t._v("是由"),s("code",[t._v("toString()")]),t._v("方法的。")]),t._v(" "),s("h3",{attrs:{id:"instanceof"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#instanceof"}},[t._v("#")]),t._v(" instanceof")]),t._v(" "),s("p",[t._v("格式：")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("\t对象 "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("instanceof")]),t._v(" 构造函数\n")])])]),s("p",[s("code",[t._v("instanceof")]),t._v("的作用：用于判断"),s("strong",[t._v("引用类型")]),t._v("属于哪个"),s("strong",[t._v("构造函数")]),t._v("。")]),t._v(" "),s("p",[t._v("例1：判断一个变量是否为数组： "),s("code",[t._v("变量 instanceof Array")])]),t._v(" "),s("p",[t._v("例2：")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Person")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//p---\x3ePerson.prototype---\x3eObject.prototype---\x3enull")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" p "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Person")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//构造函数的**原型**是否在 p 对象的原型链上！")]),t._v("\n    console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("p "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("instanceof")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Person")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("例3：")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("\tfn "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("instanceof")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Foo")]),t._v("\n")])])]),s("p",[t._v("上面这句话，判断逻辑是："),s("strong",[t._v("fn 的"),s("code",[t._v("_proto_")]),t._v("一层一层往上找，看能否对应到 Foo.prototype")]),t._v("。")]),t._v(" "),s("p",[t._v("原型链如下：（重要）")]),t._v(" "),s("p",[s("img",{attrs:{src:"http://img.smyhvae.com/20180306_1853.png",alt:""}})]),t._v(" "),s("p",[t._v("注意，Object这个构造方法的显式原型是null，这是一个特例。")]),t._v(" "),s("p",[t._v("issues 101补充：通过原型链查找时，如果你找的是一个属性的话，则返回 undefined，如果你找的是一个方法，则报错。")]),t._v(" "),s("h2",{attrs:{id:"常见题目"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常见题目"}},[t._v("#")]),t._v(" 常见题目")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("如何准确判断一个变量是数组类型")])]),t._v(" "),s("li",[s("p",[t._v("写一个原型链继承的例子")])]),t._v(" "),s("li",[s("p",[t._v("描述 new 一个对象的过程")])]),t._v(" "),s("li",[s("p",[t._v("zepto(或其他框架)源码中如何使用原型链")])])]),t._v(" "),s("p",[t._v("下面分别讲解。")]),t._v(" "),s("h3",{attrs:{id:"题目一-如何准确判断一个变量是数组类型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#题目一-如何准确判断一个变量是数组类型"}},[t._v("#")]),t._v(" 题目一：如何准确判断一个变量是数组类型")]),t._v(" "),s("p",[t._v("答案：")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" arr1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("arr1 "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("instanceof")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Array")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//打印结果：true。")]),t._v("\n    console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" arr1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("           "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//打印结果：object。提示：typeof 方法无法判断是否为数组")]),t._v("\n")])])]),s("p",[t._v("上方代码表明，只能通过 instanceof 来判断是否为数组。而 typeof 的打印结果是 object。")]),t._v(" "),s("h3",{attrs:{id:"题目二-写一个原型链继承的例子"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#题目二-写一个原型链继承的例子"}},[t._v("#")]),t._v(" 题目二：写一个原型链继承的例子")]),t._v(" "),s("p",[t._v("来看个基础的代码：")]),t._v(" "),s("p",[s("img",{attrs:{src:"http://img.smyhvae.com/20180306_1931.png",alt:""}})]),t._v(" "),s("p",[t._v("上面这个例子是基础，但是，在回答面试官的问题时，不要写上面的例子。要写成下面这个例子：（更贴近实战）")]),t._v(" "),s("p",[t._v("**举例：**写一个封装DOM查询的例子")]),t._v(" "),s("blockquote",[s("p",[t._v("这个例子有点像 jQuery 操作DOM节点。")])]),t._v(" "),s("p",[t._v("表示这个例子，略难。")]),t._v(" "),s("h3",{attrs:{id:"题目三-描述-new-一个对象的过程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#题目三-描述-new-一个对象的过程"}},[t._v("#")]),t._v(" 题目三：描述 new 一个对象的过程")]),t._v(" "),s("p",[t._v("（1）创建一个新对象")]),t._v(" "),s("p",[t._v("（2）this 指向这个新对象")]),t._v(" "),s("p",[t._v("（3）执行代码（对this 赋值）")]),t._v(" "),s("p",[t._v("（4）返回this")]),t._v(" "),s("p",[t._v("参考链接：")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://my.oschina.net/u/2600761/blog/1524617",target:"_blank",rel:"noopener noreferrer"}},[t._v("原型、原型链、继承模式"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=e.exports}}]);