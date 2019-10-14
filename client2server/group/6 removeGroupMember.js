let msg = {
    header:{
        version:'1.0',
        mid:'',//uuid 消息id
        uid:'',//发送者id
        did:'',//发送者设备id
        name:'',
        action:'removeGroupMember'
    },
    body:{
        chatId:'',//会话id
        members:[{
            uid:'',
            name:''
        }],//uid列表
        pic:[{url:'',name:''}]
    }
}


let ack = {
    header:{
        version:'1.0',
        action:'ack'
    },
    body:{
        mid:'',
        time:'',
        order:''
    }
}
