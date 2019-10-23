let msg = {
    header:{
        version:'1.0',
        mid:'',//uuid 消息id
        action:'updateChatPic'
    },
    body:{
        chatId:'',
        pic:[{uid:'',url:'',name:''}]//双方的名称 和 头像
    }
}


let ack = {
    header:{
        version:'1.0',
        action:'ack',
        time:12345
    },
    body:{
        mid:'',
        status:0,
        err:''
    }
}
