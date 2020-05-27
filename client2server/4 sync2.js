let msg = {
    header:{
        version:'1.0',
        mid:'',//uuid 消息id
        action:'sync2'
    },
    body:{
        lastSyncOrder:''//目前从服务端获取的消息的最大版本号
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
        status:0,//0成功 1失败
        err:'',//失败原因

        chats:[{//会话列表
            chatId:'',
            chatCfg:{
            },
            userCfg:{
            },
            unReadNum:0,
            lastMsg:{
                msg:{},
                msgReaders:[],
                msgPlayers:[],
                reminder:{},
                reminderReaders:[]
            }
        }],
        offlineMsgs:[
            {
                header:{},
                body:{}
            },//普通聊天消息
            {
                header:{},
                body:{}
            }//信令消息
        ]
    }
}
