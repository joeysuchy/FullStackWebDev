import express from 'express';
import mongoose from 'mongoose';

const app = express();
const PORT = 3000;

await mongoose.connect('mongodb://localhost:27017/myapp');
console.log('Connected to MongoDB');

const Message = mongoose.model('Message', new mongoose.Schema({ text: String }));

app.get('/', async (req, res) => {
  let msg = await Message.findOne();
  if (!msg) msg = await Message.create({ text: 'Hello from MongoDB!' });
  res.json(msg);
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));