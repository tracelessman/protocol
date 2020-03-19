let msg = {
    header:{
        version:'1.0',
        mid:'',//uuid 消息id
        uid:'',//发送者id
        did:'',//发送者设备id
        action:'readReport',
        time:124343
    },
    body:{
        chats:[{
            chatId:'',
            // firstMsgId:'',
            // firstMsgOrder:'',
            lastMsgId:'',//chat内最后一条已读消息的id
            lastMsgOrder:''
        }]
    }
}

//状态报告的执行无所谓顺序