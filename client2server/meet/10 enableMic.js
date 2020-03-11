let msg = {
    header:{
        version:'1.0',
        mid:'',//uuid 消息id
        action:'enableMic'
    },
    body:{
        meetId:'uuid',
        enabled:true,
        members:['uid']//如果members没传值，就是改变自己的设置；如果传值了，且包含其他人，必须是master发起的
    }
}


let ack = {
    header:{
        version:'1.0',
        action:'ack',
        time:1234567
    },
    body:{
        mid:'',
        status:0,//0成功 1失败
        err:'',//失败原因
    }
}
