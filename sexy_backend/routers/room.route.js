const express = require('express');
const router = express.Router();

const room_controller = require('../controllers/room.controller');



//authentication
router.get('/browseRooms', room_controller.room_all);
router.post('/searchRoom', room_controller.room_search);
//router.post('/authenticate', room_controller.room_Auth);
router.post('/createRoom', room_controller.room_create);
router.post('/quitRoom', room_controller.room_delete);



module.exports = router;
