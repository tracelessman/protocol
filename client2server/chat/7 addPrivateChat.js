let msg = {
    header:{
        version:'1.0',
        mid:'',//uuid 消息id
        uid:'',//发送者id
        did:'',//发送者设备id
        name:'',//冗余数据
        action:'addPrivateChat'
    },
    body:{
        oppositeUid:''//对方uid
    }
}


let ack = {
    header:{
        version:'1.0',
        action:'ack'
    },
    body:{
        mid:'',
        chatId:'',//服务端生成的chat id
        status:0,
        err:''
    }
}
