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
        meetName:''
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
