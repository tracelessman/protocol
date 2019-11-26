let msg = {
    header:{
        version:'1.0',
        mid:'',//uuid 消息id
        action:'forceExit',
        time:123456
    },
    body:{
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