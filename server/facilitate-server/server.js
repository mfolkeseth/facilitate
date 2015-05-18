// server.js

// BASE SETUP
// =============================================================================

var mongoose = require('mongoose');
mongoose.connect('mongodb://facilitate:f4cilit4te@ds031922.mongolab.com:31922/facilitate');

var Task = require('./app/models/task');

// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;        // set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

router.use(function(req, res, next) {
    // do logging
    console.log('Something is happening.');
    next(); // make sure we go to the next routes and don't stop here
});

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
});

// more routes for our API will happen here


router.route('/tasks')

    .post(function(req, res) {
        
        var task = new Task();
        task.title = req.body.title;
		task.description = req.body.description;

        task.save(function(err) {
            if (err)
                res.send(err);
				
			res.json({status: 'OK', value: task});
        });
        
    })
	.get(function(req, res) {
        Task.find(function(err, tasks) {
            if (err)
                res.send(err);

            res.json(tasks);
        });
    });
	
router.route('/tasks/:task_id')

    .get(function(req, res) {
        Task.findById(req.params.task_id, function(err, task) {
            if (err)
                res.send(err);
            res.json(task);
        });
    })
	
	.put(function(req, res) {

        Task.findById(req.params.task_id, function(err, task) {

            if (err)
                res.send(err);
			
			if (typeof req.body.title !== 'undefined') {
				task.title = req.body.title;
			}
            if (typeof req.body.description !== 'undefined') {
				task.description = req.body.description;	
			}

            task.save(function(err) {
                if (err)
                    res.send(err);

		        res.json({status: 'OK', value: task});
            });
        });
    });



// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);