const Bootcamp = require('../models/Bootcamp');  
// @dse Get all bootcamps
// @route Get/api/v1/bootcamps
//@access public
exports.getBootcamps = (req, res, next) => {
    res.status(200).json({ success: true, msg: `Show all bootcamps` });
}

// @dse Get single bootcamps
// @route Get/api/v1/bootcamp/:id
//@access public
exports.getBootcamp = (req, res, next) => {
    res.status(200)
    .json({ success: true, msg: `Show bootcamp ${req.params.id}` });
}

// @dse create new bootcamp
// @route POST/api/v1/bootcamps
//@access private
exports.createBootcamp = (req, res, next) => {
    try {
      const bootcamp = await Bootcamp.create(req.body);
    console.log(req.body);
    res.status(200).json({ 
        success: true, 
        data: bootcamp
    });
    } catch (err) {
        res.status(400)
    }
};

// @dse Update bootcamps
// @route PUT/api/v1/bootcamps/:id
//@access private
exports.updateBootcamps = (req, res, next) => {
    res.status(200)
    .json({ success: true, msg: `Update bootcamp ${req.params.id}` });
}

// @dse Delete bootcamps
// @route DELETE/api/v1/bootcamps/:id
//@access public
exports.deleteBootcamps = (req, res, next) => {
    res.status(200)
    .json({ success: true, msg: `Delete bootcamp ${req.params.id}` });
}