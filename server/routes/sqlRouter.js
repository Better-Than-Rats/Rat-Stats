const express = require('express');
const router = express.Router();
const sqlController = require('../controllers/sqlController.js');

router.get('/', (req, res) => {
  res.status(200).send("your are reaching sql endpoint")  
}
);

//get user profile
router.get('/profile/:username',sqlController.getProfile,(req, res) => {
  res.status(200).json(res.locals.profile);
  }
);

//get rat info
router.get('/rat/:name',sqlController.getRat,(req, res) => {
  res.status(200).json(res.locals.rat);
  }
);

/sql/getallsightings

//get sighting info
router.post('/getallsightings', sqlController.getAllSightings, (req, res) => {
  console.log('Hit /getsightings anon callback, sightings: ', res.locals.sightings);
  res.status(200).json(res.locals.sightings);
});


//create user profile
router.post('/profile',sqlController.addProfile,(req, res) => {
  res.status(200).json('profile added')
  }
);

//create rats
router.post('/rat',sqlController.addRat,(req, res) => {
  res.status(200).json('rat added')
  }
);
//create sighting
router.post('/sighting',sqlController.addSighting,(req, res) => {
  res.status(200).json('sighting added')
  }
);

//delete user profile

//delete rat profile

module.exports = router;