let msg = {
    header:{
        version:'1.0',
        mid:'',//uuid 消息id
        uid:'',//发送者id
        did:'',//发送者设备id
        name:'',
        action:'addAdmin',
        time:'',
        order:''
    },
    body:{
        chatId:'',//会话id
        members:[{
            uid:'',
            name:''
        }]//uid列表 
    },
    targets:[]
}
