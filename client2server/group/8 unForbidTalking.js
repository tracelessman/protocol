let msg = {
    header:{
        version:'1.0',
        mid:'',//uuid 消息id
        uid:'',//发送者id
        did:'',//发送者设备id
        name:'',
        action:'unForbidTalking'
    },
    body:{
        chatId:'',//会话id
        members:[{
            uid:'',
            name:''
        }]//uid列表 '0' 是所有人
    }
}


let ack = {
    header:{
        version:'1.0',
        action:'ack'
    },
    body:{
        mid:'',
        time:'',
        order:''
    }
}
