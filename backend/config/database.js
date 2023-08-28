const mongoose =  require('mongoose');

// const connectDatabase = ()=>{mongoose.connect("mongodb://127.0.0.1:27017/Ecommerse", {useNewUrlParser:true,useUnifiedTopology:true, useCreateIndex:true}).then((data)=>{
//     console.log(`mongoDb connected with server:' , ${data.connection.host}`);

// }).catch((err)=>{console.log(err)})
// }


const connectDatabase = async () => {
    try {
      await mongoose.connect("mongodb://127.0.0.1:27017/Ecommerse", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
  
      console.log('Connected to MongoDB');
    } catch (error) {
      console.error('MongoDB connection error:', error.message);
      process.exit(1); // Exit the process with an error code
    }
  };

module.exports =  connectDatabase;
