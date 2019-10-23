let msg = {
    header:{
        version:'1.0',
        mid:'',//uuid 消息id
        action:'forbidTalking'
    },
    body:{
        chatId:'',//会话id
        members:[{
            uid:'',
            name:''
        }],//uid列表 '0' 是所有人
        expireOption:1// 过期时间选项 0 5分钟 1  1小时...
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
