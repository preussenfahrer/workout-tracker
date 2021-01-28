const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    exercises: [{
        type: {
            type: String,

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

    day: {
        type: Date,
        default: new Date(Date.now())
    }

});


const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;