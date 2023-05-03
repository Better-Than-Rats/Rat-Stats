const express = require('express');
const router = express.Router();
const sqlController = require('../controllers/sqlController.js');

router.post('/', (req, res) => {
	console.log('req made', req.body);
	res.status(200).send('your are reaching sql endpoint');
});


router.get('/rats', sqlController.getAllRats, (req, res)=> {
	res.json(res.locals.ratsArr)
})

router.post('/rats', sqlController.addNewRat, (req, res) => {
	res.status(200).json(res.locals.newRat)
})


//get user profile
// router.get('/profile/:username', sqlController.getProfile, (req, res) => {
// 	res.status(200).json(res.locals.profile);
// });

// //get rat info
// router.get('/rat/:name', sqlController.getRat, (req, res) => {
// 	res.status(200).json(res.locals.rat);
// });

// // get single sighting based on location
// router.get('/sighting/:location', sqlController.getSighting, (req, res) => {
// 	res.status(200).json(res.locals.sighting);
// });

// // get single sighting based on location--req.body version
// router.get(
// 	'/getsinglesighting',
// 	sqlController.getSingleSighting,
// 	(req, res) => {
// 		res.status(200).json(res.locals.sighting);
// 	}
// );

// //get all sightings by current user
// router.post('/getallsightings', sqlController.getAllSightings, (req, res) => {
// 	console.log(
// 		'Hit /getsightings anon callback, sightings: ',
// 		res.locals.sightings
// 	);
// 	res.status(200).json(res.locals.sightings);
// });

// //create user profile
// router.post('/profile', sqlController.addProfile, (req, res) => {
// 	res.status(200).json('profile added');
// });

// //create rats
// router.post('/rat', sqlController.addRat, (req, res) => {
// 	res.status(200).json('rat added');
// });

// //create sighting
// router.post('/sighting', sqlController.addSighting, (req, res) => {
// 	res.status(200).json('sighting added');
// });
// //create sighting
// router.post('/addsighting', sqlController.addSightingAlt, (req, res) => {
// 	res.status(200).json(res.locals.sighting);
// });

//delete user profile

//delete rat profile

module.exports = router;
