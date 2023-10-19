import mongoose from "mongoose";

const Connection = () => {
  const DB_URI = `mongodb://user:smudgy49@ac-5hual5z-shard-00-00.yrz8uvg.mongodb.net:27017,ac-5hual5z-shard-00-01.yrz8uvg.mongodb.net:27017,ac-5hual5z-shard-00-02.yrz8uvg.mongodb.net:27017/?ssl=true&replicaSet=atlas-w9roc2-shard-0&authSource=admin&retryWrites=true&w=majority`;
  try{
    mongoose.connect(DB_URI,{useNewUrlParser: true});
    mongoose.set('strictQuery', false);
    console.log('Database Connected Successfully!');
  } catch(error){
    console.log('Error while connecting with the database ', error.message);
  }
}

export default Connection;