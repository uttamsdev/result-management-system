const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());


const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

const uri = "mongodb+srv://komolsaha:komolsaha@cluster0.lqpclk0.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });


async function run(){
    try{
        await client.connect();
        const resultCollection = client.db("resultdb").collection("result");

        app.get("/results", async(req,res)=> {
            const query = {};
            const users = await resultCollection.find(query).toArray();
            res.send(users);
        });
        
    }
    finally{

    }
}
run().catch(console.dir);

app.get("/", (req,res) => {
    res.send("Server is running....");
});

app.listen(port,()=> {
    console.log("listening to port: ",port);
})