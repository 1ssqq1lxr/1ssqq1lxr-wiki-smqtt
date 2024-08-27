(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{470:function(t,v,_){"use strict";_.r(v);var s=_(2),l=Object(s.a)({},(function(){var t=this,v=t._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("p",[t._v("​\t\tSMQTT基于Netty开发，底层采用Reactor3反应堆模型,支持单机部署，支持容器化部署，具备低延迟，高吞吐量，支持百万TCP连接，同时支持多种协议交互，是一款非常优秀的消息中间件！")]),t._v(" "),v("h2",{attrs:{id:"架构图"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#架构图"}},[t._v("#")]),t._v(" 架构图")]),t._v(" "),v("p",[v("img",{attrs:{src:"smqtt.png",alt:"component108"}})]),t._v(" "),v("h2",{attrs:{id:"smqtt目前拥有的功能如下"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#smqtt目前拥有的功能如下"}},[t._v("#")]),t._v(" smqtt目前拥有的功能如下：")]),t._v(" "),v("ol",[v("li",[v("p",[t._v("消息质量等级实现(支持qos0，qos1，qos2)")])]),t._v(" "),v("li",[v("p",[t._v("topicFilter支持")]),t._v(" "),v("ul",[v("li",[t._v("topic分级（test/test）")]),t._v(" "),v("li",[t._v("+支持（单层匹配）")]),t._v(" "),v("li",[t._v("#支持（多层匹配）")])])]),t._v(" "),v("li",[v("p",[t._v("会话消息")]),t._v(" "),v("ul",[v("li",[t._v("默认内存存储")]),t._v(" "),v("li",[t._v("支持持久化（redis/db）")])])]),t._v(" "),v("li",[v("p",[t._v("保留消息")]),t._v(" "),v("ul",[v("li",[t._v("默认内存存储")]),t._v(" "),v("li",[t._v("支持持久化（redis/db）")])])]),t._v(" "),v("li",[v("p",[t._v("遗嘱消息")]),t._v(" "),v("blockquote",[v("p",[t._v("设备掉线时候触发")])])]),t._v(" "),v("li",[v("p",[t._v("客户端认证")]),t._v(" "),v("ul",[v("li",[t._v("支持spi注入外部认证")])])]),t._v(" "),v("li",[v("p",[t._v("tls加密")]),t._v(" "),v("ul",[v("li",[t._v("支持tls加密（mqtt端口/http端口）")])])]),t._v(" "),v("li",[v("p",[t._v("websocket协议支持x")]),t._v(" "),v("blockquote",[v("p",[t._v("使用websocket协议包装mqtt协议")])])]),t._v(" "),v("li",[v("p",[t._v("http协议交互")]),t._v(" "),v("ul",[v("li",[t._v("支持http接口推送消息")]),t._v(" "),v("li",[t._v("支持spi扩展http接口")])])]),t._v(" "),v("li",[v("p",[t._v("SPI接口扩展支持")]),t._v(" "),v("ul",[v("li",[t._v("消息管理接口（会话消息/保留消息管理）")]),t._v(" "),v("li",[t._v("通道管理接口 (管理系统的客户端连接)")]),t._v(" "),v("li",[t._v("认证接口 （用于自定义外部认证）")]),t._v(" "),v("li",[t._v("拦截器  （用户自定义拦截消息）")])])]),t._v(" "),v("li",[v("p",[t._v("集群支持（gossip协议实现）")])]),t._v(" "),v("li",[v("p",[t._v("容器化支持")]),t._v(" "),v("blockquote",[v("p",[t._v("默认镜像最新tag: 1ssqq1lxr/smqtt")])])]),t._v(" "),v("li",[v("p",[t._v("持久化支持（session 保留消息）")])]),t._v(" "),v("li",[v("p",[t._v("规则引擎支持(文档需要赞助提供)")])]),t._v(" "),v("li",[v("p",[t._v("支持springboot starter容器化")])]),t._v(" "),v("li",[v("p",[t._v("管理后台")]),t._v(" "),v("blockquote",[v("p",[t._v("请参考smqtt文档如何启动管理后台")])])])]),t._v(" "),v("h2",{attrs:{id:"尝试一下"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#尝试一下"}},[t._v("#")]),t._v(" 尝试一下")]),t._v(" "),v("blockquote",[v("p",[t._v("大家不要恶意链接，谢谢！")])]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("管理")]),t._v(" "),v("th",[t._v("说明")]),t._v(" "),v("th",[t._v("其他")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("113.90.145.99:18886")]),t._v(" "),v("td",[t._v("mqtt端口")]),t._v(" "),v("td",[t._v("用户名：smqtt 密码：smqtt")])]),t._v(" "),v("tr",[v("td",[t._v("113.90.145.99:18888")]),t._v(" "),v("td",[t._v("mqtt over websocket")]),t._v(" "),v("td",[t._v("用户名：smqtt 密码：smqtt")])]),t._v(" "),v("tr",[v("td",[t._v("http://113.90.145.99:18887/smqtt/admin")]),t._v(" "),v("td",[t._v("管理后台演示")]),t._v(" "),v("td",[t._v("用户名：smqtt 密码：smqtt")])]),t._v(" "),v("tr",[v("td",[v("a",{attrs:{href:"http://113.90.145.99:18885",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://113.90.145.99:18885/dashboards"),v("OutboundLink")],1)]),t._v(" "),v("td",[t._v("Grafana演示地址")]),t._v(" "),v("td",[t._v("用户名：smqtt 密码：smqtt")])])])]),t._v(" "),v("h2",{attrs:{id:"商业合作"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#商业合作"}},[t._v("#")]),t._v(" 商业合作")]),t._v(" "),v("blockquote",[v("p",[t._v("添加微信号"),v("code",[t._v("Lemon877164954")])])]),t._v(" "),v("h2",{attrs:{id:"麻烦关注下公众号"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#麻烦关注下公众号"}},[t._v("#")]),t._v(" 麻烦关注下公众号！")]),t._v(" "),v("p",[v("img",{attrs:{src:"icon.jpg",alt:"icon"}})]),t._v(" "),v("ul",[v("li",[t._v("添加微信号"),v("code",[t._v("Lemon877164954")]),t._v("拉入smqtt官方交流群")]),t._v(" "),v("li",[t._v("加入qq群 "),v("code",[t._v("700152283")])])])])}),[],!1,null,null,null);v.default=l.exports}}]);