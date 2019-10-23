let msg = {
    header:{
        version:'1.0',
        mid:'',//uuid 消息id
        action:'clearRecords'
    },
    body:{
        chatId:'',//会话id
        memoryLine:''//清空时最后一条消息的服务端时间
    }
}


let ack = {
    header:{
        version:'1.0',
        action:'ack',
        time:12345678
    },
    body:{
        mid:'',
        status:0,//0成功 1失败
        err:''//失败原因
    }
}
