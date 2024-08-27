(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{458:function(t,_,v){"use strict";v.r(_);var r=v(2),a=Object(r.a)({},(function(){var t=this,_=t._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("p",[t._v("服务端发送SUBACK报文给客户端，用于确认它已收到并且正在处理SUBSCRIBE报文。")]),t._v(" "),_("p",[t._v("SUBACK报文包含一个返回码清单，它们指定了SUBSCRIBE请求的每个订阅被授予的最大QoS等级。")]),t._v(" "),_("h3",{attrs:{id:"_3-9-1-固定报头"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-9-1-固定报头"}},[t._v("#")]),t._v(" 3.9.1 固定报头")]),t._v(" "),_("h5",{attrs:{id:"图例-3-24-suback报文固定报头"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#图例-3-24-suback报文固定报头"}},[t._v("#")]),t._v(" 图例 3.24 – SUBACK报文固定报头")]),t._v(" "),_("table",{staticStyle:{"text-align":"center"}},[_("tr",[_("td",{attrs:{align:"center"}},[_("strong",[t._v("Bit")])]),t._v(" "),_("td",{attrs:{align:"center"}},[_("strong",[t._v("7")])]),t._v(" "),_("td",{attrs:{align:"center"}},[_("strong",[t._v("6")])]),t._v(" "),_("td",{attrs:{align:"center"}},[_("strong",[t._v("5")])]),t._v(" "),_("td",{attrs:{align:"center"}},[_("strong",[t._v("4")])]),t._v(" "),_("td",{attrs:{align:"center"}},[_("strong",[t._v("3")])]),t._v(" "),_("td",{attrs:{align:"center"}},[_("strong",[t._v("2")])]),t._v(" "),_("td",{attrs:{align:"center"}},[_("strong",[t._v("1")])]),t._v(" "),_("td",{attrs:{align:"center"}},[_("strong",[t._v("0")])])]),t._v(" "),_("tr",[_("td",[t._v("byte 1")]),t._v(" "),_("td",{attrs:{colspan:"4",align:"center"}},[t._v("MQTT控制报文类型 (9)")]),t._v(" "),_("td",{attrs:{colspan:"4",align:"center"}},[t._v("保留位")])]),t._v(" "),_("tr",[_("td"),t._v(" "),_("td",{attrs:{align:"center"}},[t._v("1")]),t._v(" "),_("td",{attrs:{align:"center"}},[t._v("0")]),t._v(" "),_("td",{attrs:{align:"center"}},[t._v("0")]),t._v(" "),_("td",{attrs:{align:"center"}},[t._v("1")]),t._v(" "),_("td",{attrs:{align:"center"}},[t._v("0")]),t._v(" "),_("td",{attrs:{align:"center"}},[t._v("0")]),t._v(" "),_("td",{attrs:{align:"center"}},[t._v("0")]),t._v(" "),_("td",{attrs:{align:"center"}},[t._v("0")])]),t._v(" "),_("tr",[_("td",[t._v("byte 2")]),t._v(" "),_("td",{attrs:{colspan:"8",align:"center"}},[t._v("剩余长度")])])]),t._v(" "),_("p",[_("strong",[t._v("剩余长度字段")])]),t._v(" "),_("p",[t._v("等于可变报头的长度加上有效载荷的长度。")]),t._v(" "),_("h3",{attrs:{id:"_3-9-2-可变报头"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-9-2-可变报头"}},[t._v("#")]),t._v(" 3.9.2 可变报头")]),t._v(" "),_("p",[t._v("可变报头包含等待确认的SUBSCRIBE报文的报文标识符。"),_("a",{attrs:{href:"#_%E5%9B%BE%E4%BE%8B_3.25_%E2%80%93"}},[t._v("图例 3.25 – SUBACK报文可变报头")]),t._v(" 描述了可变报头的格式。")]),t._v(" "),_("h5",{attrs:{id:"图例-3-25-suback报文可变报头"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#图例-3-25-suback报文可变报头"}},[t._v("#")]),t._v(" 图例 3.25 – SUBACK报文可变报头")]),t._v(" "),_("table",{staticStyle:{"text-align":"center"}},[_("tr",[_("td",{attrs:{align:"center"}},[_("strong",[t._v("Bit")])]),t._v(" "),_("td",{attrs:{align:"center"}},[_("strong",[t._v("7")])]),t._v(" "),_("td",{attrs:{align:"center"}},[_("strong",[t._v("6")])]),t._v(" "),_("td",{attrs:{align:"center"}},[_("strong",[t._v("5")])]),t._v(" "),_("td",{attrs:{align:"center"}},[_("strong",[t._v("4")])]),t._v(" "),_("td",{attrs:{align:"center"}},[_("strong",[t._v("3")])]),t._v(" "),_("td",{attrs:{align:"center"}},[_("strong",[t._v("2")])]),t._v(" "),_("td",{attrs:{align:"center"}},[_("strong",[t._v("1")])]),t._v(" "),_("td",{attrs:{align:"center"}},[_("strong",[t._v("0")])])]),t._v(" "),_("tr",[_("td",[t._v("byte 1")]),t._v(" "),_("td",{attrs:{colspan:"8",align:"center"}},[t._v("报文标识符 MSB")])]),t._v(" "),_("tr",[_("td",[t._v("byte 2")]),t._v(" "),_("td",{attrs:{colspan:"8",align:"center"}},[t._v("报文标识符 LSB")])])]),t._v(" "),_("h3",{attrs:{id:"_3-9-3-有效载荷"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-9-3-有效载荷"}},[t._v("#")]),t._v(" 3.9.3 有效载荷")]),t._v(" "),_("p",[t._v("有效载荷包含一个返回码清单。每个返回码对应等待确认的SUBSCRIBE报文中的一个主题过滤器。返回码的顺序"),_("strong",[t._v("必须")]),t._v("和SUBSCRIBE报文中主题过滤器的顺序相同 [MQTT-3.9.3-1]。")]),t._v(" "),_("p",[_("a",{attrs:{href:"#_Figure_3.26_-"}},[t._v("图例 3.26 – SUBACK报文有效载荷格式")]),t._v(" 描述了有效载荷中单字节编码的返回码字段。")]),t._v(" "),_("h5",{attrs:{id:"图例-3-26-suback报文有效载荷格式"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#图例-3-26-suback报文有效载荷格式"}},[t._v("#")]),t._v(" 图例 3.26 – SUBACK报文有效载荷格式")]),t._v(" "),_("table",{staticStyle:{"text-align":"center"}},[_("tr",[_("td",{attrs:{align:"center"}},[_("strong",[t._v("Bit")])]),t._v(" "),_("td",{attrs:{align:"center"}},[_("strong",[t._v("7")])]),t._v(" "),_("td",{attrs:{align:"center"}},[_("strong",[t._v("6")])]),t._v(" "),_("td",{attrs:{align:"center"}},[_("strong",[t._v("5")])]),t._v(" "),_("td",{attrs:{align:"center"}},[_("strong",[t._v("4")])]),t._v(" "),_("td",{attrs:{align:"center"}},[_("strong",[t._v("3")])]),t._v(" "),_("td",{attrs:{align:"center"}},[_("strong",[t._v("2")])]),t._v(" "),_("td",{attrs:{align:"center"}},[_("strong",[t._v("1")])]),t._v(" "),_("td",{attrs:{align:"center"}},[_("strong",[t._v("0")])])]),t._v(" "),_("tr",[_("td"),t._v(" "),_("td",{attrs:{colspan:"8",align:"center"}},[t._v("返回码")])]),t._v(" "),_("tr",[_("td",[t._v("byte 1")]),t._v(" "),_("td",{attrs:{align:"center"}},[t._v("X")]),t._v(" "),_("td",{attrs:{align:"center"}},[t._v("0")]),t._v(" "),_("td",{attrs:{align:"center"}},[t._v("0")]),t._v(" "),_("td",{attrs:{align:"center"}},[t._v("0")]),t._v(" "),_("td",{attrs:{align:"center"}},[t._v("0")]),t._v(" "),_("td",{attrs:{align:"center"}},[t._v("0")]),t._v(" "),_("td",{attrs:{align:"center"}},[t._v("X")]),t._v(" "),_("td",{attrs:{align:"center"}},[t._v("X")])])]),t._v(" "),_("p",[t._v("允许的返回码值：")]),t._v(" "),_("ul",[_("li",[t._v("0x00 - 最大QoS 0")]),t._v(" "),_("li",[t._v("0x01 - 成功 – 最大QoS 1")]),t._v(" "),_("li",[t._v("0x02 - 成功 – 最大 QoS 2")]),t._v(" "),_("li",[t._v("0x80 - Failure  失败")])]),t._v(" "),_("p",[t._v("0x00, 0x01, 0x02, 0x80之外的SUBACK返回码是保留的，"),_("strong",[t._v("不能")]),t._v("使用[MQTT-3.9.3-2]。")]),t._v(" "),_("h4",{attrs:{id:"有效载荷非规范示例"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#有效载荷非规范示例"}},[t._v("#")]),t._v(" 有效载荷非规范示例")]),t._v(" "),_("blockquote",[_("p",[_("a",{attrs:{href:"#_Figure_3.27_-"}},[t._v("图例 3.27 -有效载荷字节格式非规范示例")]),t._v(" 展示了在 "),_("a",{attrs:{href:"#_Table_3.5_-"}},[t._v("表格 3.6 -有效载荷非规范示例")]),t._v(" 简要描述的SUBACK报文的有效载荷。")])]),t._v(" "),_("h5",{attrs:{id:"表格-3-6-有效载荷非规范示例"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#表格-3-6-有效载荷非规范示例"}},[t._v("#")]),t._v(" 表格 3.6 -有效载荷非规范示例")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("Success - Maximum QoS 0")]),t._v(" "),_("th",[t._v("0")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("Success - Maximum QoS 2")]),t._v(" "),_("td",[t._v("2")])]),t._v(" "),_("tr",[_("td",[t._v("Failure")]),t._v(" "),_("td",[t._v("128")])])])]),t._v(" "),_("h5",{attrs:{id:"图例-3-27-有效载荷字节格式非规范示例"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#图例-3-27-有效载荷字节格式非规范示例"}},[t._v("#")]),t._v(" 图例 3.27 -有效载荷字节格式非规范示例")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th"),t._v(" "),_("th",[_("strong",[t._v("描述")])]),t._v(" "),_("th",[_("strong",[t._v("7")])]),t._v(" "),_("th",[_("strong",[t._v("6")])]),t._v(" "),_("th",[_("strong",[t._v("5")])]),t._v(" "),_("th",[_("strong",[t._v("4")])]),t._v(" "),_("th",[_("strong",[t._v("3")])]),t._v(" "),_("th",[_("strong",[t._v("2")])]),t._v(" "),_("th",[_("strong",[t._v("1")])]),t._v(" "),_("th",[_("strong",[t._v("0")])])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("byte 1")]),t._v(" "),_("td",[t._v("Success - Maximum QoS 0")]),t._v(" "),_("td",[t._v("0")]),t._v(" "),_("td",[t._v("0")]),t._v(" "),_("td",[t._v("0")]),t._v(" "),_("td",[t._v("0")]),t._v(" "),_("td",[t._v("0")]),t._v(" "),_("td",[t._v("0")]),t._v(" "),_("td",[t._v("0")]),t._v(" "),_("td",[t._v("0")])]),t._v(" "),_("tr",[_("td",[t._v("byte 2")]),t._v(" "),_("td",[t._v("Success - Maximum QoS 2")]),t._v(" "),_("td",[t._v("0")]),t._v(" "),_("td",[t._v("0")]),t._v(" "),_("td",[t._v("0")]),t._v(" "),_("td",[t._v("0")]),t._v(" "),_("td",[t._v("0")]),t._v(" "),_("td",[t._v("0")]),t._v(" "),_("td",[t._v("1")]),t._v(" "),_("td",[t._v("0")])]),t._v(" "),_("tr",[_("td",[t._v("byte 3")]),t._v(" "),_("td",[t._v("Failure")]),t._v(" "),_("td",[t._v("1")]),t._v(" "),_("td",[t._v("0")]),t._v(" "),_("td",[t._v("0")]),t._v(" "),_("td",[t._v("0")]),t._v(" "),_("td",[t._v("0")]),t._v(" "),_("td",[t._v("0")]),t._v(" "),_("td",[t._v("0")]),t._v(" "),_("td",[t._v("0")])])])])])}),[],!1,null,null,null);_.default=a.exports}}]);