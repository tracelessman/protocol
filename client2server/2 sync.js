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
            chat:{
                chatId:'',
                status:0,//chat状态
                name:'',
                type:0,//
                maseterUid:'',
                notice:'',
                introduce:'',
                allForbiddenStatus:0,
                adminAtAll:0,
                adminUpdateBase:0,
                newerAccessNum:100,
                needVerify:0,
                ext:{}
            },
            member:{
                status:0,
                topTime:134567,//
                unReadNum:88,//
                notifyStatus:0,
                forbidenStatus:0,
                forbidenExpiredTime:12345678,
                backImg:'',
                role:0,//是否管理员
                nickName:'',
                ext:{}
            }
        }],
        offlineMsgs:[{
            header:{
                version:'1.0',
                mid:'',//uuid 消息id
                uid:'',//发送者id
                did:'',//发送者设备id
                action:'sendMsg',
                time:12345678,
                order:''
            },
            body:{
                chatId:'',//会话id
                chatType:0,//0 私聊 1 群聊 其他待扩展会话
                at:[{uid:'0'},{uid:'',name:''}],//0 是所有人 888388 是具体人员uid
                type:1,//消息类型 
                data:data//见data
            },
            ext:{
                status:0//消息状态
            }
        }],//离线消息 msg的格式和具体消息类型格式一样
        offlineReadReports:[{
            mid:'',
            senderId:'',
            receiverId:''
        }]
    }
}
