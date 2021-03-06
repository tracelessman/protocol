let msg = {
    header:{
        version:'1.0',
        mid:'',//uuid 消息id
        action:'sync'
    },
    body:{
        lastMsgVersion:''//目前从服务端获取的消息的最大版本号
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
        chats:[{
            chat:{
                chatId:'',
                status:0,//chat状态
                name:'',
                pic:[],//
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
                chatId:'',
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
            }
        }],
        offlineReminders:[{
            reminderId:'',//reminder id
            text:'',
            channel:0,
            status:0,
            chatId:'',
            mid:'',
            uid:'',
            did:'',
            time:1222231,
            order:'',
        }],
        receivedReadReports:[{
            mid:'',
            reporters:['uid']
        }],
        sentReadReports:[
            'mid'
        ],
        receivedPlayReports:[{
            mid:'',
            reporters:['uid']
        }],
        sentPlayReports:[
            'mid'
        ],
        receivedReminderReadReports:[{
            reminderId:'',
            reporters:['uid']
        }],
        sentReminderReadReports:[
            'reminderId'
        ],
    }
}
