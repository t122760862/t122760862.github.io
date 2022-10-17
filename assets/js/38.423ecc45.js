(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{304:function(v,_,t){"use strict";t.r(_);var s=t(13),a=Object(s.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h2",{attrs:{id:"_1-真实地址查询-dns解析"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-真实地址查询-dns解析"}},[v._v("#")]),v._v(" 1. 真实地址查询 => dns解析")]),v._v(" "),_("div",{staticClass:"language- line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[v._v("dns`: 全称`domain name server\n")])]),v._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[v._v("1")]),_("br")])]),_("p",[_("code",[v._v("dns")]),v._v(": 专门用来保存域名与ip之间的对应关系")]),v._v(" "),_("h3",{attrs:{id:"域名的层级关系"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#域名的层级关系"}},[v._v("#")]),v._v(" 域名的层级关系")]),v._v(" "),_("p",[v._v("域名用"),_("code",[v._v(".")]),v._v("来分隔, 越靠右层级越高, 最右边的为根域, 其次为顶级域名")]),v._v(" "),_("ul",[_("li",[_("p",[v._v("根域名")])]),v._v(" "),_("li",[_("p",[v._v("顶级域名(com, net等)")])]),v._v(" "),_("li",[_("p",[v._v("权威域名(baidu.com)")])])]),v._v(" "),_("p",[_("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/t122760862/blogimg@main/%E9%A1%B6%E7%BA%A7%E5%9F%9F%E5%90%8D.jpg",alt:""}})]),v._v(" "),_("p",[v._v("根域的"),_("code",[v._v("dns")]),v._v("服务器信息保存互联网中任何一个"),_("code",[v._v("dns")]),v._v("服务器中")]),v._v(" "),_("p",[v._v("因此客户端可以通过任何一台"),_("code",[v._v("dns")]),v._v("服务器,找到根域"),_("code",[v._v("dns")]),v._v("服务器,再顺藤摸瓜找到下层的某台服务器")]),v._v(" "),_("blockquote",[_("ul",[_("li",[v._v("全球一共13台"),_("code",[v._v("dns")]),v._v("根服务器")])])]),v._v(" "),_("h3",{attrs:{id:"域名的解析过程"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#域名的解析过程"}},[v._v("#")]),v._v(" 域名的解析过程")]),v._v(" "),_("p",[_("code",[v._v("dns")]),v._v("请求 => host => 根域 => 顶级域名 => 权威域名")]),v._v(" "),_("p",[_("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/t122760862/blogimg@main/202210171048194.png",alt:""}})]),v._v(" "),_("p",[_("code",[v._v("dns")]),v._v("域名的解析过程,简单来说"),_("strong",[v._v("只指路,不带路")])]),v._v(" "),_("blockquote",[_("ul",[_("li",[v._v("客户端向本地"),_("code",[v._v("dns")]),v._v("服务器查询为递归查询")]),v._v(" "),_("li",[v._v("本地"),_("code",[v._v("dns")]),v._v("服务器向外网为迭代查询")]),v._v(" "),_("li",[v._v("递归: 客户端只发一次请求,要求对方给出最终结果")]),v._v(" "),_("li",[v._v("迭代: 客户端发送一次请求,对方如果没有返回结果则返回一个能解答这个查询的其他服务器地址,客户端会向返回的地址继续发送请求,知道得到结果")]),v._v(" "),_("li",[v._v("授权回答: 向"),_("code",[v._v("dns")]),v._v("服务器发送一个请求,刚好由当前服务器负责,返回的结果就是授权回答")])])]),v._v(" "),_("h3",{attrs:{id:"协议栈"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#协议栈"}},[v._v("#")]),v._v(" 协议栈")]),v._v(" "),_("p",[v._v("通过"),_("code",[v._v("dns")]),v._v("获取到"),_("code",[v._v("ip")]),v._v("地址后,接下来会把http的传输工作交给"),_("code",[v._v("协议栈")])]),v._v(" "),_("p",[v._v("协议栈的内部分为几个部分,分别承担不同的工作.上面的部分委托工作给下面的部分,下面的部分负责执行")]),v._v(" "),_("p",[_("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/t122760862/blogimg@main/202210171050496.png",alt:""}})]),v._v(" "),_("p",[v._v("应用程序负责调用socket库来委托协议栈工作.协议栈的上部分有两块,分别是负责收发数据的tcp,udp协议,它们两会接受应用层的委托来执行收发数据的操作")]),v._v(" "),_("p",[v._v("协议栈的下半部分是用ip协议控制网络包的收发工作,在网络数据传输中,数据包会被切割成一块一块的网络包,而将网络包发送给对方的操作由ip负责")]),v._v(" "),_("p",[v._v("此外ip中还包括了"),_("code",[v._v("ICMP")]),v._v("协议和"),_("code",[v._v("ARP")]),v._v("协议")]),v._v(" "),_("blockquote",[_("p",[_("code",[v._v("ICMP")]),v._v(": 用来告知网络包传输的过程中产生的错误信息\n"),_("code",[v._v("ARP")]),v._v(": 用于根据IP地址定位相应的以太网MAC地址")])]),v._v(" "),_("p",[v._v("ip下面的网卡驱动程序用来控制网卡设备硬件,而最下面的网卡则完成实际的收发工作")]),v._v(" "),_("h2",{attrs:{id:"_2-建立http-https连接"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-建立http-https连接"}},[v._v("#")]),v._v(" 2. 建立http/https连接")]),v._v(" "),_("h3",{attrs:{id:"tcp"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#tcp"}},[v._v("#")]),v._v(" tcp")]),v._v(" "),_("p",[v._v("tcp报文头部格式")]),v._v(" "),_("p",[_("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/t122760862/blogimg@main/202210171052232.png",alt:""}})]),v._v(" "),_("ul",[_("li",[_("p",[v._v("源端口和目标端口是必不可少的,代表收发方")])]),v._v(" "),_("li",[_("p",[v._v("序列是为了重新排列,防止包乱序")])]),v._v(" "),_("li",[_("p",[v._v("确定序列是为了解决丢包问题,确定包被对方收到,如果没收到进行重新发送")])]),v._v(" "),_("li",[_("p",[v._v("一些状态位: "),_("code",[v._v("SYN")]),v._v("是发起连接, "),_("code",[v._v("ACK")]),v._v("是回复, "),_("code",[v._v("FIN")]),v._v("结束连接, "),_("code",[v._v("RST")]),v._v("重新连接,tcp是面向连接的,这些标志位会引起双方连接状态的变更")])]),v._v(" "),_("li",[_("p",[v._v("窗口大小是用来做"),_("strong",[v._v("流量控制")]),v._v(", 双方各声明一个窗口(缓存大小),来表示当前能处理的能力,不要饿死也不要饱死")])]),v._v(" "),_("li",[_("p",[v._v("tcp会做"),_("strong",[v._v("拥塞控制")]),v._v(", 限制自己的发送的速度")])])]),v._v(" "),_("h3",{attrs:{id:"三次握手"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#三次握手"}},[v._v("#")]),v._v(" 三次握手")]),v._v(" "),_("p",[v._v("HTTP在传输数据前,首先要进行tcp的链接,一般称为3次握手")]),v._v(" "),_("p",[v._v("所谓的连接,其实是双方维持一个状态机,在连接的过程中,状态变化的时序图如下:")]),v._v(" "),_("p",[_("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/t122760862/blogimg@main/202210171053712.png",alt:""}})]),v._v(" "),_("ol",[_("li",[_("p",[v._v("首先客户端和服务端都处于"),_("code",[v._v("close")]),v._v("状态, 服务端对端口进行监听,变成"),_("code",[v._v("listen")]),v._v("状态")])]),v._v(" "),_("li",[_("p",[v._v("客服端发起连接请求"),_("code",[v._v("SYN")]),v._v(",之后处于"),_("code",[v._v("syn-sent")]),v._v("等待连接状态")])]),v._v(" "),_("li",[_("p",[v._v("服务端"),_("code",[v._v("ACK")]),v._v("客户端的"),_("code",[v._v("SYN")]),v._v(",并向客户端发送"),_("code",[v._v("SYN")]),v._v(",之后处于"),_("code",[v._v("syn-rcvd")]),v._v("等待对连接请求的确认状态")])]),v._v(" "),_("li",[_("p",[v._v("客户端"),_("code",[v._v("ACK")]),v._v("服务端的"),_("code",[v._v("ACK")]),v._v(",完成一发一收,之后处于"),_("code",[v._v("established")]),v._v("连接状态")])]),v._v(" "),_("li",[_("p",[v._v("服务端收到"),_("code",[v._v("ACK")]),v._v("的"),_("code",[v._v("ACK")]),v._v("后,完成一收一发,处于"),_("code",[v._v("established")]),v._v("连接状态")])])]),v._v(" "),_("p",[v._v("三次握手的目的是为了保证双方都有收发能力")]),v._v(" "),_("h2",{attrs:{id:"_3-进行数据传输"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-进行数据传输"}},[v._v("#")]),v._v(" 3. 进行数据传输")]),v._v(" "),_("h3",{attrs:{id:"tcp-分割数据"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#tcp-分割数据"}},[v._v("#")]),v._v(" tcp 分割数据")]),v._v(" "),_("p",[v._v("如果http的信息过长,超过了"),_("code",[v._v("MSS")]),v._v("的长度,tcp会对数据进行切割,而不是一次性发送")]),v._v(" "),_("p",[_("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/t122760862/blogimg@main/202210171053909.png",alt:""}})]),v._v(" "),_("p",[_("code",[v._v("MTU")]),v._v(": 全称"),_("code",[v._v("Maximum Transmission Unit")]),v._v(",一个网络包的最大长度,以太网中一般为1500字节,包括ip头部,tcp头部以及数据")]),v._v(" "),_("p",[_("code",[v._v("MSS")]),v._v(": 除ip头部以及tcp头部之后,一个网络包能包含数据的最大长度")]),v._v(" "),_("p",[v._v("数据会被以"),_("code",[v._v("MSS")]),v._v("长度的单位进行分割,然后添加tcp头部,交给ip模块进行传输,形成单独的网络包")]),v._v(" "),_("p",[_("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/t122760862/blogimg@main/202210171053747.png",alt:""}})]),v._v(" "),_("h3",{attrs:{id:"tcp-报文生成"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#tcp-报文生成"}},[v._v("#")]),v._v(" tcp 报文生成")]),v._v(" "),_("p",[v._v("tcp的数据部分用来存放http头部+数据,组装好tcp报文后交给网络层进行处理.至此,网络包的结构如下:")]),v._v(" "),_("p",[_("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/t122760862/blogimg@main/202210171054888.png",alt:""}})]),v._v(" "),_("h3",{attrs:{id:"ip-远程定位"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#ip-远程定位"}},[v._v("#")]),v._v(" ip => 远程定位")]),v._v(" "),_("p",[v._v("tcp模块在执行收发,连接,断开等阶段的操作时,都需要委托ip模块将数据包封装成网络包发送给通信对象")]),v._v(" "),_("p",[v._v("IP包头格式:")]),v._v(" "),_("p",[_("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/t122760862/blogimg@main/202210171057743.png",alt:""}})]),v._v(" "),_("p",[v._v("ip协议里需要有源地址ip和目标地址ip")]),v._v(" "),_("blockquote",[_("p",[v._v("源地址ip: 发送端客户端地址ip")])]),v._v(" "),_("blockquote",[_("p",[v._v("目标地址ip: 通过dns解析获取的接收方地址ip")])]),v._v(" "),_("p",[v._v("因为http是经过tcp传输的,因此在ip包头的协议号要填写"),_("strong",[v._v("06")]),v._v("(16进制),表示协议为tcp")]),v._v(" "),_("p",[v._v("如果有多个网卡,就有多个ip,此时需要路由表来判断源地址ip")]),v._v(" "),_("p",[v._v("至此ip报文生成:")]),v._v(" "),_("p",[_("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/t122760862/blogimg@main/202210171057743.png",alt:""}})]),v._v(" "),_("h3",{attrs:{id:"两点传输-mac地址"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#两点传输-mac地址"}},[v._v("#")]),v._v(" 两点传输 => MAC地址")]),v._v(" "),_("p",[v._v("MAC头部是以太网使用的头部,它包含了发送方和接收方的MAC信息:")]),v._v(" "),_("p",[_("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/t122760862/blogimg@main/202210171100766.png",alt:""}})]),v._v(" "),_("p",[v._v("一般的TCP/IP通讯里,MAC包头的协议类型只使用:")]),v._v(" "),_("blockquote",[_("p",[v._v("0800: IP协议\n0806: ARP协议")])]),v._v(" "),_("p",[v._v("MAC的发送方和接收方如何确定?"),_("br"),v._v(" "),_("strong",[v._v("发送方")]),v._v(":  MAC地址在网卡生产时已经写入了ROM,只要在数据发送时,拿到该数据并插入到MAC头部就行"),_("br"),v._v(" "),_("strong",[v._v("接收方")]),v._v(": 通过ARP协议找到对方的MAC地址")]),v._v(" "),_("p",[_("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/t122760862/blogimg@main/202210171101023.png",alt:""}})]),v._v(" "),_("p",[v._v("ARP协议会以"),_("strong",[v._v("广播")]),v._v("的形式在以太网中寻找MAC地址"),_("br"),v._v("\n并不是每次都会广播,可以对数据进行缓存")]),v._v(" "),_("ul",[_("li",[v._v("先查询"),_("code",[v._v("ARP")]),v._v("缓存,如果有缓存直接读取")]),v._v(" "),_("li",[v._v("如果没有缓存则广播")])]),v._v(" "),_("p",[v._v("至此MAC报文生成:")]),v._v(" "),_("p",[_("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/t122760862/blogimg@main/202210171102321.png",alt:""}})]),v._v(" "),_("h3",{attrs:{id:"网卡"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#网卡"}},[v._v("#")]),v._v(" 网卡")]),v._v(" "),_("p",[v._v("IP生成的网络包只是存在于内存中的电信号,不能直接用来发送.需要使用网卡将数字信号转换为电信号.这才是真正的数据发送过程.")]),v._v(" "),_("p",[v._v("网卡由网卡驱动控制.网卡驱动从ip模块中获取到包之后,会在"),_("strong",[v._v("开始位置加上起始帧分解符,在末尾插入用来检测错误的帧检验序列")])]),v._v(" "),_("p",[_("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/t122760862/blogimg@main/202210171102623.png",alt:""}})]),v._v(" "),_("blockquote",[_("p",[v._v("起始帧分解符是一个用来表示包起始位置的标记"),_("br"),v._v("\n末尾的FCS(帧校验序列)用来检查包传输过程中是否有损坏")])]),v._v(" "),_("p",[v._v("最后网卡会将包转换为电信号,通过网线发出去")]),v._v(" "),_("h3",{attrs:{id:"交换机"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#交换机"}},[v._v("#")]),v._v(" 交换机")]),v._v(" "),_("p",[v._v("交换机是用来将包原样转发到目的地,工作在MAC层,也称为二层网络设备")]),v._v(" "),_("p",[v._v("交换机收到电信号后,会转换为数字信号,通过数据包的FCS(帧校验序列)检验错误,如果没有问题会保存在缓存区.")]),v._v(" "),_("p",[v._v("计算机网卡具有MAC地址,并判断收到的包接受方MAC地址是不是自己,如果不是则丢弃;相对的,"),_("strong",[v._v("交换机没有MAC地址,不核对接收方的MAC地址,会接受所有的包并放到缓冲区内")]),v._v(".")]),v._v(" "),_("p",[v._v("将包放到缓冲区后,会在MAC地址表中查询接收方的MAC地址记录")]),v._v(" "),_("p",[v._v("交换机的MAC地址表包含两个内容:")]),v._v(" "),_("ul",[_("li",[v._v("设备的MAC地址")]),v._v(" "),_("li",[v._v("MAC对应的设备对应的链接端口")])]),v._v(" "),_("p",[_("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/t122760862/blogimg@main/202210171102782.png",alt:""}})]),v._v(" "),_("p",[v._v("总结: 交换机"),_("strong",[v._v("通过MAC地址表查询MAC地址,并发送到对应的端口")])]),v._v(" "),_("p",[v._v("如果MAC地址表找不到对应的MAC信息,可能是第一次接收到,或者被删除记录.这是交换机会将包转发给除源端口外的所有端口.只要有端口做出响应,将记录改MAC地址信息")]),v._v(" "),_("p",[v._v("此外如果MAC地址是一个"),_("strong",[v._v("广播")]),v._v("地址,交换机会发送给除源端口外的所有端口")]),v._v(" "),_("blockquote",[_("p",[v._v("MAC地址中的 "),_("code",[v._v("FF:FF:FF:FF")]),_("br"),v._v("\nIP地址中的 "),_("code",[v._v("255.255.255.255")])])]),v._v(" "),_("h3",{attrs:{id:"路由器"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#路由器"}},[v._v("#")]),v._v(" 路由器")]),v._v(" "),_("p",[v._v("网络包经过交换机之后会到达"),_("strong",[v._v("路由器")]),v._v(",并在此转发给下一个路由器或目标设备")]),v._v(" "),_("p",[v._v("转发过程跟交换机类似,都是通过查表确定下一个转发目标")]),v._v(" "),_("p",[v._v("区别在于:")]),v._v(" "),_("ul",[_("li",[v._v("路由器是基于IP设计的,俗称"),_("strong",[v._v("三层网络设备")]),v._v(",因此每个端口都具有MAC地址和IP地址,从意义上来说,跟网卡一样")]),v._v(" "),_("li",[v._v("交换机是基于以太网设计的, 俗称"),_("strong",[v._v("二层网络设备")]),v._v(",交换机的端口不具有MAC地址和IP地址")])]),v._v(" "),_("p",[v._v("当转发包时,首先路由器会接收发送给自己的包,然后通过"),_("strong",[v._v("路由表")]),v._v("查询转发目标,再由相应的端口作为发送方发送将以太网包发送出去")]),v._v(" "),_("p",[v._v("接收过程:")]),v._v(" "),_("ol",[_("li",[v._v("接收到包时,路由器中的模块会将电信号转换为数字信号,通过包末尾的"),_("code",[v._v("FCS")]),v._v("进行错误校验")]),v._v(" "),_("li",[v._v("检查"),_("code",[v._v("MAC")]),v._v("头部的"),_("code",[v._v("MAC")]),v._v("地址是不是自己,是的话就放缓冲区,不是就丢弃")])]),v._v(" "),_("p",[v._v("接收完成之后,会"),_("code",[v._v("丢弃")]),v._v("包的MAC头部."),_("strong",[v._v("MAC头部的作用就是将包送达路由器")]),v._v(",其中接收方的MAC地址就是路由器端口的MAC地址.")]),v._v(" "),_("p",[v._v("接下来路由器会通过IP头部的IP地址对包进行转发:")]),v._v(" "),_("ol",[_("li",[v._v("查询路由表")]),v._v(" "),_("li",[v._v("根据"),_("strong",[v._v("路由表的网关列")]),v._v("判断对方的地址")])]),v._v(" "),_("ul",[_("li",[v._v("如果网关是一个IP地址,则这个地址是下一次要转发的目标,"),_("strong",[v._v("还未抵达终端")]),v._v(",需要路由器继续转发")]),v._v(" "),_("li",[v._v("如果网关为空,则IP头部的接收方IP地址就是要转发的目的地之,说明"),_("strong",[v._v("抵达终点")])])]),v._v(" "),_("ol",{attrs:{start:"3"}},[_("li",[v._v("知道对方的IP地址后,会通过"),_("code",[v._v("ARP")]),v._v("协议进行广播查询MAC地址,并将查询的过程作为接收方的MAC地址.路由器ARP也具有缓存,查询不到才会发送ARP查询请求")])]),v._v(" "),_("p",[v._v("发送出去的网络包会通过"),_("strong",[v._v("交换机")]),v._v("到达下一个路由器,接下来路由器会将包发送给另一个路由器,经过层层转发,到达最终目的地.")]),v._v(" "),_("h3",{attrs:{id:"互相拆包-服务端与客户端"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#互相拆包-服务端与客户端"}},[v._v("#")]),v._v(" 互相拆包 => 服务端与客户端")]),v._v(" "),_("p",[_("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/t122760862/blogimg@main/202210171103279.png",alt:""}})]),v._v(" "),_("ol",[_("li",[v._v("服务器首先扒开MAC头部,查看是否跟自己的MAC地址符合,符合会接收")]),v._v(" "),_("li",[v._v("扒开IP头部,发现IP地址符合,根据协议知道上层是TCP协议")]),v._v(" "),_("li",[v._v("扒开TCP头部,里面有序列号,确定返回一个ACK,不是则就丢弃.TCP还有端口号,HTTP服务监听该端口号,发送给对应的HTTP进程")]),v._v(" "),_("li",[v._v("HTTP进程响应请求,将数据封装在HTTP响应报文里")]),v._v(" "),_("li",[v._v("HTTP响应报文也需要穿上TCP头部,IP头部,MAC头部,不过这一次发送方和接收方交换")]),v._v(" "),_("li",[v._v("客户端收到响应,进行拆包")])]),v._v(" "),_("h2",{attrs:{id:"_4-断开连接"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_4-断开连接"}},[v._v("#")]),v._v(" 4. 断开连接")]),v._v(" "),_("h3",{attrs:{id:"四次挥手"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#四次挥手"}},[v._v("#")]),v._v(" 四次挥手")]),v._v(" "),_("p",[_("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/t122760862/blogimg@main/202210171103500.png",alt:""}})]),v._v(" "),_("h2",{attrs:{id:"_5-浏览器渲染页面"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_5-浏览器渲染页面"}},[v._v("#")]),v._v(" 5. 浏览器渲染页面")]),v._v(" "),_("p",[_("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/t122760862/blogimg@main/202210171103578.png",alt:""}})]),v._v(" "),_("ol",[_("li",[v._v("将载入的html文件解析成DOM树(DOM tree),并将各个标记标识解析成DOM树的各个节点,同时将CSS文件解析成CSS规则(CSS Rules)")]),v._v(" "),_("li",[v._v("将解析的DOM tree和CSS Rules进行关联,生成渲染书(Render Tree)")]),v._v(" "),_("li",[v._v("进入渲染阶段,为DOM树的每个节点分配屏幕上出现的真实坐标(这一阶段还是在渲染树)")]),v._v(" "),_("li",[v._v("进入绘制阶段,渲染引擎工作结束,对渲染树的每个节点进行绘制,呈现页面")])]),v._v(" "),_("blockquote",[_("p",[v._v("CSS被视为"),_("code",[v._v("渲染阻塞资源(包括js)")]),v._v(",CSS 规则树渲染完毕,才会进行下一阶段"),_("br"),v._v("\njs文件被认为是"),_("code",[v._v("解释器阻塞资源")]),v._v(",HTML解析会被js阻塞,因为ji文件可以修改和读取DOM属性以及CSSOM属性")])]),v._v(" "),_("p",[v._v("GUI渲染引擎跟js引擎线程是互斥的:")]),v._v(" "),_("blockquote",[_("p",[v._v("当浏览器遇到一个js标记是,DOM Tree的构建将暂停,直至脚本执行完成"),_("br"),v._v("\nCSSOM构建时,js文件将暂停执行,直至CSSOM就绪")])]),v._v(" "),_("p",[v._v("原则:")]),v._v(" "),_("ol",[_("li",[v._v("CSS优先: 引入顺序上 CSS文件 > js文件")]),v._v(" "),_("li",[v._v("js文件尽量放底部")])]),v._v(" "),_("p",[v._v("tips:")]),v._v(" "),_("blockquote",[_("p",[v._v("link标签会被视为阻塞渲染的资源,浏览器会优先处理这些资源,直至CSSOM构建完成")])]),v._v(" "),_("h3",{attrs:{id:"css的加载阻塞情况"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#css的加载阻塞情况"}},[v._v("#")]),v._v(" CSS的加载阻塞情况")]),v._v(" "),_("ol",[_("li",[v._v("css的加载不会阻塞DOM树的构建")]),v._v(" "),_("li",[v._v("CSS的加载会阻塞DOM树的渲染")]),v._v(" "),_("li",[v._v("css的加载会阻塞js语句的执行")])]),v._v(" "),_("h3",{attrs:{id:"js-defer-async"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#js-defer-async"}},[v._v("#")]),v._v(" js => defer/async")]),v._v(" "),_("p",[v._v("defer: 表示延迟执行js文件,即js加载时HTML不停止解析,这两个过程并行.当两者都完成时,执行所有defer加载的js代码.")]),v._v(" "),_("blockquote",[_("p",[v._v("defer不会改变js代码的执行顺序"),_("br"),v._v("\n不阻塞HTML的解析,执行阶段放在HTML解析完成之后")])]),v._v(" "),_("p",[v._v("async: 表示异步加载js文件, 加载完成之后立即执行,无论此刻HTML处于解析阶段还是解析完成之后")]),v._v(" "),_("blockquote",[_("p",[v._v("async 执行顺序不固定"),_("br"),v._v("\nasync 阻塞load事件,一定会在load事件之前执行")])])])}),[],!1,null,null,null);_.default=a.exports}}]);