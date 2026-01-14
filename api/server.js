const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

mongoose.connect("mongodb://mongo:27017/todos");

const TodoSchema = new mongoose.Schema({
	title:String,
	completed: Boolean
});

const Todo = mongoose.model("Todo", TodoSchema);

app.get("/todos", async (req, res)=>{
	res.json(await Todo.find());
});

app.post("/todos/", async (req, res)=>{
	const todo = await Todo.create(req.body);
	res.json(todo);
});

app.get("/todos/:id", async (req, res)=>{
	res.json(await Todo.findById(req.params.id));
});

app.put("/todos", async (req, res)=>{
	res.json(await Todo.findByIdAndUpdate(req.params.id,{new:true}));
});

app.delete("/todos/:id", async (req, res)=>{
	await Todo.findByIdAndUpdate(req.params.id);
	res.json({message: "Deleted"});
});

app.listen(3000, ()=> console.log("API running on port 3000"));


