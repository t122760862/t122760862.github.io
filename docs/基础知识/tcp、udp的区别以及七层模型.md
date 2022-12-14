## OSI七层模型

第七层：应用层 为网络用户之间的通信专用的程序或协议。应用层的协议代表有：HTTP，HTTPS，SMTP，SSH等

第六次：表示层 把数据转换为接受者能兼容并且适合传输的内容。比如语法转换，解压缩，加密等操作

第五层：会话层 负责数据传输中设置和位置网络设备之间的通信连接

第四层：传输层 把传输表头加至数据形成数据包，完成端到端的传输。传输表头包含了协议内容，如tcp，udp等

第三层：网络层 负责对子网间的数据包进行寻址和路由选择，还可以实现拥塞控制，国际互联等功能。路由器在这一层

第二层：数据链路层 在不可靠的物理介质中进行可靠的传输，如物理地址寻址。交换机在这一层

第一层：物理层 在局域网上传输数据，负责电脑设备与网络媒体之间的互通。例如光纤，网卡

## TCP/IP 参考模型

将前三层应用层，表示层，会话层总结到一起，称为应用层，后两层链路层和物理层统称为链路层。把繁琐的OSI七层结构转化为了精简的TCP/IP四层结构

![](https://cdn.jsdelivr.net/gh/t122760862/blogimg@main/202210171506910.png)

## 数据包是什么

* 数据包是网络层及以上分层中包的单位

* 每个分层都会给发送数据包添加一个当前分层的头部标识，内容包含了该层协议相关的信息，而真正要发送的内容称之为数据

* 数据包由头部 + 数据组成

* 本层会把下层发送的全部内容（数据包）当成数据

![](https://cdn.jsdelivr.net/gh/t122760862/blogimg@main/202210171506040.png)

## tcp/udp

* udp是面向报文的，没有拥塞控制，所以速度比较快，适合媒体通讯，支持一对多，多对一

* tcp是面向连接的，必须三次握手建立连接

* tcp只能是一对一可靠传输

### tcp如何保证可靠性

* 超时重发，发出的报文没有及时确认会重新发送

* 数据包检验

* 对失序的数据重新排序

* 进行流量控制，防止溢出

* 快重传和快恢复

* tcp会将数据截断为合理的长度