
// STEPS:

// Install node and agular/cli
// Signup for a mongodb account (Select I'm just exploring)
// CHoose free version and retain Cluster0 name
// Add a user account for the cluster
// Browse collections
// Create a databse MyDb
// Create a collection books
// Add a couple of documents into the collection
// Get connection string

// Create backet folder called api
// TYpe npm init -y
// npm install express --save
// npm install cors
// npm install mongodb@4.1.0 --save
// npm instdall multer --save

// open the project on VSCode

// Create a file called index.js

// Run the backend - node index.js


// import all packages installed
var Express = require('express');
var Mongoclient = require("mongodb").MongoClient;
var cors = require("cors");
const multer = require("multer");

//Create an instance of express app
var app=Express();
//Make use of the CORS module
app.use(cors());

//Indicate the connection string from mongodb
var CONNECTION_STRING = "mongodb+srv://nanotra:20835786@cluster0.iwis3je.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

//Indicate the name of the database
var DATABASENAME = "Compose";

//instantiate the mongodbclient
var database;

//create a listener
app.listen(5038, ()=>{
    Mongoclient.connect(CONNECTION_STRING,(error,client)=>{
        database=client.db(DATABASENAME);
        console.log(`Connected!`);
    })
})

// app.listen(5038, () => {
//     Mongoclient.connect(CONNECTION_STRING, (error, client) => {
//         if (error) {
//             console.error("Error connecting to MongoDB:", error);
//             return;
//         }
//         database = client.db(DATABASENAME);
//         console.log("Connected to MongoDB successfully!");
//     });
// });

//ROUTES TO ALL ACTIONS

//get all dbase data
app.get('/api/entry/GetEntry',(req, res) => {
    database.collection("entry").find({}).toArray((error,result)=>{
        res.send(result);
    })
})


// app.post('/api/books/AddBook', multer().none(), async (req, res) => {
//     try {
//         const numOfDocs = await database.collection("books").countDocuments();
//         await database.collection("books").insertOne({
//             id: (numOfDocs + 1).toString(),
//             title: req.body.title,
//             description: req.body.description
//         });
//         res.json("Added Successfully");
//     } catch (error) {
//         console.error("Error adding book:", error);
//         res.status(500).json({ error: "Failed to add book" });
//     }
// });

app.post('/api/entry/AddEntry', multer().none(), async (req, res) => {
    try {
        const numOfDocs = await database.collection("entry").countDocuments();
        await database.collection("entry").insertOne({
            id: (numOfDocs + 1).toString(),
            title: req.body.title, // Add title field
            warning: req.body.warning, // Add warning field
            experience: req.body.experience, // Add experience field
            resolve: req.body.resolve, // Add resolve field
            advice: req.body.advice, // Add advice field
        });
        res.json("Added Successfully");
    } catch (error) {
        console.error("Error adding entry:", error);
        res.status(500).json({ error: "Failed to add entry" });
    }
});


app.delete('/api/entry/DeleteEntry', (req, res)=>{
    database.collection("entry").deleteOne({
        id:req.query.id
    });
    res.json("Deleted successfully!");
})

app.put('/api/entry/EditEntry/:id', multer().none(), async (req, res) => {
    try {
        const entryId = req.params.id;
        const updatedEntry = {
            title: req.body.title, // Updated title field
            warning: req.body.warning, // Updated warning field
            experience: req.body.experience, // Updated experience field
            resolve: req.body.resolve, // Updated resolve field
            advice: req.body.advice, // Updated advice field
        };
        await database.collection("entry").updateOne(
            { id: entryId },
            { $set: updatedEntry }
        );
        res.json("Updated Successfully");
    } catch (error) {
        console.error("Error updating entry:", error);
        res.status(500).json({ error: "Failed to update entry" });
    }
});

app.get('/api/entry/GetEntry/:id', (req, res) => {
    const entryId = req.params.id; // Extract entry ID from request parameters
    database.collection("entry").findOne({ id: entryId }, (error, result) => {
        if (error) {
            console.error("Error fetching entry:", error);
            res.status(500).json({ error: "Failed to fetch entry" });
        } else {
            if (result) {
                res.json(result); // Send the entry if found
            } else {
                res.status(404).json({ error: "Entry not found" }); // Return 404 if entry not found
            }
        }
    });
});
