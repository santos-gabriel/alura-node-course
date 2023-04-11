import mongoose from "mongoose";

mongoose.connect('mongodb+srv://dbuser:dbuser@myclusterbd.bpwdf.mongodb.net/alura-node');


const db = mongoose.connection;

export default db;