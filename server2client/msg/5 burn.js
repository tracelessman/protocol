let msg = {
    header:{
        version:'1.0',
        mid:'',//uuid 消息id
        uid:'',//发送者id
        did:'',//发送者设备id
        action:'burn',
        time:123456
    },
    body:{
        chatId:'',//会话id
        mid:''//将被销毁的消息id
    }
}
let ack = {
    header:{
        version:'1.0',
        action:'ack'
    },
    body:{
        mid:''
    }
}