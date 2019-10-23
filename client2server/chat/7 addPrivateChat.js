let msg = {
    header:{
        version:'1.0',
        mid:'',//uuid 消息id
        action:'addPrivateChat'
    },
    body:{
        oppositeUid:'',//对方uid
        pic:[{uid:'',url:'',name:''}]//双方的名称 和 头像
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
        status:0,//0成功 1失败
        err:'',//失败原因
        chatId:''//服务端生成的chat id
    }
}
