(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{468:function(v,_,t){"use strict";t.r(_);var r=t(2),T=Object(r.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("p",[v._v("这个附录是非规范的，只作为本文档正文中可以找到的大量一致性声明的摘要提供。一致性要求的限制列表见第七章。")]),v._v(" "),_("h3",{attrs:{id:"表格-强制性规范声明"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#表格-强制性规范声明"}},[v._v("#")]),v._v(" 表格：强制性规范声明")]),v._v(" "),_("table",[_("thead",[_("tr",[_("th",[_("strong",[v._v("声明序号")])]),v._v(" "),_("th",[_("strong",[v._v("规范声明")])])])]),v._v(" "),_("tbody",[_("tr",[_("td",[v._v("[MQTT-1.5.3-1]")]),v._v(" "),_("td",[v._v("UTF-8编码字符串中的字符数据"),_("strong",[v._v("必须")]),v._v("是按照Unicode规范 ["),_("a",{attrs:{href:"#Unicode"}},[v._v("Unicode")]),v._v("] 定义的和在RFC3629 ["),_("a",{attrs:{href:"#RFC3629"}},[v._v("RFC3629")]),v._v("] 中重申的有效的UTF-8格式。特别需要指出的是，这些数据"),_("strong",[v._v("不能")]),v._v("包含字符码在U+D800和U+DFFF之间的数据。如果服务端或客户端收到了一个包含无效UTF-8字符的控制报文，它"),_("strong",[v._v("必须")]),v._v("关闭网络连接。")])]),v._v(" "),_("tr",[_("td",[v._v("[MQTT-1.5.3-2]")]),v._v(" "),_("td",[v._v("UTF-8编码的字符串"),_("strong",[v._v("不能")]),v._v("包含空字符U+0000。如果客户端或服务端收到了一个包含U+0000的控制报文，它"),_("strong",[v._v("必须")]),v._v("关闭网络连接。")])]),v._v(" "),_("tr",[_("td",[v._v("[MQTT-1.5.3-3]")]),v._v(" "),_("td",[v._v("UTF-8编码序列0XEF 0xBB 0xBF总是被解释为U+FEFF（零宽度非换行空白字符），无论它出现在字符串的什么位置，报文接收者都不能跳过或者剥离它。")])]),v._v(" "),_("tr",[_("td",[v._v("[MQTT-2.2.2-1]")]),v._v(" "),_("td",[v._v("表格 2.2中任何标记为“保留”的标志位，都是保留给以后使用的，"),_("strong",[v._v("必须")]),v._v("设置为表格中列出的值。")])]),v._v(" "),_("tr",[_("td",[v._v("[MQTT-2.2.2-2]")]),v._v(" "),_("td",[v._v("如果收到非法的标志，接收者"),_("strong",[v._v("必须")]),v._v("关闭网络连接。")])]),v._v(" "),_("tr",[_("td",[v._v("[MQTT-2.3.1-1]")]),v._v(" "),_("td",[v._v("SUBSCRIBE，UNSUBSCRIBE和PUBLISH（QoS大于0）控制报文"),_("strong",[v._v("必须")]),v._v("包含一个非零的16位报文标识符（Packet Identifier。")])]),v._v(" "),_("tr",[_("td",[v._v("[MQTT-2.3.1-2]")]),v._v(" "),_("td",[v._v("客户端每次发送一个新的这些类型的报文时都"),_("strong",[v._v("必须")]),v._v("分配一个当前未使用的报文标识符。")])]),v._v(" "),_("tr",[_("td",[v._v("[MQTT-2.3.1-3]")]),v._v(" "),_("td",[v._v("如果一个客户端要重发这个特殊的控制报文，在随后重发那个报文时，它"),_("strong",[v._v("必须")]),v._v("使用相同的标识符。当客户端处理完这个报文对应的确认后，这个报文标识符就释放可重用。QoS 1的PUBLISH对应的是PUBACK，QoS 2的PUBLISH对应的是PUBCOMP，与SUBSCRIBE或UNSUBSCRIBE对应的分别是SUBACK或UNSUBACK")])]),v._v(" "),_("tr",[_("td",[v._v("[MQTT-2.3.1-4]")]),v._v(" "),_("td",[v._v("发送一个QoS 0的PUBLISH报文时，相同的条件也适用于服务端。")])]),v._v(" "),_("tr",[_("td",[v._v("[MQTT-2.3.1-5]")]),v._v(" "),_("td",[v._v("QoS设置为0的PUBLISH报文"),_("strong",[v._v("不能")]),v._v("包含报文标识符。")])]),v._v(" "),_("tr",[_("td",[v._v("[MQTT-2.3.1-6]")]),v._v(" "),_("td",[v._v("PUBACK, PUBREC, PUBREL报文"),_("strong",[v._v("必须")]),v._v("包含与最初发送的PUBLISH报文相同的报文标识符。")])]),v._v(" "),_("tr",[_("td",[v._v("[MQTT-2.3.1-7]")]),v._v(" "),_("td",[v._v("与 [MQTT-2.3.1-6] 类似，SUBACK和UNSUBACK"),_("strong",[v._v("必须")]),v._v("包含在对应的SUBSCRIBE和UNSUBSCRIBE报文中使用的报文标识符。")])]),v._v(" "),_("tr",[_("td",[v._v("[MQTT-3.1.0-1]")]),v._v(" "),_("td",[v._v("客户端到服务端的网络连接建立后，客户端发送给服务端的第一个报文"),_("strong",[v._v("必须")]),v._v("是CONNECT报文。")])]),v._v(" "),_("tr",[_("td",[v._v("[MQTT-3.1.0-2]")]),v._v(" "),_("td",[v._v("在一个网络连接上，客户端只能发送一次CONNECT报文。服务端"),_("strong",[v._v("必须")]),v._v("将客户端发送的第二个CONNECT报文当作协议违规处理并断开客户端的连接。")])]),v._v(" "),_("tr",[_("td",[v._v("[MQTT-3.1.2-1]")]),v._v(" "),_("td",[v._v("如果协议名不正确服务端"),_("strong",[v._v("可以")]),v._v("断开客户端的连接，也"),_("strong",[v._v("可以")]),v._v("按照某些其它规范继续处理CONNECT报文。对于后一种情况，按照本规范，服务端"),_("strong",[v._v("不能")]),v._v("继续处理CONNECT报文。")])]),v._v(" "),_("tr",[_("td",[v._v("[MQTT-3.1.2-2]")]),v._v(" "),_("td",[v._v("如果发现不支持的协议级别，服务端"),_("strong",[v._v("必须")]),v._v("给发送一个返回码为0x01（不支持的协议级别）的CONNACK报文响应CONNECT报文，然后断开客户端的连接。")])]),v._v(" "),_("tr",[_("td",[v._v("[MQTT-3.1.2-3]")]),v._v(" "),_("td",[v._v("服务端"),_("strong",[v._v("必须")]),v._v("验证CONNECT控制报文的保留标志位（第0位）是否为0，如果不为0必须断开客户端连接。")])]),v._v(" "),_("tr",[_("td",[v._v("[MQTT-3.1.2-4]")]),v._v(" "),_("td",[v._v("如果清理会话（CleanSession）标志被设置为0，服务端"),_("strong",[v._v("必须")]),v._v("基于当前会话（使用客户端标识符识别）的状态恢复与客户端的通信。如果没有与这个客户端标识符关联的会话，服务端"),_("strong",[v._v("必须")]),v._v("创建一个新的会话。在连接断开之后，当连接断开后，客户端和服务端"),_("strong",[v._v("必须")]),v._v("保存会话信息。")])]),v._v(" "),_("tr",[_("td",[v._v("[MQTT-3.1.2-5]")]),v._v(" "),_("td",[v._v("当清理会话标志为0的会话连接断开之后，服务端"),_("strong",[v._v("必须")]),v._v("将之后的QoS 1和QoS 2级别的消息保存为会话状态的一部分，如果这些消息匹配断开连接时客户端的任何订阅。")])]),v._v(" "),_("tr",[_("td",[v._v("[MQTT-3.1.2-6]")]),v._v(" "),_("td",[v._v("如果清理会话（CleanSession）标志被设置为1，客户端和服务端"),_("strong",[v._v("必须")]),v._v("丢弃之前的任何会话并开始一个新的会话。会话仅持续和网络连接同样长的时间。与这个会话关联的状态数据"),_("strong",[v._v("不能")]),v._v("被任何之后的会话重用。")])]),v._v(" "),_("tr",[_("td",[v._v("[MQTT-3.1.2.7]")]),v._v(" "),_("td",[v._v("保留消息不是服务端会话状态的一部分，会话终止时"),_("strong",[v._v("不能")]),v._v("删除保留消息。")])]),v._v(" "),_("tr",[_("td",[v._v("[MQTT-3.1.2-8]")]),v._v(" "),_("td",[v._v("遗嘱标志（Will Flag）被设置为1，表示如果连接请求被接受了，遗嘱（Will Message）消息"),_("strong",[v._v("必须")]),v._v("被存储在服务端并且与这个网络连接关联。之后网络连接关闭时，服务端"),_("strong",[v._v("必须")]),v._v("发布这个遗嘱消息，除非服务端收到DISCONNECT报文时删除了这个遗嘱消息。")])]),v._v(" "),_("tr",[_("td",[v._v("[MQTT-3.1.2-9]")]),v._v(" "),_("td",[v._v("如果遗嘱标志被设置为1，连接标志中的Will QoS和Will Retain字段会被服务端用到，同时有效载荷中"),_("strong",[v._v("必须")]),v._v("包含Will Topic和Will Message字段。")])]),v._v(" "),_("tr",[_("td",[v._v("[MQTT-3.1.2-10]")]),v._v(" "),_("td",[v._v("一旦被发布或者服务端收到了客户端发送的DISCONNECT报文，遗嘱消息就"),_("strong",[v._v("必须")]),v._v("从存储的会话状态中移除。")])]),v._v(" "),_("tr",[_("td",[v._v("[MQTT-3.1.2-11]")]),v._v(" "),_("td",[v._v("如果遗嘱标志被设置为0，连接标志中的Will QoS和Will Retain字段"),_("strong",[v._v("必须")]),v._v("设置为0，并且有效载荷中"),_("strong",[v._v("不能")]),v._v("包含Will Topic和Will Message字段。")])]),v._v(" "),_("tr",[_("td",[v._v("[MQTT-3.1.2-12]")]),v._v(" "),_("td",[v._v("如果遗嘱标志被设置为0，网络连接断开时，"),_("strong",[v._v("不能")]),v._v("发送遗嘱消息。.")])]),v._v(" "),_("tr",[_("td",[v._v("[MQTT-3.1.2-13]")]),v._v(" "),_("td",[v._v("如果遗嘱标志被设置为0，遗嘱QoS也"),_("strong",[v._v("必须")]),v._v("设置为0(0x00)。")])]),v._v(" "),_("tr",[_("td",[v._v("[MQTT-3.1.2-14]")]),v._v(" "),_("td",[v._v("如果遗嘱标志被设置为1，遗嘱QoS的值可以等于0(0x00)，1(0x01)，2(0x02)。它的值"),_("strong",[v._v("不能")]),v._v("等于3。")])]),v._v(" "),_("tr",[_("td",[v._v("[MQTT-3.1.2-15]")]),v._v(" "),_("td",[v._v("如果遗嘱标志被设置为0，遗嘱保留（Will Retain）标志也"),_("strong",[v._v("必须")]),v._v("设置为0。")])]),v._v(" "),_("tr",[_("td",[v._v("[MQTT-3.1.2-16]")]),v._v(" "),_("td",[v._v("如果遗嘱保留被设置为0，服务端"),_("strong",[v._v("必须")]),v._v("将遗嘱消息当作非保留消息发布。")])]),v._v(" "),_("tr",[_("td",[v._v("[MQTT-3.1.2-17]")]),v._v(" "),_("td",[v._v("如果遗嘱保留被设置为1，服务端"),_("strong",[v._v("必须")]),v._v("将遗嘱消息当作保留消息发布。")])]),v._v(" "),_("tr",[_("td",[v._v("[MQTT-3.1.2-18]")]),v._v(" "),_("td",[v._v("如果用户名（User Name）标志被设置为0，有效载荷中"),_("strong",[v._v("不能")]),v._v("包含用户名字段。")])]),v._v(" "),_("tr",[_("td",[v._v("[MQTT-3.1.2-19]")]),v._v(" "),_("td",[v._v("如果用户名（User Name）标志被设置为1，有效载荷中"),_("strong",[v._v("必须")]),v._v("包含用户名字段。")])]),v._v(" "),_("tr",[_("td",[v._v("[MQTT-3.1.2-20]")]),v._v(" "),_("td",[v._v("如果密码（Password）标志被设置为0，有效载荷中"),_("strong",[v._v("不能")]),v._v("包含密码字段。")])]),v._v(" "),_("tr",[_("td",[v._v("[MQTT-3.1.2-21]")]),v._v(" "),_("td",[v._v("如果密码（Password）标志被设置为1，有效载荷中"),_("strong",[v._v("必须")]),v._v("包含密码字段")])]),v._v(" "),_("tr",[_("td",[v._v("[MQTT-3.1.2-22]")]),v._v(" "),_("td",[v._v("如果用户名标志被设置为0，密码标志也"),_("strong",[v._v("必须")]),v._v("设置为0。")])]),v._v(" "),_("tr",[_("td",[v._v("[MQTT-3.1.2-23]")]),v._v(" "),_("td",[v._v("客户端负责保证控制报文发送的时间间隔不超过保持连接的值。如果没有任何其它的控制报文可以发送，客户端"),_("strong",[v._v("必须")]),v._v("发送一个PINGREQ报文。")])]),v._v(" "),_("tr",[_("td",[v._v("[MQTT-3.1.2-24]")]),v._v(" "),_("td",[v._v("如果保持连接的值非零，并且服务端在一点五倍的保持连接时间内没有收到客户端的控制报文，它"),_("strong",[v._v("必须")]),v._v("断开客户端的网络连接，认为网络连接已断开。")])]),v._v(" "),_("tr",[_("td",[v._v("[MQTT-3.1.3-1]")]),v._v(" "),_("td",[v._v("如果包含的话，"),_("strong",[v._v("必须")]),v._v("按这个顺序出现：客户端标识符，遗嘱主题，遗嘱消息，用户名，密码。")])]),v._v(" "),_("tr",[_("td",[v._v("[MQTT-3.1.3-2]")]),v._v(" "),_("td",[v._v("服务端使用客户端标识符 (ClientId) 识别客户端。连接服务端的每个客户端都有唯一的客户端标识符（ClientId）。客户端和服务端都必须使用ClientId识别两者之间的MQTT会话相关的状态。")])]),v._v(" "),_("tr",[_("td",[v._v("[MQTT-3.1.3-3]")]),v._v(" "),_("td",[v._v("客户端标识符 (ClientId) "),_("strong",[v._v("必须")]),v._v("存在而且"),_("strong",[v._v("必须")]),v._v("是CONNECT报文有效载荷的第一个字段。")])]),v._v(" "),_("tr",[_("td",[v._v("[MQTT-3.1.3-4]")]),v._v(" "),_("td",[v._v("客户端标识符"),_("strong",[v._v("必须")]),v._v("是1.5.3节定义的UTF-8编码字符串。")])]),v._v(" "),_("tr",[_("td",[v._v("[MQTT-3.1.3-5]")]),v._v(" "),_("td",[v._v("服务端"),_("strong",[v._v("必须")]),v._v("允许1到23个字节长的UTF-8编码的客户端标识符，客户端标识符只能包含这些字符：“0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ”（大写字母，小写字母和数字）。")])]),v._v(" "),_("tr",[_("td",[v._v("[MQTT-3.1.3-6]")]),v._v(" "),_("td",[v._v("服务端"),_("strong",[v._v("可以")]),v._v("允许客户端提供一个零字节的客户端标识符 (ClientId) ，如果这样做了，服务端"),_("strong",[v._v("必须")]),v._v("将这看作特殊情况并分配唯一的客户端标识符给那个客户端。然后它"),_("strong",[v._v("必须")]),v._v("假设客户端提供了那个唯一的客户端标识符，正常处理这个CONNECT报文。")])]),v._v(" "),_("tr",[_("td",[v._v("[MQTT-3.1.3-7]")]),v._v(" "),_("td",[v._v("如果客户端提供了一个零字节的客户端标识符，它"),_("strong",[v._v("必须")]),v._v("同时将清理会话标志设置为1。")])]),v._v(" "),_("tr",[_("td",[v._v("[MQTT-3.1.3-8]")]),v._v(" "),_("td",[v._v("如果客户端提供的ClientId为零字节且清理会话标志为0，服务端"),_("strong",[v._v("必须")]),v._v("发送返回码为0x02（表示标识符不合格）的CONNACK报文响应客户端的CONNECT报文，然后关闭网络连接。")])]),v._v(" "),_("tr",[_("td",[v._v("[MQTT-3.1.3-9]")]),v._v(" "),_("td",[v._v("如果服务端拒绝了这个ClientId，它"),_("strong",[v._v("必须")]),v._v("发送返回码为0x02（表示标识符不合格）的CONNACK报文响应客户端的CONNECT报文，然后关闭网络连接。")])]),v._v(" "),_("tr",[_("td",[v._v("[MQTT-3.1.3-10]")]),v._v(" "),_("td",[v._v("遗嘱主题"),_("strong",[v._v("必须")]),v._v("是 1.5.3节定义的UTF-8编码字符串。")])]),v._v(" "),_("tr",[_("td",[v._v("[MQTT-3.1.3-11]")]),v._v(" "),_("td",[v._v("用户名"),_("strong",[v._v("必须")]),v._v("是 1.5.3节定义的UTF-8编码字符串。")])]),v._v(" "),_("tr",[_("td",[v._v("[MQTT-3.1.4-1]")]),v._v(" "),_("td",[v._v("服务端"),_("strong",[v._v("必须")]),v._v("按照3.1节的要求验证CONNECT报文，如果报文不符合规范，服务端不发送CONNACK报文直接关闭网络连接。")])]),v._v(" "),_("tr",[_("td",[v._v("[MQTT-3.1.4-2]")]),v._v(" "),_("td",[v._v("如果ClientId表明客户端已经连接到这个服务端，那么服务端"),_("strong",[v._v("必须")]),v._v("断开原有的客户端连接。")])]),v._v(" "),_("tr",[_("td",[v._v("[MQTT-3.1.4-3]")]),v._v(" "),_("td",[v._v("服务端"),_("strong",[v._v("必须")]),v._v("按照 3.1.2.4节的描述执行清理会话的过程。")])]),v._v(" "),_("tr",[_("td",[v._v("[MQTT-3.1.4-4]")]),v._v(" "),_("td",[v._v("服务端"),_("strong",[v._v("必须")]),v._v("发送返回码为零的CONNACK报文作为CONNECT报文的确认响应。")])]),v._v(" "),_("tr",[_("td",[v._v("[MQTT-3.1.4-5]")]),v._v(" "),_("td",[v._v("如果服务端拒绝了CONNECT，它"),_("strong",[v._v("不能")]),v._v("处理客户端在CONNECT报文之后发送的任何数据。")])]),v._v(" "),_("tr",[_("td",[v._v("[MQTT-3.2.0-1]")]),v._v(" "),_("td",[v._v("服务端发送CONNACK报文响应从客户端收到的CONNECT报文。服务端发送给客户端的第一个报文"),_("strong",[v._v("必须")]),v._v("是CONNACK。")])]),v._v(" "),_("tr",[_("td",[v._v("[MQTT-3.2.2-1]")]),v._v(" "),_("td",[v._v("如果服务端收到清理会话（CleanSession）标志为1的连接，除了将CONNACK报文中的返回码设置为0之外，还"),_("strong",[v._v("必须")]),v._v("将CONNACK报文中的当前会话设置（Session Present）标志为0。")])]),v._v(" "),_("tr",[_("td",[v._v("[MQTT-3.2.2-2]")]),v._v(" "),_("td",[v._v("如果服务端收到一个CleanSession为0的连接，当前会话标志的值取决于服务端是否已经保存了ClientId对应客户端的会话状态。如果服务端已经保存了会话状态，它"),_("strong",[v._v("必须")]),v._v("将CONNACK报文中的当前会话标志设置为1。")])]),v._v(" "),_("tr",[_("td",[v._v("[MQTT-3.2.2-3]")]),v._v(" "),_("td",[v._v("如果服务端没有已保存的会话状态，它"),_("strong",[v._v("必须")]),v._v("将CONNACK报文中的当前会话设置为0。还需要将CONNACK报文中的返回码设置为0。")])]),v._v(" "),_("tr",[_("td",[v._v("[MQTT-3.2.2-4]")]),v._v(" "),_("td",[v._v("如果服务端发送了一个包含非零返回码的CONNACK报文，它"),_("strong",[v._v("必须")]),v._v("将当前会话标志设置为0。")])]),v._v(" "),_("tr",[_("td",[v._v("[MQTT-3.2.2-5]")]),v._v(" "),_("td",[v._v("如果服务端发送了一个包含非零返回码的CONNACK报文，那么它"),_("strong",[v._v("必须")]),v._v("关闭网络连接。.")])]),v._v(" "),_("tr",[_("td",[v._v("[MQTT-3.2.2-6]")]),v._v(" "),_("td",[v._v("如果认为上表格3.1中的所有连接返回码都不太合适，那么服务端"),_("strong",[v._v("必须")]),v._v("关闭网络连接，不需要发送CONNACK报文。")])]),v._v(" "),_("tr",[_("td",[v._v("[MQTT-3.3.1-1]")]),v._v(" "),_("td",[v._v("客户端或服务端请求重发一个PUBLISH报文时，"),_("strong",[v._v("必须")]),v._v("将DUP标志设置为1。")])]),v._v(" "),_("tr",[_("td",[v._v("[MQTT-3.3.1-2]")]),v._v(" "),_("td",[v._v("对于QoS 0的消息，DUP标志"),_("strong",[v._v("必须")]),v._v("设置为0")])]),v._v(" "),_("tr",[_("td",[v._v("[MQTT-3.3.1-3]")]),v._v(" "),_("td",[v._v("服务端发送PUBLISH报文给订阅者时，收到（入站）的PUBLISH报文的DUP标志的值不会被传播。发送（出站）的PUBLISH报文与收到（入站）的PUBLISH报文中的DUP标志是独立设置的，它的值"),_("strong",[v._v("必须")]),v._v("单独的根据发送（出站）的PUBLISH报文是否是一个重发来确定。")])]),v._v(" "),_("tr",[_("td",[v._v("[MQTT-3.3.1-4]")]),v._v(" "),_("td",[v._v("PUBLISH报文"),_("strong",[v._v("不能")]),v._v("将QoS所有的位设置为1。如果服务端或客户端收到QoS所有位都为1的PUBLISH报文，它"),_("strong",[v._v("必须")]),v._v("关闭网络连接。")])]),v._v(" "),_("tr",[_("td",[v._v("[MQTT-3.3.1-5]")]),v._v(" "),_("td",[v._v("如果客户端发给服务端的PUBLISH报文的保留（RETAIN）标志被设置为1，服务端"),_("strong",[v._v("必须")]),v._v("存储这个应用消息和它的服务质量等级（QoS），以便它可以被分发给未来的主题名匹配的订阅者。")])]),v._v(" "),_("tr",[_("td",[v._v("[MQTT-3.3.1-6]")]),v._v(" "),_("td",[v._v("一个新的订阅建立时，对每个匹配的主题名，如果存在最近保留的消息，它"),_("strong",[v._v("必须")]),v._v("被发送给这个订阅者。")])]),v._v(" "),_("tr",[_("td",[v._v("[MQTT-3.3.1-7]")]),v._v(" "),_("td",[v._v("如果服务端收到一条保留（RETAIN）标志为1的QoS 0消息，它"),_("strong",[v._v("必须")]),v._v("丢弃之前为那个主题保留的任何消息。它"),_("strong",[v._v("应该")]),v._v("将这个新的QoS 0消息当作那个主题的新保留消息，但是任何时候都"),_("strong",[v._v("可以")]),v._v("选择丢弃它 — 如果这种情况发生了，那个主题将没有保留消息。")])]),v._v(" "),_("tr",[_("td",[v._v("[MQTT-3.3.1-8]")]),v._v(" "),_("td",[v._v("服务端发送PUBLISH报文给客户端时，如果消息是作为客户端一个新订阅的结果发送，它"),_("strong",[v._v("必须")]),v._v("将报文的保留标志设为1。")])]),v._v(" "),_("tr",[_("td",[v._v("[MQTT-3.3.1-9]")]),v._v(" "),_("td",[v._v("当一个PUBLISH报文发送给客户端是因为匹配一个已建立的订阅时，服务端"),_("strong",[v._v("必须")]),v._v("将保留标志设为0，不管它收到的这个消息中保留标志的值是多少。")])]),v._v(" "),_("tr",[_("td",[v._v("[MQTT-3.3.1-10]")]),v._v(" "),_("td",[v._v("保留标志为1且有效载荷为零字节的PUBLISH报文会被服务端当作正常消息处理，它会被发送给订阅主题匹配的客户端。此外，同一个主题下任何现存的保留消息必须被移除，因此这个主题之后的任何订阅者都不会收到一个保留消息。")])]),v._v(" "),_("tr",[_("td",[v._v("[MQTT-3.3.1-11]")]),v._v(" "),_("td",[v._v("服务端"),_("strong",[v._v("不能")]),v._v("存储零字节的保留消息。")])]),v._v(" "),_("tr",[_("td",[v._v("[MQTT-3.3.1-12]")]),v._v(" "),_("td",[v._v("如果客户端发给服务端的PUBLISH报文的保留标志位0，服务端"),_("strong",[v._v("不能")]),v._v("存储这个消息也"),_("strong",[v._v("不能")]),v._v("移除或替换任何现存的保留消息。")])]),v._v(" "),_("tr",[_("td",[v._v("[MQTT-3.3.2-1]")]),v._v(" "),_("td",[v._v("主题名"),_("strong",[v._v("必须")]),v._v("是PUBLISH报文可变报头的第一个字段。它"),_("strong",[v._v("必须")]),v._v("是 1.5.3节定义的UTF-8编码的字符串。")])]),v._v(" "),_("tr",[_("td",[v._v("[MQTT-3.3.2-2]")]),v._v(" "),_("td",[v._v("PUBLISH报文中的主题名"),_("strong",[v._v("不能")]),v._v("包含通配符。")])]),v._v(" "),_("tr",[_("td",[v._v("[MQTT-3.3.2-3]")]),v._v(" "),_("td",[v._v("服务端发送给订阅客户端的PUBLISH报文的主题名"),_("strong",[v._v("必须")]),v._v("匹配该订阅的主题过滤器（根据 4.7节定义的匹配过程）。")])]),v._v(" "),_("tr",[_("td",[v._v("[MQTT-3.3.4-1]")]),v._v(" "),_("td",[v._v("PUBLISH报文的接收者"),_("strong",[v._v("必须")]),v._v("按照根据PUBLISH报文中的QoS等级发送响应，见表格3.4的描述。")])]),v._v(" "),_("tr",[_("td",[v._v("[MQTT-3.3.5-1]")]),v._v(" "),_("td",[v._v("服务端"),_("strong",[v._v("必须")]),v._v("将消息分发给所有订阅匹配的QoS等级最高的客户端。")])]),v._v(" "),_("tr",[_("td",[v._v("[MQTT-3.3.5-2]")]),v._v(" "),_("td",[v._v("如果服务端实现不授权某个客户端发布PUBLISH报文，它没有办法通知那个客户端。它"),_("strong",[v._v("必须")]),v._v("按照正常的QoS规则发送一个正面的确认，或者关闭网络连接。")])]),v._v(" "),_("tr",[_("td",[v._v("[MQTT-3.6.1-1]")]),v._v(" "),_("td",[v._v("PUBREL控制报文固定报头的第3,2,1,0位是保留位，"),_("strong",[v._v("必须")]),v._v("被设置为0,0,1,0。服务端"),_("strong",[v._v("必须")]),v._v("将其它的任何值都当做是不合法的并关闭网络连接。")])]),v._v(" "),_("tr",[_("td",[v._v("[MQTT-3.8.1-1]")]),v._v(" "),_("td",[v._v("SUBSCRIBE控制报固定报头的第3,2,1,0位是保留位，"),_("strong",[v._v("必须")]),v._v("分别设置为0,0,1,0。服务端"),_("strong",[v._v("必须")]),v._v("将其它的任何值都当做是不合法的并关闭网络连接。")])]),v._v(" "),_("tr",[_("td",[v._v("[MQTT-3.8.3-1]")]),v._v(" "),_("td",[v._v("SUBSCRIBE报文有效载荷中的主题过滤器列表"),_("strong",[v._v("必须")]),v._v("是1.5.3节定义的UTF-8字符串。")])]),v._v(" "),_("tr",[_("td",[v._v("[MQTT-3.8.3-2]")]),v._v(" "),_("td",[v._v("如果服务端选择不支持包含通配符的主题过滤器，"),_("strong",[v._v("必须")]),v._v("拒绝任何包含通配符过滤器的订阅请求。")])]),v._v(" "),_("tr",[_("td",[v._v("[MQTT-3.8.3-3]")]),v._v(" "),_("td",[v._v("SUBSCRIBE报文的有效载荷"),_("strong",[v._v("必须")]),v._v("包含至少一对主题过滤器 和 QoS等级字段组合。没有有效载荷的SUBSCRIBE报文是违反协议的。")])]),v._v(" "),_("tr",[_("td",[v._v("[MQTT-3-8.3-4]")]),v._v(" "),_("td",[v._v("如果有效载荷中的任何位是非零值，或者QoS不等于0,1或2，服务端"),_("strong",[v._v("必须")]),v._v("认为SUBSCRIBE报文是不合法的并关闭网络连接。")])]),v._v(" "),_("tr",[_("td",[v._v("[MQTT-3.8.4-1]")]),v._v(" "),_("td",[v._v("服务端收到客户端发送的一个SUBSCRIBE报文时，"),_("strong",[v._v("必须")]),v._v("使用SUBACK报文响应。")])]),v._v(" "),_("tr",[_("td",[v._v("[MQTT-3.8.4-2]")]),v._v(" "),_("td",[v._v("SUBACK报文"),_("strong",[v._v("必须")]),v._v("和等待确认的SUBSCRIBE报文有相同的报文标识符。")])]),v._v(" "),_("tr",[_("td",[v._v("[MQTT-3.8.4-3]")]),v._v(" "),_("td",[v._v("如果服务端收到一个SUBSCRIBE报文，报文的主题过滤器与一个现存订阅的主题过滤器相同，那么"),_("strong",[v._v("必须")]),v._v("使用新的订阅彻底替换现存的订阅。新订阅的主题过滤器和之前订阅的相同，但是它的最大QoS值可以不同。与这个主题过滤器匹配的任何现存的保留消息"),_("strong",[v._v("必须")]),v._v("被重发，但是发布流程"),_("strong",[v._v("不能")]),v._v("中断。")])]),v._v(" "),_("tr",[_("td",[v._v("[MQTT-3.8.4-4]")]),v._v(" "),_("td",[v._v("如果服务端收到包含多个主题过滤器的SUBSCRIBE报文，它"),_("strong",[v._v("必须")]),v._v("如同收到了一系列的多个SUBSCRIBE报文一样处理那个，除了需要将它们的响应合并到一个单独的SUBACK报文发送。")])]),v._v(" "),_("tr",[_("td",[v._v("[MQTT-3.8.4-5]")]),v._v(" "),_("td",[v._v("服务端发送给客户端的SUBACK报文对每一对主题过滤器 和QoS等级都"),_("strong",[v._v("必须")]),v._v("包含一个返回码。这个返回码"),_("strong",[v._v("必须")]),v._v("表示那个订阅被授予的最大QoS等级，或者表示这个订阅失败。")])]),v._v(" "),_("tr",[_("td",[v._v("[MQTT-3.8.4-6]")]),v._v(" "),_("td",[v._v("服务端可以授予比订阅者要求的低一些的QoS等级。为响应订阅而发出的消息的有效载荷的QoS"),_("strong",[v._v("必须")]),v._v("是原始发布消息的QoS和服务端授予的QoS两者中的最小值。如果原始消息的QoS是1而被授予的最大QoS是0，允许服务端重复发送一个消息的副本给订阅者。")])]),v._v(" "),_("tr",[_("td",[v._v("[MQTT-3.9.3-1]")]),v._v(" "),_("td",[v._v("返回码的顺序"),_("strong",[v._v("必须")]),v._v("和SUBSCRIBE报文中主题过滤器的顺序相同。")])]),v._v(" "),_("tr",[_("td",[v._v("[MQTT-3.9.3-2]")]),v._v(" "),_("td",[v._v("0x00, 0x01, 0x02, 0x80之外的SUBACK返回码是保留的，"),_("strong",[v._v("不能")]),v._v("使用。")])]),v._v(" "),_("tr",[_("td",[v._v("[MQTT-3.10.1-1]")]),v._v(" "),_("td",[v._v("UNSUBSCRIBE报文固定报头的第3,2,1,0位是保留位且"),_("strong",[v._v("必须")]),v._v("分别设置为0,0,1,0。服务端"),_("strong",[v._v("必须")]),v._v("认为任何其它的值都是不合法的并关闭网络连接。")])]),v._v(" "),_("tr",[_("td",[v._v("[MQTT-3.10.3-1]")]),v._v(" "),_("td",[v._v("UNSUBSCRIBE报文中的主题过滤器"),_("strong",[v._v("必须")]),v._v("是连续打包的、按照1.5.3节定义的UTF-8编码字符串。")])]),v._v(" "),_("tr",[_("td",[v._v("[MQTT-3.10.3-2]")]),v._v(" "),_("td",[v._v("UNSUBSCRIBE报文的有效载荷"),_("strong",[v._v("必须")]),v._v("至少包含一个消息过滤器。没有有效载荷的UNSUBSCRIBE报文是违反协议的。")])]),v._v(" "),_("tr",[_("td",[v._v("[MQTT-3.10.4-1]")]),v._v(" "),_("td",[v._v("UNSUBSCRIBE报文提供的主题过滤器（无论是否包含通配符）"),_("strong",[v._v("必须")]),v._v("与服务端持有的这个客户端的当前主题过滤器集合逐个字符比较。如果有任何过滤器完全匹配，那么它（服务端）自己的订阅将被删除，否则不会有进一步的处理。")])]),v._v(" "),_("tr",[_("td",[v._v("[MQTT-3.10.4-2]")]),v._v(" "),_("td",[v._v("如果服务端删除了一个订阅，它"),_("strong",[v._v("必须")]),v._v("停止分发任何新消息给这个客户端。")])]),v._v(" "),_("tr",[_("td",[v._v("[MQTT-3.10.4-3]")]),v._v(" "),_("td",[v._v("如果服务端删除了一个订阅，它"),_("strong",[v._v("必须")]),v._v("完成分发任何已经开始往客户端发送的QoS 1和QoS 2的消息。")])]),v._v(" "),_("tr",[_("td",[v._v("[MQTT-3.10.4-4]")]),v._v(" "),_("td",[v._v("服务端"),_("strong",[v._v("必须")]),v._v("发送UNSUBACK报文响应客户端的UNSUBSCRIBE请求。UNSUBACK报文"),_("strong",[v._v("必须")]),v._v("包含和UNSUBSCRIBE报文相同的报文标识符。")])]),v._v(" "),_("tr",[_("td",[v._v("[MQTT-3.10.4-5]")]),v._v(" "),_("td",[v._v("即使没有删除任何主题订阅，服务端也"),_("strong",[v._v("必须")]),v._v("发送一个SUBACK响应。")])]),v._v(" "),_("tr",[_("td",[v._v("[MQTT-3.10.4-6]")]),v._v(" "),_("td",[v._v("如果服务端收到包含多个主题过滤器的UNSUBSCRIBE报文，它"),_("strong",[v._v("必须")]),v._v("如同收到了一系列的多个UNSUBSCRIBE报文一样处理那个报文，除了将它们的响应合并到一个单独的UNSUBACK报文外。")])]),v._v(" "),_("tr",[_("td",[v._v("[MQTT-3.12.4-1]")]),v._v(" "),_("td",[v._v("服务端"),_("strong",[v._v("必须")]),v._v("发送 PINGRESP报文响应客户端的PINGREQ报文。")])]),v._v(" "),_("tr",[_("td",[v._v("[MQTT-3.14.1-1]")]),v._v(" "),_("td",[v._v("服务端"),_("strong",[v._v("必须")]),v._v("验证所有的保留位都被设置为0，如果它们不为0"),_("strong",[v._v("必须")]),v._v("断开连接。")])]),v._v(" "),_("tr",[_("td",[v._v("[MQTT-3.14.4-1]")]),v._v(" "),_("td",[v._v("客户端发送DISCONNECT报文之后，"),_("strong",[v._v("必须")]),v._v("关闭网络连接。")])]),v._v(" "),_("tr",[_("td",[v._v("[MQTT-3.14.4-2]")]),v._v(" "),_("td",[v._v("客户端发送DISCONNECT报文之后，"),_("strong",[v._v("不能")]),v._v("通过那个网络连接再发送任何控制报文。")])]),v._v(" "),_("tr",[_("td",[v._v("[MQTT-3.14.4-3]")]),v._v(" "),_("td",[v._v("服务端收到DISCONNECT报文时，"),_("strong",[v._v("必须")]),v._v("丢弃任何与当前连接关联的未发布的遗嘱消息，具体描述见 3.1.2.5节。")])]),v._v(" "),_("tr",[_("td",[v._v("[MQTT-4.1.0-1]")]),v._v(" "),_("td",[v._v("在整个会话期间，客户端和服务端都"),_("strong",[v._v("必须")]),v._v("存储会话状态。")])]),v._v(" "),_("tr",[_("td",[v._v("[MQTT-4.1.0-2]")]),v._v(" "),_("td",[v._v("会话"),_("strong",[v._v("必须")]),v._v("至少持续和它的活跃网络连接同样长的时间。")])]),v._v(" "),_("tr",[_("td",[v._v("[MQTT-4.3.1-1]")]),v._v(" "),_("td",[v._v("对于QoS 0的分发协议，发送者"),_("strong",[v._v("必须")]),v._v("发送QoS等于0，DUP等于0的PUBLISH报文。")])]),v._v(" "),_("tr",[_("td",[v._v("[MQTT-4.4.0-1]")]),v._v(" "),_("td",[v._v("客户端设置清理会话（CleanSession）标志为0重连时，客户端和服务端"),_("strong",[v._v("必须")]),v._v("使用原始的报文标识符重发任何未确认的PUBLISH报文（如果QoS>0）和PUBREL报文。")])]),v._v(" "),_("tr",[_("td",[v._v("[MQTT-4.5.0-1]")]),v._v(" "),_("td",[v._v("服务端接管入站应用消息的所有权时，它"),_("strong",[v._v("必须")]),v._v("将消息添加到订阅匹配的客户端的会话状态中。匹配规则定义见 4.7节。")])]),v._v(" "),_("tr",[_("td",[v._v("[MQTT-4.5.0-2]")]),v._v(" "),_("td",[v._v("客户端"),_("strong",[v._v("必须")]),v._v("按照可用的服务质量（QoS）规则确认它收到的任何PUBLISH报文，不管它选择是否处理报文包含的应用消息。")])]),v._v(" "),_("tr",[_("td",[v._v("[MQTT-4.6.0-1]")]),v._v(" "),_("td",[v._v("重发任何之前的PUBLISH报文时，"),_("strong",[v._v("必须")]),v._v("按原始PUBLISH报文的发送顺序重发（适用于QoS 1和QoS 2消息）。")])]),v._v(" "),_("tr",[_("td",[v._v("[MQTT-4.6.0-2]")]),v._v(" "),_("td",[_("strong",[v._v("必须")]),v._v("按照对应的PUBLISH报文的顺序发送PUBACK报文（QoS 1消息）。")])]),v._v(" "),_("tr",[_("td",[v._v("[MQTT-4.6.0-3]")]),v._v(" "),_("td",[_("strong",[v._v("必须")]),v._v("按照对应的PUBLISH报文的顺序发送PUBREC报文（QoS 2消息）。")])]),v._v(" "),_("tr",[_("td",[v._v("[MQTT-4.6.0-4]")]),v._v(" "),_("td",[_("strong",[v._v("必须")]),v._v("按照对应的PUBREC报文的顺序发送PUBREL报文（QoS 2消息）。")])]),v._v(" "),_("tr",[_("td",[v._v("[MQTT-4.6.0-5]")]),v._v(" "),_("td",[v._v("服务端"),_("strong",[v._v("必须")]),v._v("默认认为每个主题都是有序的。它"),_("strong",[v._v("可以")]),v._v("提供一个管理功能或其它机制，以允许将一个或多个主题当作是"),_("strong",[v._v("无序的")]),v._v("。")])]),v._v(" "),_("tr",[_("td",[v._v("[MQTT-4.6.0-6]")]),v._v(" "),_("td",[v._v("服务端处理发送给有序主题的消息时，"),_("strong",[v._v("必须")]),v._v("按照上面的规则将消息分发给每个订阅者。此外，它"),_("strong",[v._v("必须")]),v._v("按照从客户端收到的顺序发送PUBLISH报文给消费者（对相同的主题和QoS）。")])]),v._v(" "),_("tr",[_("td",[v._v("[MQTT-4.7.1-1]")]),v._v(" "),_("td",[v._v("主题过滤器中可以使用通配符，但是主题名"),_("strong",[v._v("不能")]),v._v("使用通配符。")])]),v._v(" "),_("tr",[_("td",[v._v("[MQTT-4.7.1-2]")]),v._v(" "),_("td",[v._v("多层通配符必须位于它自己的层级或者跟在主题层级分隔符后面。不管哪种情况，它都"),_("strong",[v._v("必须")]),v._v("是主题过滤器的最后一个字符。")])]),v._v(" "),_("tr",[_("td",[v._v("[MQTT-4.7.1-3]")]),v._v(" "),_("td",[v._v("在主题过滤器的任意层级都可以使用单层通配符，包括第一个和最后一个层级。然而它"),_("strong",[v._v("必须")]),v._v("占据过滤器的整个层级。")])]),v._v(" "),_("tr",[_("td",[v._v("[MQTT-4.7.2-1]")]),v._v(" "),_("td",[v._v("服务端"),_("strong",[v._v("不能")]),v._v("将 $ 字符开头的主题名匹配通配符 (#或+) 开头的主题过滤器。")])]),v._v(" "),_("tr",[_("td",[v._v("[MQTT-4.7.3-1]")]),v._v(" "),_("td",[v._v("所有的主题名和主题过滤器"),_("strong",[v._v("必须")]),v._v("至少包含一个字符。")])]),v._v(" "),_("tr",[_("td",[v._v("[MQTT-4.7.3-2]")]),v._v(" "),_("td",[v._v("主题名和主题过滤器"),_("strong",[v._v("不能")]),v._v("包含空字符 (Unicode U+0000) ["),_("a",{attrs:{href:"#Unicode"}},[v._v("Unicode")]),v._v("] 。")])]),v._v(" "),_("tr",[_("td",[v._v("[MQTT-4.7.3-3]")]),v._v(" "),_("td",[v._v("主题名和主题过滤器是UTF-8编码字符串，它们"),_("strong",[v._v("不能")]),v._v("超过65535字节。")])]),v._v(" "),_("tr",[_("td",[v._v("[MQTT-4.7.3-4]")]),v._v(" "),_("td",[v._v("匹配订阅时，服务端"),_("strong",[v._v("不能")]),v._v("对主题名或主题过滤器执行任何规范化（normalization）处理，不能修改或替换任何未识别的字符。")])]),v._v(" "),_("tr",[_("td",[v._v("[MQTT-4.8.0-1]")]),v._v(" "),_("td",[v._v("除非另有说明，如果服务端或客户端遇到了协议违规的行为，它"),_("strong",[v._v("必须")]),v._v("关闭传输这个协议违规控制报文的网络连接。")])]),v._v(" "),_("tr",[_("td",[v._v("[MQTT-4.8.0-2]")]),v._v(" "),_("td",[v._v("如果客户端或服务端处理入站控制报文时遇到了瞬时错误，它"),_("strong",[v._v("必须")]),v._v("关闭传输那个控制报文的网络连接。")])]),v._v(" "),_("tr",[_("td",[v._v("[MQTT-6.0.0-1]")]),v._v(" "),_("td",[v._v("MQTT控制报文"),_("strong",[v._v("必须")]),v._v("使用WebSocket二进制数据帧发送。如果收到任何其它类型的数据帧，接收者"),_("strong",[v._v("必须")]),v._v("关闭网络连接。")])]),v._v(" "),_("tr",[_("td",[v._v("[MQTT-6.0.0-2]")]),v._v(" "),_("td",[v._v("单个WebSocket数据帧可以包含多个或者部分MQTT报文。接收者"),_("strong",[v._v("不能")]),v._v("假设MQTT控制报文按WebSocket帧边界对齐。")])]),v._v(" "),_("tr",[_("td",[v._v("[MQTT-6.0.0-3]")]),v._v(" "),_("td",[v._v("客户端"),_("strong",[v._v("必须")]),v._v("将字符串 "),_("strong",[v._v("mqtt")]),v._v(" 包含在它提供的WebSocket子协议列表里。")])]),v._v(" "),_("tr",[_("td",[v._v("[MQTT-6.0.0-4]")]),v._v(" "),_("td",[v._v("服务端选择和返回的WebSocket子协议名"),_("strong",[v._v("必须")]),v._v("是 "),_("strong",[v._v("mqtt")])])]),v._v(" "),_("tr",[_("td",[v._v("[MQTT-7.0.0-1]")]),v._v(" "),_("td",[v._v("MQTT实现可以同时是MQTT客户端和MQTT服务端。接受入站连接和建立到其它服务端的出站连接的服务端必须同时符合MQTT客户端和MQTT服务端的要求。")])]),v._v(" "),_("tr",[_("td",[v._v("[MQTT-7.0.0-2]")]),v._v(" "),_("td",[v._v("为了与任何其它的一致性实现交互操作，一致性实现不能要求使用在本规范之外定义的任何扩展。")])]),v._v(" "),_("tr",[_("td",[v._v("[MQTT-7.1.1-1]")]),v._v(" "),_("td",[v._v("满足一致性要求的服务端"),_("strong",[v._v("必须")]),v._v("支持使用一个或多个底层传输协议，只要它提供有序的、可靠的、双向字节流（从客户端到服务端和从服务端到客户端）")])]),v._v(" "),_("tr",[_("td",[v._v("[MQTT-7.1.2-1]")]),v._v(" "),_("td",[v._v("满足一致性要求的客户端"),_("strong",[v._v("必须")]),v._v("支持使用一个或多个底层传输协议，只要它提供有序的、可靠的、双向字节流（从客户端到服务端和从服务端到客户端）")])])])]),v._v(" "),_("h3",{attrs:{id:"关于qos的补充说明"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#关于qos的补充说明"}},[v._v("#")]),v._v(" 关于QoS的补充说明")]),v._v(" "),_("h4",{attrs:{id:"mqtt-4-3-2-1-对于qos-1的分发协议-发送者"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#mqtt-4-3-2-1-对于qos-1的分发协议-发送者"}},[v._v("#")]),v._v(" [MQTT-4.3.2-1] 对于QoS 1的分发协议，发送者")]),v._v(" "),_("ul",[_("li",[v._v("每次发送新的应用消息都"),_("strong",[v._v("必须")]),v._v("分配一个未使用的报文标识符。")]),v._v(" "),_("li",[v._v("MUST send a PUBLISH Packet containing this Packet Identifier with QoS=1, DUP=0.")]),v._v(" "),_("li",[v._v("发送的PUBLISH报文"),_("strong",[v._v("必须")]),v._v("包含报文标识符且QoS等于1，DUP等于0。")]),v._v(" "),_("li",[_("strong",[v._v("必须")]),v._v("将这个PUBLISH报文看作是 "),_("em",[v._v("未确认的")]),v._v(" ，直到从接收者那收到对应的PUBACK报文。4.4节有一个关于未确认消息的讨论。")])]),v._v(" "),_("h4",{attrs:{id:"mqtt-4-3-2-2-对于qos-1的分发协议-接收者"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#mqtt-4-3-2-2-对于qos-1的分发协议-接收者"}},[v._v("#")]),v._v(" [MQTT-4.3.2-2] 对于QoS 1的分发协议，接收者")]),v._v(" "),_("ul",[_("li",[v._v("响应的PUBACK报文"),_("strong",[v._v("必须")]),v._v("包含一个报文标识符，这个标识符来自接收到的、已经接受所有权的PUBLISH报文。")]),v._v(" "),_("li",[v._v("发送了PUBACK报文之后，接收者必须将任何包含相同报文标识符的入站PUBLISH报文当作一个新的消息，并忽略它的DUP标志的值。")])]),v._v(" "),_("h4",{attrs:{id:"mqtt-4-3-3-1-对于qos-2的分发协议-发送者"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#mqtt-4-3-3-1-对于qos-2的分发协议-发送者"}},[v._v("#")]),v._v(" [MQTT-4.3.3-1] 对于QoS 2的分发协议，发送者")]),v._v(" "),_("ul",[_("li",[v._v("必须给要发送的新应用消息分配一个未使用的报文标识符。")]),v._v(" "),_("li",[v._v("MUST send a PUBLISH packet containing this Packet Identifier with QoS=2, DUP=0.")]),v._v(" "),_("li",[v._v("发送的PUBLISH报文"),_("strong",[v._v("必须")]),v._v("包含报文标识符且报文的QoS等于2,，DUP等于0。")]),v._v(" "),_("li",[_("strong",[v._v("必须")]),v._v("将这个PUBLISH报文看作是 "),_("em",[v._v("未确认的")]),v._v(" ，直到从接收者那收到对应的PUBREC报文。4.4节有一个关于未确认消息的讨论。")]),v._v(" "),_("li",[v._v("收到PUBREC报文后"),_("strong",[v._v("必须")]),v._v("发送一个PUBREL报文。PUBREL报文必须包含与原始PUBLISH报文相同的报文标识符。")]),v._v(" "),_("li",[_("strong",[v._v("必须")]),v._v("将这个PUBREL报文看作是 "),_("em",[v._v("未确认的")]),v._v(" ，直到从接收者那收到对应的PUBCOMP报文。")]),v._v(" "),_("li",[v._v("一旦发送了对应的PUBREL报文就"),_("strong",[v._v("不能")]),v._v("重发这个PUBLISH报文。")])]),v._v(" "),_("h4",{attrs:{id:"mqtt-4-3-3-2-对于qos-2的分发协议-接收者"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#mqtt-4-3-3-2-对于qos-2的分发协议-接收者"}},[v._v("#")]),v._v(" [MQTT-4.3.3-2] 对于QoS 2的分发协议，接收者")]),v._v(" "),_("ul",[_("li",[v._v("响应的PUBREC报文"),_("strong",[v._v("必须")]),v._v("包含报文标识符，这个标识符来自接收到的、已经接受所有权的PUBLISH报文。")]),v._v(" "),_("li",[v._v("在收到对应的PUBREL报文之前，接收者"),_("strong",[v._v("必须")]),v._v("发送PUBREC报文确认任何后续的具有相同标识符的PUBLISH报文。 在这种情况下，它"),_("strong",[v._v("不能")]),v._v("重复分发消息给任何后续的接收者。")]),v._v(" "),_("li",[v._v("响应PUBREL报文的PUBCOMP报文"),_("strong",[v._v("必须")]),v._v("包含与PUBREL报文相同的标识符。")]),v._v(" "),_("li",[v._v("发送PUBCOMP报文之后，接收者必须将包含相同报文标识符的任何后续PUBLISH报文当作一个新的发布。")])])])}),[],!1,null,null,null);_.default=T.exports}}]);