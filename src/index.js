require('dotenv').config();
const express = require('express');
const { mongoose } = require('mongoose');
const cors = require('cors');

const app = express();
const routes = require('./routes');

mongoose.connect(process.env.MONGO_URL, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
}, console.log('🔥 connected to database'));

app.use(cors());
app.use(express.json());
app.use(routes);


app.listen(3000, () => console.log('🚀 App listen port 3000'));