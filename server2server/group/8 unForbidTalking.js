let msg = {
    header:{
        version:'1.0',
        mid:'',//uuid 消息id
        uid:'',//发送者id
        did:'',//发送者设备id
        name:'',
        action:'unForbidTalking',
        time:'',
        order:''
    },
    body:{
        chatId:'',//会话id
        members:[{
            uid:'',
            name:''
        }]//uid列表 '0' 是所有人
    },
    targets:[]
}

