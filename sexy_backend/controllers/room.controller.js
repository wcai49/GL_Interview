const Room = require('../models/room.model');
const path = require('path');
const passwordHash = require('password-hash');

exports.room_all = function(req, res) {
    Room.find(function (err, test) {
        if(err)
            res.send(err);
        res.json(test)
    });
};

exports.room_search = function(req, res){
    Room.findOne({_id: req.body.roomId}, function(err, room){
        if(err){
            res.json({
                type: false,
                data: 'Error occured: ' + err
            });
        }
        else{
            if(room){
                res.json({
                    type: true,
                    data: room
                })
            }
            else{
                res.json({
                    type: false,
                    data: 'Room not found'
                });
            }
        }

    })
};


exports.room_create = function(req, res){
    Room.findOne({creator: req.body.creator}, function(err, room){
        if (err) {
            res.json({
                type: false,
                data: "Error occured: " + err
            });
        }
        else {
            if (room) {
                res.json({
                    type: false,
                    data: "You already created a room!"
                });

            }




            else {

                let room = new Room(
                    {
                        roomName: req.body.roomName,
                        password: passwordHash.generate(req.body.password),
                        creator: req.body.creator,
                        roomTitle: req.body.roomTitle,
                        roomPublic: req.body.roomPublic
                    }
                );

                console.log('new Room created: ' + room);
                room.save(function (err, room1) {
                    if (err) {
                        console.log(err)
                    }
                    res.json({
                        type: true,
                        data: room
                    });
                })
                //else ends
            }
        }
    });
};

exports.room_delete = function(req, res){
    Room.findOne({_id: req.body.roomId}, function(err, room){
        if(err){
            res.json({
                type: false,
                data: 'Error occured: ' + err
            });
        }
        else{
            if(room){
                room.remove();
                res.json({
                    type: true,
                    data: room
                })
            }
            else{
                res.json({
                    type: false,
                    data: 'Room not found'
                });
            }
        }

    })
};
