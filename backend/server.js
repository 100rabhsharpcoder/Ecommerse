const app = require('./app');
const dotenv = require("dotenv");
const  connectDatabase =  require("./config/database");

//config
dotenv.config({path:'backend/config/config.env'});

// connecting to database
connectDatabase();


// app.listen(process.env.PORT, ()=>{console.log("server is up on PORT", process.env.PORT)});

// Start the server
const PORT =  3000; // Default to port 3000 if PORT is not specified in the environment
app.listen(PORT, () => {
  console.log("Server is up on PORT", PORT);
});


// Error handling
app.on('error', (error) => {
    console.error("Server error:", error.message);
  });