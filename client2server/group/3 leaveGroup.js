let msg = {
    header:{
        version:'1.0',
        mid:'',//uuid 消息id
        action:'leaveGroup'
    },
    body:{
        chatId:'',//会话id
        pic:[{url:'',name:''}]
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
        err:''
    }
}
