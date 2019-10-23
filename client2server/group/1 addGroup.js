let msg = {
    header:{
        version:'1.0',
        mid:'',//uuid 消息id
        action:'addGroup'
    },
    body:{
        ownerId:'',//商户id
        groupType:0,//群类型
        name:'',
        members:[{
            uid:'',
            name:''//冗余数据
        }],//uid列表
        pic:[{uid:'',url:'',name:''}]
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
        status:0,
        err:'',
        chatId:''//服务端生成的chat id

    }
}
