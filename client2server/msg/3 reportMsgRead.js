let msg = {
    header:{
        version:'1.0',
        mid:'',//uuid 消息id
        action:'readReport'
    },
    body:{
        chats:[{
            chatId:'',
            // firstMsgId:'',
            // firstMsgOrder:'',
            lastMsgId:'',//chat内最后一条已读消息的id
            lastMsgOrder:'',
            targetUids:[] //报告目标 也就是未读消息的发送者
        }]
    }
}
let ack = {
    header:{
        version:'1.0',
        action:'ack',
        time:1234567
    },
    body:{
        mid:'',
        status:0,
        err:'',
    }
}