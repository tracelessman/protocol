let msg = {
    header:{
        version:'1.0',
        mid:'',//uuid 消息id
        uid:'',//发送者id
        did:'',//发送者设备id
        action:'sendMsg',
        time:12345678,
        order:''
    },
    body:{
        chatId:'',//会话id
        chatType:0,//0 私聊 1 群聊 其他待扩展会话
        at:[{uid:'0'},{uid:'',name:''}],//0 是所有人 888388 是具体人员uid
        type:1,//消息类型 
        data:data//见data
    }
}
//1-文本 
let data = '' //文本

//2—照片  3-视频
data ={
    width:1024,
    height:768,
    stream:'',
    url:''
},
//4-通话
data = {
    duration:99
}
//9-文件
data = {
    size:99,
    suffix:'zip'
} //url
//8-位置 
data = {
    longitude:343.98,//经度
    latitude:34.8,//维度
    title:''//位置信息
}
//10-音频
data = {
    duration:10,
}
let ack = {
    header:{
        version:'1.0',
        action:'ack'
    },
    body:{
        mid:''//消息id
    }
}

