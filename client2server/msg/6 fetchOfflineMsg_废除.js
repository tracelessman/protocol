let msg = {//视频、语音、文件 点击浏览
    header:{
        version:'1.0',
        mid:'',//uuid 消息id
        action:'fetchOfflineMsg'
    },
    body:{
        chatId:'',
        cursorMsgId:''
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