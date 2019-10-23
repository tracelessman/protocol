let msg = {
    header:{
        version:'1.0',
        mid:'',//uuid 消息id
        uid:'',//发送者id
        did:'',//发送者设备id
        action:'addGroup',
        time:1234567
    },
    body:{
        chatId:'',//会话id
        name:'',
        groupType:4,
        ownerId:'',
        notifyTypeId:'',
        members:[{
            uid:'',
            name:''//冗余数据
        }],//uid列表
        pic:[{uid:'',url:'',name:''}] //可能没有 如目前通知类型的就没有
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
