let msg = {
    header:{
        version:'1.0',
        mid:'',//uuid 消息id
        action:'addMeetMember'
    },
    body:{
        meetId:'uuid',
        members:['uid']
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
