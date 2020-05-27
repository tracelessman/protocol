let msg = {
    header:{
        version:'1.0',
        mid:'',//uuid 消息id
        action:'reportMsgRead'
    },
    body:{
        chatId:'',
        reports:[{
            targetUid:'',
            mids:[]
        }],
        readCursor:{
            mid:'',
            seqId:''
        }
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