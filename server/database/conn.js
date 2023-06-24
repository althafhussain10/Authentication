import mongoose from "mongoose";

import { MongoMemoryServer } from "mongodb-memory-server";
import ENV from '../config.js'

async function connect(){

    // const mongod = await MongoMemoryServer.create();
    // const getUri = mongod.getUri();

    mongoose.set('strictQuery', true)
    // const db = await mongoose.connect(getUri);
    const db = await mongoose.connect(`mongodb+srv://reacta61:evNuUzWy1hQIvw2G@mern-auth.qsphdge.mongodb.net/react`);
    console.log("Database Connected")
    return db;
}

export default connect;