(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{463:function(t,_,r){"use strict";r.r(_);var v=r(2),a=Object(v.a)({},(function(){var t=this,_=t._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("p",[t._v("DISCONNECT报文是客户端发给服务端的最后一个控制报文。表示客户端正常断开连接。")]),t._v(" "),_("h3",{attrs:{id:"_3-14-1-固定报头"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-14-1-固定报头"}},[t._v("#")]),t._v(" 3.14.1 固定报头")]),t._v(" "),_("h5",{attrs:{id:"图例-3-35-disconnect报文固定报头"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#图例-3-35-disconnect报文固定报头"}},[t._v("#")]),t._v(" 图例 3.35 – DISCONNECT报文固定报头")]),t._v(" "),_("table",{staticStyle:{"text-align":"center"}},[_("tr",[_("td",{attrs:{align:"center"}},[_("strong",[t._v("Bit")])]),t._v(" "),_("td",{attrs:{align:"center"}},[_("strong",[t._v("7")])]),t._v(" "),_("td",{attrs:{align:"center"}},[_("strong",[t._v("6")])]),t._v(" "),_("td",{attrs:{align:"center"}},[_("strong",[t._v("5")])]),t._v(" "),_("td",{attrs:{align:"center"}},[_("strong",[t._v("4")])]),t._v(" "),_("td",{attrs:{align:"center"}},[_("strong",[t._v("3")])]),t._v(" "),_("td",{attrs:{align:"center"}},[_("strong",[t._v("2")])]),t._v(" "),_("td",{attrs:{align:"center"}},[_("strong",[t._v("1")])]),t._v(" "),_("td",{attrs:{align:"center"}},[_("strong",[t._v("0")])])]),t._v(" "),_("tr",[_("td",[t._v("byte 1")]),t._v(" "),_("td",{attrs:{colspan:"4",align:"center"}},[t._v("MQTT控制报文类型 (14)")]),t._v(" "),_("td",{attrs:{colspan:"4",align:"center"}},[t._v("保留位")])]),t._v(" "),_("tr",[_("td"),t._v(" "),_("td",{attrs:{align:"center"}},[t._v("1")]),t._v(" "),_("td",{attrs:{align:"center"}},[t._v("1")]),t._v(" "),_("td",{attrs:{align:"center"}},[t._v("1")]),t._v(" "),_("td",{attrs:{align:"center"}},[t._v("0")]),t._v(" "),_("td",{attrs:{align:"center"}},[t._v("0")]),t._v(" "),_("td",{attrs:{align:"center"}},[t._v("0")]),t._v(" "),_("td",{attrs:{align:"center"}},[t._v("0")]),t._v(" "),_("td",{attrs:{align:"center"}},[t._v("0")])]),t._v(" "),_("tr",[_("td",[t._v("byte 2")]),t._v(" "),_("td",{attrs:{colspan:"8",align:"center"}},[t._v("剩余长度 (0)")])]),t._v(" "),_("tr",[_("td"),t._v(" "),_("td",{attrs:{align:"center"}},[t._v("0")]),t._v(" "),_("td",{attrs:{align:"center"}},[t._v("0")]),t._v(" "),_("td",{attrs:{align:"center"}},[t._v("0")]),t._v(" "),_("td",{attrs:{align:"center"}},[t._v("0")]),t._v(" "),_("td",{attrs:{align:"center"}},[t._v("0")]),t._v(" "),_("td",{attrs:{align:"center"}},[t._v("0")]),t._v(" "),_("td",{attrs:{align:"center"}},[t._v("0")]),t._v(" "),_("td",{attrs:{align:"center"}},[t._v("0")])])]),t._v(" "),_("p",[t._v("服务端"),_("strong",[t._v("必须")]),t._v("验证所有的保留位都被设置为0，如果它们不为0"),_("strong",[t._v("必须")]),t._v("断开连接 [MQTT-3.14.1-1]。")]),t._v(" "),_("h3",{attrs:{id:"_3-14-2-可变报头"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-14-2-可变报头"}},[t._v("#")]),t._v(" 3.14.2 可变报头")]),t._v(" "),_("p",[t._v("DISCONNECT报文没有可变报头。")]),t._v(" "),_("h3",{attrs:{id:"_3-14-3-有效载荷"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-14-3-有效载荷"}},[t._v("#")]),t._v(" 3.14.3 有效载荷")]),t._v(" "),_("p",[t._v("DISCONNECT报文没有有效载荷。")]),t._v(" "),_("h3",{attrs:{id:"_3-14-4-响应"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-14-4-响应"}},[t._v("#")]),t._v(" 3.14.4 响应")]),t._v(" "),_("p",[t._v("客户端发送DISCONNECT报文之后：")]),t._v(" "),_("ul",[_("li",[_("strong",[t._v("必须")]),t._v("关闭网络连接 [MQTT-3.14.4-1]。")]),t._v(" "),_("li",[_("strong",[t._v("不能")]),t._v("通过那个网络连接再发送任何控制报文 [MQTT-3.14.4-2]。")])]),t._v(" "),_("p",[t._v("服务端在收到DISCONNECT报文时：")]),t._v(" "),_("ul",[_("li",[_("strong",[t._v("必须")]),t._v("丢弃任何与当前连接关联的未发布的遗嘱消息，具体描述见 3.1.2.5节 [MQTT-3.14.4-3]。")]),t._v(" "),_("li",[_("strong",[t._v("应该")]),t._v("关闭网络连接，如果客户端 还没有这么做。")])])])}),[],!1,null,null,null);_.default=a.exports}}]);