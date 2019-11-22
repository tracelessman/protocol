let msg = {
    header:{
        version:'1.0',
        mid:'',//uuid 消息id
        action:'sendMsg'
    },
    body:{
        chatId:'',//会话id
        chatType:0,//0 私聊 1 群聊 其他待扩展会话
        at:[{uid:'0'},{uid:'',name:''}],//0 是所有人 888388 是具体人员uid
        type:1,//消息类型
        data:data//见data
    }
}
//文本 
let data = '' //文本

//照片  视频
data ={
    width:1024,
    height:768,
    thumbnail:'',//缩略图 首帧图
    url:''
},
//通话
data = {
    duration:99
}
//文件
data = {
    size:99,
    suffix:'zip'
} //url
//位置 
data = {
    lat:383,//维度
    lng:23,//经度
    address:'',//地址信息
    image:'base64',
    title:''//标题
}
//音频
data = {
    duration:10,
}
//通知 具体待定
data = {

}
let ack = {
    header:{
        version:'1.0',
        action:'ack',
        time:12345678
    },
    body:{
        mid:'',//消息id,
        status:0,
        err:'',
        order:'',
        time:12345678,
        targetsNum:100
    }
}

