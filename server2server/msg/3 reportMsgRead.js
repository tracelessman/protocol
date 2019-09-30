let msg = {
    header:{
        version:'1.0',
        mid:'',//uuid 消息id
        uid:'',//发送者id
        did:'',//发送者设备id
        action:'reportMsgRead'
    },
    body:{
        detail:[{
            senderUid:'',//消息的发送者
            chats:[{
                chatId:'',
                msgIds:[]
            }]
        }]
    },
    targets:[]
}