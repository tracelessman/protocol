let msg = {
    header:{
        version:'1.0',
        mid:'',//uuid 消息id
        uid:'',//发送者id
        did:'',//发送者设备id
        action:'readReport',
        time:124343
    },
    body:{//自己转发给自己设备格式
        chatId:'',
        reports:[{
            targetUid:'',
            mids:[]
        }]
    },
    body:{//收到被人给自己的已阅报告
        chatId:'',
        mids:[]
    }
}

//状态报告的执行无所谓顺序