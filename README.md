# protocol
client2server:客户端向服务端发送

  - 0 base.js 基本的协议风格模板
  
  - 1 ping.js 心跳
  
  - 2 sync.js 数据同步，建立连接时同步离线消息和chats列表的离线状态
  
  - chat 会话窗口有关
  
  - group 群管理有关
  
  - msg 发消息以及消息状态变化有关
  
server2client:服务端向客户端发送

server2DB:服务端通过MQ向存储服务发送

server2server:服务器间转发
