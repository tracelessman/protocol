let msg = {
    header:{
        version:'1.0',
        mid:'',//uuid 消息id
        action:''
    },
    body:{
    }
}


let ack = {
    header:{
        version:'1.0',
        action:'ack',
        time:12345678 //服务器的ack时的时间
    },
    body:{
        mid:'',//消息id
        status:0,//0成功 1失败
        err:''//失败原因
    }
}

//整体风格