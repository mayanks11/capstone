const express = require('express');
//const db = require('./models/index');
// const socketIO = require('socket.io');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
// const io = socketIO(server);
// const http = require('http');
// const server = http.createServer(app);
// const { io } = require('./utils/socket');

// io.attach(server);

// const reportRoutes = require('./routes/Report')
const userRoutes = require('./controllers/User');
//const driverRoutes = require('./routes/Driver');
//const paymentRoutes = require('./routes/Payment');
//const tripHistoryRoutes = require('./routes/TripHistory');

app.use(
  cors({
      origin: ["http://localhost:3000"],
      methods: ['GET', 'POST', 'DELETE'],
      credentials: true,
  })
)
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const uri = "mongodb+srv://mayanks3107:admin@cluster0.kqgdccx.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(uri).then(console.log('Database connected'));
// Mouting routes
app.use('/', userRoutes);
//app.use('/driver', driverRoutes);
//app.use('/payment', paymentRoutes);
//app.use('/trip-history', tripHistoryRoutes);

require('./config/passport/passport');

// const io = socketIO(server);

// io.on('connection', socket => {
//   socket.on('paymentMessage', body => {
//     io.emit('paymentMessage', `You have received payment from ${body}`);
//     console.log(body);
//   });

//   // socket.on('gotPassenger', body => {
//   //   io.emit('gotPassenger', `You got selected by a passenger!`);
//   //   console.log('triggered')
//   // });

//   socket.on('driverConfirmed', body => {
//     io.emit('driverConfirmed', `${body} confirmed the trip`);
//   })
// });

//db.sequelize.sync({ alter: false }).then(() => {
  const server = app.listen(8000, () => {
    console.log('Server is running on port 8000');
  });
  const io = require('./utils/socket').init(server);
  io.on('connection', (socket) => {
    console.log('Client connected')
  });
//});
