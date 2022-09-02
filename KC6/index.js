//this will be my express server
import express from 'express';
import cors from 'cors';
import path from 'path';

const app=express();
const PORT= 8080;

//configures cors middleware
app.use(cors());

//configures path middleware
const __dirname = path.resolve();

//create a route for the index
app.get('/', (req, res)=>{
res.sendFile(path.join(__dirname, 'client', 'index.html'));

});

//create route for about page
app.get('/about', (req, res)=>{
    res.sendFile(path.join(__dirname, 'client', 'about.html'));
    
    });
//create route for conactme page
    app.get('/contactme', (req, res)=>{
        res.sendFile(path.join(__dirname, 'client', 'contactme.html'));
        
        });
//create 404 error display
app.use((req,res)=>{
    res.status(404);
    res.sendFile(path.join(__dirname,'client','404.html'));
});

app.listen(PORT, ()=>{
    console.log(`Hola this server is running on port ${PORT}`);
});