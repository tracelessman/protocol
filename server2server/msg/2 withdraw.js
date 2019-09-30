let msg = {
    header:{
        version:'1.0',
        mid:'',//uuid 消息id
        uid:'',//发送者id
        did:'',//发送者设备id
        name:'',
        action:'withdraw',
        time:'',
        order:''
    },
    body:{
        chatId:'',//会话id
        mid:''//将被撤回的消息id
    },
    targets:[]
}