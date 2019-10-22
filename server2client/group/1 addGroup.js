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
        groupType:4,
        ownerId:'',
        members:[{
            uid:'',
            name:''//冗余数据
        }],//uid列表
        pic:[{url:'',name:''}] //可能没有 如目前通知类型的就没有
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
