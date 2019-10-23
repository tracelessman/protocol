let msg = {
    header:{
        version:'1.0',
        mid:'',//uuid 消息id
        action:'openNotify'
    },
    body:{
        chatId:''//会话id
    }
}


let ack = {
    header:{
        version:'1.0',
        action:'ack',
        time:2345678
    },
    body:{
        mid:'',
        status:0,//0成功 1失败
        err:''//失败原因
    }
}
