let msg = {
    header:{
        version:'1.0',
        mid:'',//uuid 消息id
        uid:'',//发送者id
        did:'',//发送者设备id
        name:'',
        action:'forbidTalking',
        time:'',
        order:''
    },
    body:{
        chatId:'',//会话id
        members:[{
            uid:'',
            name:''
        }],//uid列表 '0' 是所有人
        expireOption:1// 过期时间选项 0 5分钟 1  1小时...
    },
    targets:[]
}

