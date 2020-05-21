let msg = {
    header:{
        version:'1.0',
        mid:'',//uuid 消息id
        action:'readReport'
    },
    body:{
        chatId:'',
        reports:[{
            targetUid:'',
            mids:[]
        }]
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