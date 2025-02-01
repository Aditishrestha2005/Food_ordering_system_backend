//Initializations
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const sequelize = require("./Database/db");
const userRoute = require("./routes/userRoute");
const productRoute = require("./routes/productRoute")
const orderRoute = require("./routes/orderRoute");
const orderdetailsRoute=require("./routes/orderdetailsRoute")
const paymentRoute=require("./routes/paymentRoute")
const restaurantRoute=require('./routes/restaurantRoute')

//creating a server
const app = express();

//creating a port
const PORT = 3000;


//creating a middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Running on PORT
// app.listen(PORT, () => {
//   console.log(`Server Running on PORT ${PORT}`);
// });
 
// Routes
app.use('/user', userRoute);

app.use('/product',productRoute);
app.use('/order',orderRoute);
app.use('/orderdetails',orderdetailsRoute);
app.use('/payment',paymentRoute)
app.use('/restaurant',restaurantRoute)




// Database sync and server startup
sequelize.sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.get('/test',(req, res)=>{
    res.send(`Get all users`)
});

// app.post('/test',(req, res)=>{
//     res.send(`Create user`)
// });

app.put('/user/:id',(req, res)=>{
    res.send(`Update user ${req.params.id}`)
});

app.delete('/user/:id',(req, res)=>{
    res.send(`Delete user ${req.params.id}`)
});


