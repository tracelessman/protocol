let msg = {
    header:{
        version:'1.0',
        mid:'',//uuid 消息id
        action:'addGroupMeet'
    },
    body:{
        roomId:'',//可能没有值，没有的情况下需要服务端创建
        meetType:0,
        meetName:'',
        members:['uid']//可能没有值，取决于app操作体验
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
        roomId:'',
        thrRoomId:3456,
        meetId:''
    }
}
