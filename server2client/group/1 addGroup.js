let msg = {
    header:{
        version:'1.0',
        mid:'',//uuid 消息id
        uid:'',//发送者id
        did:'',//发送者设备id
        name:'',//冗余数据
        action:'addGroup',
        time:'',
        order:''
    },
    body:{
        chatId:'',//会话id
        name:'',
        members:[{
            uid:'',
            name:''//冗余数据
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
        mid:''
    }
}
