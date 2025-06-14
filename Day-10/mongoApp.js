const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

app.use(express.json());

// ===== 1. Connect to MongoDB =====
mongoose.connect('mongodb://localhost:27017/companyDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// ===== 2. Define Schemas & Models =====
const employeeSchema = new mongoose.Schema({
  name: String,
  department: String,
  salary: Number
});

const Employee = mongoose.model('Employee', employeeSchema);

const userSchema = new mongoose.Schema({
  name: String,
  address: {
    city: String,
    pincode: Number
  }
});

const User = mongoose.model('User', userSchema);

// ===== 3. Insert Multiple Documents =====
async function insertEmployees() {
  const count = await Employee.countDocuments();
  if (count === 0) {
    await Employee.insertMany([
      { name: 'Alice', department: 'HR', salary: 40000 },
      { name: 'Bob', department: 'Engineering', salary: 60000 },
      { name: 'Carol', department: 'Engineering', salary: 55000 }
    ]);
    console.log("Inserted employees");
  }
}

// ===== 4. Create Index and Observe Performance =====
async function createIndexAndQuery() {
  await Employee.collection.createIndex({ salary: 1 });
  const stats = await Employee.find({ salary: { $gt: 50000 } })
    .explain("executionStats");
  console.log("Query Stats:", stats.executionStats);
}

// ===== 5. Aggregation: Average Salary by Department =====
async function getAverageSalary() {
  const result = await Employee.aggregate([
    { $group: { _id: "$department", avgSalary: { $avg: "$salary" } } }
  ]);
  console.log("Avg Salary by Department:", result);
}

// ===== 6. Update Nested Document Fields =====
async function updateUserCity() {
  const user = await User.findOne({ name: 'John' });
  if (!user) {
    await User.create({ name: 'John', address: { city: 'Delhi', pincode: 110001 } });
  }
  await User.updateOne({ name: 'John' }, { $set: { "address.city": "Mumbai" } });
  console.log("User's city updated");
}

// ===== 7. Express Route to Display Employees =====
app.get('/employees', async (req, res) => {
  const data = await Employee.find();
  res.json(data);
});

// ===== Run Everything =====
app.listen(port, async () => {
  console.log(`Server running at http://localhost:${port}`);
  await insertEmployees();
  await createIndexAndQuery();
  await getAverageSalary();
  await updateUserCity();
});
