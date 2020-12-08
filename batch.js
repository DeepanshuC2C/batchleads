var request=require("axios")
var express=require('express')
var bodyParser=require('body-parser')
const { send } = require("process")
const { setInterval } = require("timers")
var app=express()
app.use(bodyParser.json())
app.post('/batchleads',async (req,res)=>{

    // console.log(req.body)
  const send=async(sendData)=>{
    var result=await request({
        url:"https://workflow-automation.podio.com/catch/447zkl3k0wx508p",
        method:"POST",
        headers:{
            'Content-Type':"application/json"
        },
        data:JSON.stringify(sendData)
    })
}
var messageArray=req.body.messages
var data=req.body
    for(var i=0;i<messageArray.length;i++)
    {
  var sendData=data.messages[i];
   sendData["first_name"]=data["first_name"];
   sendData["last_name"]=data["last_name"];
   sendData["send_date"]=data["date"];
   sendData["phone"]=data["phone"];
   sendData["status"]=data["status"];
   sendData["verified_owner_status"]=data["verified_owner_status"];
   sendData["property"]=data["property"];

  
    send(sendData)
    console.log(sendData)

   

    


    }


})

app.listen(8000,()=>{
    console.log("server is running")
})