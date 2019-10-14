let msg = {
    header:{
        version:'1.0',
        mid:'',//uuid 消息id
        uid:'',//发送者id
        did:'',//发送者设备id
        name:'',//冗余数据
        action:'addGroup'
    },
    body:{
        chatId:'',//会话id
        ownerId:'',//商户id
        groupType:'',//群类型
        name:'',
        members:[{
            uid:'',
            name:''//冗余数据
        }]//uid列表
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
        order:'',//服务端的时间戳和序号 客户端通过该信息决定生成的通知消息的服务端序号和时间
        status:0,
        err:''
    }
}
