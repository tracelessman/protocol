let msg = {
    header:{
        version:'1.0',
        mid:'',//uuid 消息id
        uid:'',//发送者id
        did:'',//发送者设备id
        name:'',//冗余数据
        action:'updateChatPic'
    },
    body:{
        pic:[{uid:'',url:'',name:''}]//双方的名称 和 头像
    }
}


let ack = {
    header:{
        version:'1.0',
        action:'ack'
    },
    body:{
        mid:'',
        status:0,
        err:''
    }
}
