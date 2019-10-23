let msg = {
    header:{
        version:'1.0',
        mid:'',//uuid 消息id
        uid:'',//发送者id
        did:'',//发送者设备id
        action:'transferMaster',
        time:123456
    },
    body:{
        chatId:'',//会话id
        to:{
            uid:'',
            name:''
        }//uid
    }
}


let ack = {
    header:{
        version:'1.0',
        action:'ack'
    },
    body:{
        mid:''
    }
}
