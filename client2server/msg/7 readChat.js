let msg = {
    header:{
        version:'1.0',
        mid:'',//uuid 消息id
        action:'readChat'
    },
    body:{
        chatId:'',
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
        msgs:[
            {
                msg:{},
                msgReaders:[],
                msgPlayers:[],
                reminder:{},
                reminderReaders:[]
            }
        ],
    }
}