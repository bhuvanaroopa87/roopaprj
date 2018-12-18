const http=require('http');

const server=http.createServer((req,res)=>{
if(req.url==='/Home'){
    res.write("welcome to ECommerce Application!");
    res.end();
}
const data=[
    {name:"babymilk", price:8, description:"used for babies 10months to 3yrs"},
    {name:"rice", price:17, description:"main source to live"},
    {name:"horlicks", price:5, description:"good for childrens growth"}
]
if(req.url==='/Products'){
    res.write(JSON.stringify(data));
    res.end();
}
const userdetails=[
    {username:"Roopa" , address:"39 Rue de Brement,Noisy Le Sec"}
]
if(req.url==='/Users'){
    res.write(JSON.stringify(userdetails));
    res.end();
}
});
server.listen("3000");
console.log("listening to the port :3000");