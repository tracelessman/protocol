let msg = {
    header:{
        version:'1.0',
        mid:'',//uuid 消息id
        uid:'',//发送者id
        did:'',//发送者设备id
        name:'',//冗余数据
        action:'addPrivateChat',
        time:1234567
    },
    body:{
        chatId:'',
        oppositeUid:'',
        pic:[{uid:'',url:'',name:''}] 
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
