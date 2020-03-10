let msg = {
    header:{
        version:'1.0',
        mid:'',//uuid 消息id
        uid:'',//发送者id
        did:'',//发送者设备id
        action:'addMeetMember',
        time:1234567
    },
    body:{//新成员接收到的body
        roomId:'uuid',
        thrRoomId:3456,
        meetId:'',
        meetType:0,
        meetName:'',
        members:[{ //所有非离开状态的成员（非已拒接、非已挂断）
            uid,
            name,
            connectStatus:1,
            micStatus:1,
            cameraStatus:1
        }] 
    },
    body:{//接听中的老成员接收到的body
        meetId:'',
        members:[{ //所有新成员
            uid,
            name,
            connectStatus:1,
            micStatus:1,
            cameraStatus:1
        }] 
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
