const router = require("express").Router();
const Workout = require("../models/workoutModel.js")

router.post("/workouts", function (req, res) {
    Workout.create(req.body, function (err, result) {
        if (err) return handleError(err);
        res.json(result);
    });
});

router.put("/workouts/:id", function (req, res) {
    console.log(req.params, req.body)
    Workout.findOne({ _id: req.params.id }, function (err, workout) {
        // add exercise to object
        workout.exercises.push(req.body)
        // add exercise to db
        Workout.updateOne({ _id: req.params.id }, workout, function (err, result) {
            res.json(result);
        });
    });
});

router.get("/workouts/range", function (req, res) {
    Workout.find({}, function(err, result) {
        res.json(result);
    });
});

router.get("/workouts", function (req, res) {
    Workout.create({}, function(err, result) {
        if (err) throw err;
        res.json(result);
    });
});

module.exports = router;