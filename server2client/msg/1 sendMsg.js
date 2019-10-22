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
        data:data,//见data
        targetsNum:100
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
    longitude:343.98,//经度
    latitude:34.8,//维度
    title:''//位置信息
}
//音频
data = {
    duration:10,
}
//业务通知
data = {
    notifyType:"work",
    "bizType": "",//审批/考勤打卡/公告/会议提醒
    "title": "你的请假申请已同意，请知晓",
    "content": "关于放假通知：10.1-10.8日全体员工放假",
    "itemList": [
         {
             "label": "请假类型",
             "value": "调休"
         },          
         {
             "label": "开始时间",
             "value": "2019-09-09"
         },
         {
             "label": "结束时间",
             "value": "2019-09-19"
         },
         {
             "label": "备注",
             "value": "你好你好"
         },
    ],
     "detailTitle": "",//已同意/已拒绝/查看详情/
     "detailUrl": "http://xxx/"
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

