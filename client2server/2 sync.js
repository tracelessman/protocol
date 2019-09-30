let msg = {
    header:{
        version:'1.0',
        mid:'',//uuid 消息id
        uid:'',//发送者id
        did:'',//发送者设备id
        action:'sync'
    },
    body:{
        lastMsgVersion:''//目前从服务端获取的消息的最大版本号
    }
}


let ack = {
    header:{
        version:'1.0',
        action:'ack'
    },
    body:{
        mid:'',
        chats:[{
            chatId:'',
            name:'',
            type:0,//
            topTime:'',//
            unReadNum:88,//
            notifyState:0,
            forbidenState:0,
            forbidenExpired:'',
            backImg:'',
            role:0,//是否管理员
            memoryLine:'',
            nickName:'',
            extConfig:{}//key value
        }],
        offlineMsgs:[]//离线消息 msg的格式和具体消息类型格式一样
    }
}
