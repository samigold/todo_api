const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide a name for this task.'],
        trim: true,
        maxlength: [20, 'Name cannot be more than 20 characters']
    },
    completed: {
        type: Boolean,
        default: false
    },
    description: {
        type: String,
        required: [true, 'Please provide a description for this task.'],
        maxlength: [100, 'Description cannot be more than 100 characters']
    }
},
{
    timestamps: true // Add this line to enable timestamps
});

module.exports = mongoose.model('Task', TaskSchema);