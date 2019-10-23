let msg = {
    header:{
        version:'1.0',
        mid:'',//uuid 消息id
        action:'withdraw'
    },
    body:{
        chatId:'',//会话id
        mid:''//将被撤回的消息id
    }
}
let ack = {
    header:{
        version:'1.0',
        action:'ack',
        time:123456
    },
    body:{
        mid:'',
        status:0,
        err:'',
    }
}