let msg = {
    header:{
        version:'1.0',
        mid:'',//uuid 消息id
        action:'exit'//主动告知服务端 退出连线
    },
    body:{
    }
}
let ack = {
    header:{
        version:'1.0',
        action:'ack',
        time:123456
    },
    body:{
        mid:'',
        status:0,
        err:'',
    }
}