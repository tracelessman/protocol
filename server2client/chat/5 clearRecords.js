let msg = {
    header:{
        version:'1.0',
        mid:'',//uuid 消息id
        uid:'',//发送者id
        did:'',//发送者设备id
        action:'clearRecords',
        time:1234567
    },
    body:{
        chatId:'',//会话id
        memoryLine:''//清空时最后一条消息的序号
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
