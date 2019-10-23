let msg = {
    header:{
        version:'1.0',
        mid:'',//uuid 消息id
        action:'modifyGroupName'
    },
    body:{
        chatId:'',//会话id
        name:''
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
