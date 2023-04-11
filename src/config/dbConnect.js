import mongoose from "mongoose";

mongoose.connect('mongodb+srv://usuario:senha@myclusterbd.bpwdf.mongodb.net/alura-node');


const db = mongoose.connection;

export default db;