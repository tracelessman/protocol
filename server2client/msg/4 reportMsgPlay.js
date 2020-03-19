let msg = {//视频、语音、文件 点击浏览
    header:{
        version:'1.0',
        mid:'',//uuid 消息id
        uid:'',//发送者id
        did:'',//发送者设备id
        action:'playReport',
        time:1234567
    },
    body:{
        // chats:[{
        //     chatId:'',
        //     targets:[{
        //         uid:'',
        //         msgIds:[]
        //     }]
        // }]
        chatId:'',
        mid:''
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