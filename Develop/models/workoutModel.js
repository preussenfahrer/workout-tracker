const mongoose = require("mongoose");

// connects to database
mongoose.connect("mongodb://localhost/workoutdb", {
  useNewUrlParser: true,
  useFindAndModify: false
});

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
exercises: [{
    type: {
        type: String,
        required: ""
        
    },
    name: {
        type: String,
        trim: true,
        required: ""
        
    },
    weight: {
        type: Number,
        required: ""
        
    },
    sets: {
        type: Number
    },
    reps: {
        type: Number,
        required: ""
        
    },
    distance: {
        type: Number,
        required: ""
        
    },
    time: {
        type: Number,
        required: ""
        
    }
}],

date: {
    type: Date,
    default: Date.now()
}
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;