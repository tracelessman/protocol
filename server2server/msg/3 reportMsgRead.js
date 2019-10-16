let msg = {
    header:{
        version:'1.0',
        mid:'',//uuid 消息id
        uid:'',//发送者id
        did:'',//发送者设备id
        action:'reportMsgRead'
    },
    body:{
        chats:[{
            chatId:'',
            firstMsgId:'',
            firstMsgOrder:'',
            lastMsgId:'',//chat内最后一条已读消息的id
            lastMsgOrder:''
        }]
    },
    targets:[]
}