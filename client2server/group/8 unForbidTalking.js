let msg = {
    header:{
        version:'1.0',
        mid:'',//uuid 消息id
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
        action:'ack',
        time:1234567
    },
    body:{
        mid:'',
        status:0,
        err:'',
    }
}
