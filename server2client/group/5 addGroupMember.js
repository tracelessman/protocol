let msg = {
    header:{
        version:'1.0',
        mid:'',//uuid 消息id
        uid:'',//发送者id
        did:'',//发送者设备id
        action:'addGroupMember',
        time:123456
    },
    body:{ //老成员收到的body
        chatId:'',
        members:[{//新成员
            uid:'',
            name:''
        }],//uid列表
        pic:[]
    },
    body:{ //新成员收到的body
        members:[{//所有成员
            uid:'',
            name:''
        }],//uid列表
        chat:{//注意：新成员收到的addGroupMemmber会带chat
            chatId:'',
            status:0,//chat状态
            name:'',
            pic:[],//
            type:0,//
            maseterUid:'',
            notice:'',
            introduce:'',
            allForbiddenStatus:0,
            adminAtAll:0,
            adminUpdateBase:0,
            newerAccessNum:100,
            needVerify:0,
            ext:{}
        },
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
