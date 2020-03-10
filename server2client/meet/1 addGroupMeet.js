let msg = {
    header:{
        version:'1.0',
        mid:'',//uuid 消息id
        uid:'',//发送者id
        did:'',//发送者设备id
        action:'addGroupMeet',
        time:1234567
    },
    body:{
        roomId:'uuid',
        thrRoomId:3456,
        meetId:'',
        meetType:0,
        meetName:'',
        members:['uid'] //有可能没有值，取决于发起方是否添加了人
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
