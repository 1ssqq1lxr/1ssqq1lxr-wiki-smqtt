(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{497:function(t,a,s){"use strict";s.r(a);var e=s(2),r=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"引入依赖"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#引入依赖"}},[t._v("#")]),t._v(" 引入依赖")]),t._v(" "),a("div",{staticClass:"language-markdown line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-markdown"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!--smqtt依赖 --\x3e")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependency")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("io.github.quickmsg"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("smqttx-core"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("${Latest version}"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependency")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br")])]),a("h2",{attrs:{id:"技术架构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#技术架构"}},[t._v("#")]),t._v(" 技术架构")]),t._v(" "),a("h3",{attrs:{id:"模块设计"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#模块设计"}},[t._v("#")]),t._v(" 模块设计")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("模块")]),t._v(" "),a("th",[t._v("依赖")]),t._v(" "),a("th",[t._v("说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("smqtt-rule-engine")]),t._v(" "),a("td",[t._v("jexl3")]),t._v(" "),a("td",[t._v("执行规则引擎核心api")])]),t._v(" "),a("tr",[a("td",[t._v("smqtt-dsl")]),t._v(" "),a("td",[t._v("client id")]),t._v(" "),a("td",[t._v("用于解析规则引擎")])]),t._v(" "),a("tr",[a("td",[t._v("smqtt-source")]),t._v(" "),a("td",[t._v("各种数据源依赖配置")]),t._v(" "),a("td",[t._v("外部数据源")])])])]),t._v(" "),a("h3",{attrs:{id:"架构图"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#架构图"}},[t._v("#")]),t._v(" 架构图")]),t._v(" "),a("img",{staticStyle:{zoom:"33%"},attrs:{src:"rule.png",alt:"rule"}}),t._v(" "),a("ol",[a("li",[t._v("支持jexl3语法脚本")]),t._v(" "),a("li",[t._v("支持多种规则节点")]),t._v(" "),a("li",[t._v("支持动态Jexl脚本参数构建")])]),t._v(" "),a("h2",{attrs:{id:"规则引擎"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#规则引擎"}},[t._v("#")]),t._v(" 规则引擎")]),t._v(" "),a("h3",{attrs:{id:"规则引擎支持节点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#规则引擎支持节点"}},[t._v("#")]),t._v(" 规则引擎支持节点")]),t._v(" "),a("ul",[a("li",[t._v("TOPIC 用于集群见转发")]),t._v(" "),a("li",[t._v("PREDICATE 用于过滤节点")]),t._v(" "),a("li",[t._v("LOG 用于打印日志")]),t._v(" "),a("li",[t._v("KAFKA 用于发送到外部kafka")]),t._v(" "),a("li",[t._v("ROCKET_MQ 用于发送到外部rocketmq")]),t._v(" "),a("li",[t._v("HTTP 用于发送到外部http接口")]),t._v(" "),a("li",[t._v("其他暂未实现")])]),t._v(" "),a("h3",{attrs:{id:"规则引擎内置变量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#规则引擎内置变量"}},[t._v("#")]),t._v(" 规则引擎内置变量")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("参数")]),t._v(" "),a("th",[t._v("说明")]),t._v(" "),a("th",[t._v("必传")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("timestamp")]),t._v(" "),a("td",[t._v("消息时间")]),t._v(" "),a("td",[t._v("是")])]),t._v(" "),a("tr",[a("td",[t._v("clientIdentifier")]),t._v(" "),a("td",[t._v("client id")]),t._v(" "),a("td",[t._v("是")])]),t._v(" "),a("tr",[a("td",[t._v("topic")]),t._v(" "),a("td",[t._v("topic")]),t._v(" "),a("td",[t._v("是")])]),t._v(" "),a("tr",[a("td",[t._v("qos")]),t._v(" "),a("td",[t._v("qos服务等级")]),t._v(" "),a("td",[t._v("是")])]),t._v(" "),a("tr",[a("td",[t._v("retain")]),t._v(" "),a("td",[t._v("是否保留消息")]),t._v(" "),a("td",[t._v("是")])]),t._v(" "),a("tr",[a("td",[t._v("msg")]),t._v(" "),a("td",[t._v("消息body")]),t._v(" "),a("td",[t._v("是")])])])]),t._v(" "),a("h3",{attrs:{id:"jexl3-语法详解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jexl3-语法详解"}},[t._v("#")]),t._v(" Jexl3 语法详解")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("支持java方法调用")]),t._v(" "),a("ol",[a("li",[t._v("过滤qos为1并且topic为test/test")])]),t._v(" "),a("div",{staticClass:"language-markdown line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-markdown"}},[a("code",[t._v('   qos == 1 && topic.equals("test/test")\n')])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("ol",{attrs:{start:"2"}},[a("li",[t._v("body如果是json，过滤某个属性值")])]),t._v(" "),a("div",{staticClass:"language-markdown line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-markdown"}},[a("code",[t._v("   msg.属性 == 值\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("ol",{attrs:{start:"3"}},[a("li",[t._v("支持模板替换，构建自定义json")])]),t._v(" "),a("div",{staticClass:"language-markdown line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-markdown"}},[a("code",[t._v("  \"{'topic':topic,'body':body,'qos':qos}\"\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])])]),t._v(" "),a("li",[a("p",[t._v("jexl3官方文档")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"http://commons.apache.org/proper/commons-jexl/apidocs/org/apache/commons/jexl3/package-summary.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("JAVA DOC"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"http://commons.apache.org/proper/commons-jexl/reference/syntax.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("HOME DOC"),a("OutboundLink")],1)])])])])])}),[],!1,null,null,null);a.default=r.exports}}]);