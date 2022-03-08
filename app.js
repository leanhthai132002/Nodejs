const http = require('http');
const express = require('express')

const app = express();
// const server = http.createServer((req, res) =>{
//     console.log('url', req.url);
//     if(req.url === "/"){
//         res.setHeader('Content-Type',"text/html");
//         res.write("<hmtl><body><h1>Home Page</h1></body></hmtl>")
//         res.end();
//         // console.log("Home Page");
//     }else if(req.url === "/api/products"){
//         // console.log("Product API");
//         const products = [
//             {id:1, name: "product A"},
//             {id:2 , name: "Product B"}
//         ];
//         res.end(JSON.stringify(products))
//     }else{
//         console.log("Da biet");
//     }
// });

const check = (req, res, next) => {
    const status = true;
    if(status){
        console.log("Hello")
        next();
    } else {
        console.log("Bạn không có quyền truy cập");
    }
}

app.get('/api/products', check, (req, res) => {
        const products = [
            {id:1, name: "product A"},
            {id:2 , name: "Product B"}
        ];
        res.json(products);
})
 
app.use(check)
app.use((req, res) =>{
    console.log("Bước 2");
})



const PORT = 3001;
app.listen(PORT, () =>{
    console.log("Server is running  port", PORT);
})