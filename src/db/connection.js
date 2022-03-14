import { MongoClient, ServerApiVersion } from "mongodb";

import { config } from "../config";
let db, workflow;

const connectToCluster = async () => {
  try {
    const mongoClient = new MongoClient(config.uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverApi: ServerApiVersion.v1,
    });
    console.log("Connecting to MongoDB Atlas cluster...");
    
    mongoClient.connect((err) => {
      if (err) {
        console.error(err);
        return;
      }
      db = mongoClient.db("labforward");
      workflow = db.collection("workflow");
      console.log("Successfully connected to MongoDB Atlas!");
    });
  } catch (error) {
    console.error("Connection to MongoDB Atlas failed!", error);
    process.exit();
  }
};

export { connectToCluster, db, workflow };
