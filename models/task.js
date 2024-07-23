// const mongoose = require('mongoose');

// const TaskSchema = new mongoose.Schema({
//     title: { type: String, required: true },
//     description: { type: String },
//     deadline: { type: Date, required: true },
//     status: { type: String, default: 'in-progress' },
//     category: { type: String, required: true },
//     assignedTo: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
//     createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
// }, { timestamps: true });

// module.exports = mongoose.model('Task', TaskSchema);


const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  deadline: { type: Date, required: true },
  category: { type: String, required: true },
  assignedTo: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  status: { type: String, enum: ['in-progress', 'complete'], default: 'in-progress' }, // Add this line
});

module.exports = mongoose.model('Task', taskSchema);
