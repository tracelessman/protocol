let msg = {
    header:{
        version:'1.0',
        mid:'',//uuid 消息id
        action:'transferMaster'
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
        action:'ack',
        time:1234567
    },
    body:{
        mid:'',
        status:0,
        err:'',
    }
}
