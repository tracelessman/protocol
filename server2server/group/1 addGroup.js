let msg = {
    header:{
        version:'1.0',
        mid:'',//uuid 消息id
        uid:'',//发送者id
        did:'',//发送者设备id
        name:'',
        action:'addGroup',
        time:'',
        order:''//time和order由服务端插入
    },
    body:{
        chatId:'',//会话id
        name:'',
        members:['']//uid列表
    },
    targets:[]
}
//同server2client的msg
