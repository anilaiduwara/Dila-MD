const {readEnv}=require('../lib/database');
const {cmd,commands}=require('../command');
const os=require("os");const {runtime}=require('../lib/functions');

const sensitiveData=require('../dila_md_licence/a/b/c/d/dddamsbs');

cmd({
  pattern:"menu",
  alias:["panel""penal","list","allmenu"],
  desc:"Check menu all",
  category:"main",
  react:"👺",
  filename:__filename},
  
  async(conn,mek,m,{from,quoted,body,isCmd,command,args,q,isGroup,sender,senderNumber,botNumber2,botNumber,pushname,isMe,isOwner,groupMetadata,groupName,participants,groupAdmins,isBotAdmins,isAdmins,reply})=>{
  try{
    
    const config=await readEnv();
    const totalRAM=Math.round(require('os').totalmem()/1024/1024);
    const usedRAM=(process.memoryUsage().heapUsed/1024/1024).toFixed(2);const freeRAM=(totalRAM-parseFloat(usedRAM)).toFixed(2);let status=`${sensitiveData.apimenibah}`;let sentMessage=await conn.sendMessage(from,{image:{url:config.ALIVE_IMG},caption:status},{quoted:mek||null});await conn.sendMessage(from,{react:{text:"👺",key:sentMessage.key}})}catch(e){console.log(e);reply(`Error: ${e}`)}});
