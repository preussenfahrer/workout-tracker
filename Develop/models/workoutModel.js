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
        // may have to rework 'required:' s
    },
    name: {
        type: String,
        trim: true,
        
    },
    weight: {
        type: Number,
        
    },
    sets: {
        type: Number
    },
    reps: {
        type: Number,
        
    },
    distance: {
        type: Number,
        
    },
    time: {
        type: Number,
        
    }
}],

date: {
    type: Date,
    default: Date.now()
}
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;