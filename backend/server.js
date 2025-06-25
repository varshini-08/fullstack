import express from 'express';
import cors from 'cors';
//if in json type module is present we can use import and export or else we have to use require and module.exports
import { connectDB } from './config/db.js'; // Import the connectDB function
import mongoose from 'mongoose';
import User from './model/User.js'; // Import the User model
import Form from './model/form.js'; // Import the Form model
import dotenv from 'dotenv';
dotenv.config(); 


const app = express();
connectDB();
// if this users exist in compass that is linked or else new collection will be created

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.urlencoded());
app.use(cors());
//creating a middleware
const methodFind=(req,res,next)=>{
  console.log(`${req.method} ${req.url}`);
  next();
}
app.use(methodFind);

// const methodDelete=(req,res,next)=>{
//   if(req.method==="DELETE"){
//     return res.send('Delete function blocked');
//   }
//   next();
// }
// app.use(methodDelete)
app.get('/get', async (req, res) => {
  const users = await User.find(); // Await the query to get data
  res.json(users);                 // Now this is plain JSON data
});


app.get('/getform',async(req,res)=>{
  const fusers=await Form.find();
  res.json(fusers);
})

app.get('/get/:id', async (req, res) => {
   try{
    const users = await User.findById(req.params.id); 
    if (!users) {
      return res.status(404).json({ msg: 'no user found' });
    }
    res.json(users);
   }
   catch(error){
    res.status(500).json({ error: error.message });
   }  
});

app.post('/post', async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.json(newUser);
  } catch (error) {
    res.status(400).json(error);
  }
});

app.post('/postform', async (req, res) => {
  try {
    const fnewUser = new Form(req.body);
    await fnewUser.save();
    res.json(fnewUser);
  } catch (error) {
    res.status(400).json(error);
  }
});

app.put('/put/:id', async(req, res) => {//passing id in this is calles params
  try{
  const update = await User.findByIdAndUpdate(req.params.id,req.body);
  res.json({msg:'data updated'});
} catch(error){
    res.status(401).json(error);
  }
});

app.put('/putform/:id', async(req, res) => {//passing id in this is calles params
  try{
  const fupdate = await Form.findByIdAndUpdate(req.params.id,req.body);
  res.json({msg:'data updated'});
} catch(error){
    res.status(401).json(error);
  }
});

app.delete('/delete/:id', async(req, res) => {
  try{
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    res.json({msg:'data deleted'});
  } catch(error){
    res.status(401).json(error);
  }
});

app.delete('/deleteform/:id', async(req, res) => {
  try{
    const fdeletedUser = await Form.findByIdAndDelete(req.params.id);
    res.json({msg:'data deleted'});
  } catch(error){
    res.status(401).json(error);
  }
});

app.patch('/patch', (req, res) => {
  res.send('from patch request');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000: http://localhost:3000');
});