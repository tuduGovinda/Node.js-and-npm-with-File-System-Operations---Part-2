const fs = require("node:fs");

// writefile ✅ 

// fs.writeFile("index.text", " hello this is a index file", function (err) {
//   if (err) {
//     console.error(err);
//   } else {
//     console.log("done");
//   }
// });


// appendfile ✅ 
// fs.appendFile("index.text", "this is due to append file", function (err) {
//   if (err) console.error(err);
//   else console.log("done");
// });

//rename ✅ 
// fs.rename("index.text","try.text",function(err){
//     if(err) console.error(err)
//     else console.log("done");
    
// })


//copy ✅ 
// fs.copyFile("try.text","new.txt",function(err){
//     if(err) console.error(err)
//     else console.log("done");
    
// })


//unlink✅ 
// fs.unlink("new.txt",function(err){
//     if(err) console.error(err.message)
//     else console.log("done");
    
// })


//rmdir ✅ 
// fs.rmdir("./file",{recursive:true},function(err){
//     if(err) console.error(err.message)
//     else console.log("removed")
// })


//http ✅ 
// const http=require('http');
// const server=http.createServer(function(req,res){
//     res.end("hello world");
// })
// server.listen(3000);